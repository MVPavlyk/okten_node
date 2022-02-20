const {Router} = require('express');
const userRouter = require('./userRoute');
const loginRouter = require('./loginRoute');
const singInRouter = require('./singInRoute');

const apiRouter = Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/singIn', singInRouter);
apiRouter.get('/error', (req, res) => {
    res.render('wrongPage');
});

apiRouter.use((req, res) => {
    res.render('wrongPage');
});

module.exports = apiRouter;