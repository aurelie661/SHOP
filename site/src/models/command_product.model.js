import { BaseModel } from "./baseModel.model.js";

export class Command_product extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        delete this.id;
    }

    quantity = 0;
    product_id = 0;
    command_id = 0;

}