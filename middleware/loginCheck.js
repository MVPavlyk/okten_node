const loginCheck = (req, res, next) => {
    try {
        const {firstname, lastname, email, password, age, city} = req.body;
        if (!(firstname && lastname && email && password && age && city)) {
            throw new Error('Друже, заповни всі поля');
        }
        next();
    } catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
};

module.exports = loginCheck;