const {Router} = require('express');
const loginController = require('../controllers/loginController');
const  loginCheck = require('../middleware/loginCheck')

const loginRouter = Router();

loginRouter.get('/', loginController.getLogin);

loginRouter.post('/', loginCheck, loginController.sendLoginData);


module.exports = loginRouter;