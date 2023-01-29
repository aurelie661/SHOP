import { BaseModel } from "./baseModel.model.js";

export class Customer extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasMany("Command");
        this.hasOneToo("Appuser");
    }

    fullname = "";
    email = "";

}