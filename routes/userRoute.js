const {Router} = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getOneUser);

module.exports = userRouter;