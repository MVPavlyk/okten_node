const users = require('../db/users');

const validation = {
    uniqueEmail: (email) => {
        for (const user of users) {
            if (email === user.email) return false;
        }
        return true;
    },
    dataChecker: (email, password) => {
        for (const user of users) {
            if (email === user.email && password === user.password) {
                return users.indexOf(user);
            }
        }
        return false;
    }
};

module.exports = validation;