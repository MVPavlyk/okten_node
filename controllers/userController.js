const users = require('../db/users');

const userController = {
    getAllUsers: (req, res) => {
        res.render('users', {users});
    },
    getOneUser: (req, res) => {
        const {id} = req.params;
        if (id > 0 && id <= users.length) {
            const user = users[id - 1];
            res.render('oneUser', {user});
        } else {
            res.redirect('/wrongPage');
        }
    }
};

module.exports = userController;