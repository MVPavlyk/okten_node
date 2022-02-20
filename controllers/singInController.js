const validation = require('../validation/validation');

const singInController = {
    getSingIn: (req, res) => {
        res.render('singIn');
    },
    sendSingInData: (req, res) => {
        const {email, password} = req.body;
        if (validation.dataChecker(email, password)) {
            const id = validation.dataChecker(email, password);
            res.redirect(`/users/${id + 1}`);
        } else {
            res.redirect('/wrongPage');
        }
    }
};

module.exports = singInController;