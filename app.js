const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {urlencoded} = require('express');
const apiRouter = require('./routes/apiRoute');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(urlencoded({extended: true}));


app.use(apiRouter);


app.listen(666, () => {
    console.log('rabotaet');
});

