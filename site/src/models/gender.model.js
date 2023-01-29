import { BaseModel } from "./baseModel.model.js";

export class Gender extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasMany("Product");
    }

    title = "";
    image = "";
}