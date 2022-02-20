const {Router} = require('express');
const singInController = require('../controllers/singInController');
const correctEmail = require('../middleware/correctEmail');

const singInRouter = Router();

singInRouter.get('/', singInController.getSingIn);

singInRouter.post('/', correctEmail, singInController.sendSingInData);

module.exports = singInRouter;