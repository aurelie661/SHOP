import { BaseModel } from "./baseModel.model.js";

class Category extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasMany("Product");
    }

    title = "";
    description = "";
    image= "";
}
export default Category;