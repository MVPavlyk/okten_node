const users = require('../db/users');
const validation = require('../validation/validation');

const loginController = {
    getLogin: (req, res) => {
        res.render('login');
    },
    sendLoginData: (req, res) => {
        if (validation.uniqueEmail(req.body.email)) {
            users.push(req.body);
            res.redirect('/users');
        } else {
            res.redirect('/wrongPage');
        }
    }
};

module.exports = loginController;