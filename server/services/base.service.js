const dbConfig = require("../config/db.config");
const mysql = require("mysql");

class BaseService{

    constructor() {
        this.name = this.constructor.name.replace(`Service`, ``);
        this.table = this.name.toLowerCase();
    }

    static connection;
    static connect = ()=> {
        if(!BaseService.connection){
            BaseService.connection = mysql.createPool({
                host: dbConfig.HOST,
                port: dbConfig.PORT,
                user: dbConfig.USER,
                password: dbConfig.PASS,
                database: dbConfig.NAME
            });
        }
        return BaseService.connection;
    }

    static executeQuery = async (sql) => {
        const result = 
         await new Promise((resolve,reject) => {
             BaseService.connect().query(sql, (err,rows) => {
                 if(err){
                     return reject(err);
                 }
                 return resolve(rows);
             });
        });
        return result;
    }

    selectAll = async (params,res) => {
        let sql = `SELECT * FROM ${this.table} WHERE deleted = 0 `;
        if(params?.where){
            sql += `AND (${params.where.replace('&&','AND').replace('||','OR')});`;
        }
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }

    selectOne = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE deleted = 0 AND id = ${id}`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows : null;
        return row;
    }

    insertOneOrMany = async (params) => {
        if(Array.isArray(params)) {
            if (params.length === 0) return null;
            const columns = Object.keys([...params].pop()).join(',');
            let allValues = [];

            params.forEach(object => {
                let values = Object.values(object);

                values = values.map((val) => {
                    return (val = "'" + val.replace(/'/g, "''") + "'");
                });

                values = values.join(",");
                allValues.push("(" + values + ")");
            })

            allValues = allValues.join(',');
            const sql = `INSERT INTO ${this.table} (${columns}) VALUES ${allValues};`;
            const result = await BaseService.executeQuery(sql);

            if (result.affectedRows === params.length) {
                return await this.selectAll({ where: `id >= ${result.insertId} && id < ${result.insertId + result.affectedRows}` });
            }
            return false;
        }
          else {
            //INSERT ONE ROW
            let key = '';
            let value = '';

            for (const item in params) {
                key += item + ",";
                value += `"${params[item]}"` + ',';
            }

            key = key.substring(0, (key.length - 1));
            value = value.substring(0, (value.length - 1));

            const sql = `INSERT INTO ${this.table} (${key}) VALUES (${value}) `;
            const result = await BaseService.executeQuery(sql);
            return result;
          }
    }

    update = async (params) => {
        let where = params.where?.replace('&&','AND').replace('||','OR') || '1';
        delete params.where;
        let values = [];
        for(const key in params){
            values.push(`${key}='${params[key].replace(/'/g, "''")}'`);
        }
        values = values.join(',');
        let sql = `UPDATE ${this.table} SET ${values} WHERE ${where}`;
        const result = await BaseService.executeQuery(sql);
        return result;
    }
    
    deleteOne = async (id) => {
        const sql = `DELETE FROM ${this.table} WHERE id = ${id}`;
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }
}
module.exports = BaseService;