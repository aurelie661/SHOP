import { BaseModel } from "./baseModel.model.js";

export class Command extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasOne("Customer");
        this.hasManyThrough("Product", "Command_product");
    }

    numero = "";
    validation_date = new Date();
    customer_id = 0;

}