const services = require("../services");

class BaseController{

    constructor(){

        this.name = this.constructor.name.replace("Controller","");
        this.table = this.name.toLowerCase();
        this.service = new services[this.table]();
    }

    getAll = async () => {
        const result = await this.service.selectAll();
        return result;
    }

    getOne = async (req, res) => {
        const result = await this.service.selectOne(res.locals.id);
        return result;
    }

    createOne = async (req, res) => {
        const result = await this.service.insertOneOrMany();
        return result;
    }

    updateWhere = async (req, res, where) => {
        const result = await this.service.update(res.locals.id);
        return result;
    }
    
    deleteOne = async (req, res) => {
        const result = await this.service.deleteOne(res.locals.id);
        return result;
    }
}
module.exports = BaseController;