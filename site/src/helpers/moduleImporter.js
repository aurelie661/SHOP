export class ModuleImporter{

    static import = async (className, folder) => {
        let path;

        if(className.endsWith("Service")){
            path = `../services/${className.remove("Service").toLowerCase()}.service.js`;

        }else if (className.endsWith("Controller")){
            path = `../controllers/${className.remove("Controller").toLowerCase()}.controller.js`;

        }else if (className.endsWith("View")){
            let splited = className.splitCamelCase();
            path = `../views/${splited[0].toLowerCase()}/${splited[1].toLowerCase()}.view.js`;

        }else if (folder){
            path = `../${folder}/${className.toLowerCase()}.${folder.slice(0, -1)}.js`;

        }else{
            path = `../models/${className.toLowerCase()}.model.js`;
        }

        let moduleClass;

        await import(path).then(module => {
                moduleClass = module[className]; 
            }).catch((err) => {
                console.log(`Fail to import ${className}`)
            });
        
        return moduleClass;
    }

}