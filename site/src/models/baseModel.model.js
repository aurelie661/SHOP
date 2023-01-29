export class BaseModel{

    id = 0;
    
    assign = (props) => {
        for (let key in props) {
            if (!this.hasOwnProperty(key)) {
                delete props[key];
                continue;
            }
            if(key.endsWith('_date')){
                props[key] = new Date(props[key])
            }
        }
        Object.assign(this, props);
    }

/************************************ HAS ONE TOO ************************************/
    hasOneTooRelations = {};
    hasOneToo = (model, 
                name = model.toLowerCase(),
                fk = this.constructor.name.toLowerCase() + "_id") => 
        {      
            this.hasOneTooRelations[model] = {fk, name};
            return this;
        }

/************************************** HAS ONE **************************************/
    hasOneRelations = {};
    hasOne = (model, name = model.toLowerCase(), fk = model.toLowerCase() + "_id") => {
        this.hasOneRelations[model] = {fk, name};
        return this;
    }

/************************************** HAS MANY *************************************/
    hasManyRelations = {};
    hasMany = (model, 
                name = model.toLowerCase()+ "List",
                fk = this.constructor.name.toLowerCase() + "_id") => 
        {      
            this.hasManyRelations[model] = {fk, name};
            return this;
        }

/********************************** HAS MANY THROUGH *********************************/
    hasManyThroughRelations = {};
    hasManyThrough = (model,
                      through,
                      name = model.toLowerCase() + "List",
                      fk_model = model.toLowerCase() + "_id",
                      fk = this.constructor.name.toLowerCase() + "_id") => 
        {
            this.hasManyThroughRelations[model] = {through, fk_model, fk, name};
            return this;
        }


/*************************************** OTHER ***************************************/        
    get properties(){
        return JSON.tryParse(JSON.stringify(this));
    }

    toString(){
        let str = this.constructor.name + "{\n"; 
        for(let key in this.properties){
            let value = this[key];
            str+=`${key}: ${value}\n`;
        }
        return str + "}";
    }

    static from(obj){
        if(Array.isArray(obj)){
            return obj.map(item => new this(item));
        }
        else if(typeof obj == "object"){
            return new this(obj);
        }
        return;
    }
}