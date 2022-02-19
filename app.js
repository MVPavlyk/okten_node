const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {urlencoded} = require('express');

/* Starting settings */

const app = express();
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');

app.engine('.hbs', engine({defaultLayout: false}));

app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(urlencoded({extended: true}));

/* Start users array */

const users = [
    {
        firstname: 'Oleg',
        lastname: 'Kokos',
        email: 'example@gmail.com',
        password: '1111',
        age: 14,
        city: 'Lviv'
    }
];

/* Validating functions */

const uniqueEmail = (email) => {
    for (const user of users) {
        if (email === user.email) return false;
    }
    return true;
};

const dataChecker = (email, password) => {
    for (const user of users) {
        if (email === user.email) {
            if (password === user.password) {
                return users.indexOf(user);
            }
        }

    }
    return false;
};

/* Render endpoints  */


app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/error', (req, res) => {
    res.render('wrongPage');
});

app.get('/singIn', (req, res) => {
    res.render('singIn');
});

app.get('/users', (req, res) => {
    res.render('users', {users});
});

/* Other functions */


app.post('/login', (req, res) => {
    if (uniqueEmail(req.body.email)) {
        users.push(req.body);
        res.redirect('/users');
    } else {
        res.redirect('/wrongPage');
    }
});


app.post('/singIn', (req, res) => {
    const {email, password} = req.body;
    if (dataChecker(email, password)) {
        const id = dataChecker(email, password);
        res.redirect(`/users/${id + 1}`);
    }
});


app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    if (id > 0 && id <= users.length) {
        const user = users[id - 1];
        res.render('oneUser', {user});
    } else {
        res.redirect('/wrongPage');
    }

});

/* Wrong page and starting server */

app.use((req, res) => {
    res.render('wrongPage');
});

app.listen(666, () => {
    console.log('rabotaet');
});

