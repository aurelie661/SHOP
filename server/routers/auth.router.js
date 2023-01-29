const Router = require('express').Router;
const AuthController = require('../controllers/auth.controller');

class AuthRouter{

    constructor(){
        this.router = Router();
        this.initializeRoutes();
    }

    initializeRoutes = () => {

        // /auth/login
        this.router.post('/login', async (req, res, next) => {
            // const data = await new AuthController().login(req);
            // res.send(data);
            next(new AuthController().login);
        });
        // /auth/register
        this.router.put('/register', async (req, res, next) => {
            // const response = await new AuthController().register(req.body);
            // res.send(response);
            next(new AuthController().register);
        });
        // /auth/validate
        this.router.post('/validate', async (req, res, next) => {
            // const data = await new AuthController().validate(req);
            // res.send(data);
            next(new AuthController().validate);
        });
        // /auth/renew
        this.router.post('/renew', async (req, res, next) => {
            // const data = await new AuthController().renew(req);
            // res.send(data);
            next(new AuthController().renew);
        });
        // /auth
        this.router.get('/', async (req, res, next) => {
            // const data = await new AuthController().check(req);
            // res.send(data);
            next(new AuthController().check);
        });

    }

}

module.exports = AuthRouter;