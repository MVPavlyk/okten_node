const users = require('../db/users');

const correctEmail = (req, res, next) => {
    try {
        const {email} = req.body;
        for (const user of users) {
            if (user.email === email) {
                return next();
            }
        }
        throw new Error('ніфіга, нема такого мейлу');
    } catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
};

module.exports = correctEmail;