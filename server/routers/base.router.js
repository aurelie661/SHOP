const Router = require('express').Router;
const controllers = require('../controllers');

class BaseRouter{

    constructor(){
        this.router = Router();
        this.name = this.constructor.name.replace(`Router`,``);
        this.table = this.name.toLowerCase();
        this.controller = new controllers[this.table]();
        this.initializeRoutes();
    }

    initializeRoutes = () => {

        // getAll on bdd
        this.router.get('/', async (req, res, next) => {
            // const data = await this.controller.getAll();
            // res.send(data);
            next(this.controller.getAll);
        });
   
        // getOne on bdd
        this.router.get('/:id', async (req, res, next) => {
            // const data = await this.controller.getOne(req.params.id);
            // res.send(data);
            res.locals.id = req.params.id;
            next(this.controller.getOne);
        });

        // post to get
        this.router.post('/', async (req, res, next) => {
            // const data = await this.controller.getAll(req.body);
            // res.send(data);
            next(this.controller.getAll);
        });

        //put to create one row on bdd
        this.router.put("/", async (req, res, next) => {
        //     const response =  await this.controller.createOne(req.body);
        //   res.send(response);
            next(this.controller.createOne)
        });
        
        // put to update one row on bdd
        this.router.put('/:id', async (req, res, next) => {
            const params = {...req.body, where: `id=${req.params.id}`}
            // const data = await this.controller.updateWhere(params);
            // res.send(data);
            res.locals.id = params;
            next(this.controller.updateWhere);
        });
        
        //update with condition
        this.router.patch("/", async (req, res, next) => {
            // const response = await this.controller.updateWhere(req.body);
            // res.send(response);
            next(this.controller.updateWhere);
        });
        //soft delete
        this.router.patch('/:id', async (req, res, next) => {
            // const softParams = {deleted: "1", where:`id=${req.params.id}`}
            // const data = await this.controller.updateWhere(params);
            // res.send(data);
            res.locals.id = req.params.id;
            next(this.controller.updateWhere);
        });     

        // delete one row on bdd
        this.router.delete('/:id', async (req, res, next) => {
            // const data = await this.controller.deleteOne(req.params.id);
            // res.send(data);
            res.locals.id = req.params.id;
            next(this.controller.deleteOne);
        });

        //TODO next generaliser
    }
    
}

module.exports = BaseRouter;