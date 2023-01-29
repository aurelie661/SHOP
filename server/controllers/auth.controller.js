const App_userService = require('../services/app_user.service');
const MailerService = require('../services/mailer.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appConfig = require("../config/app.config");

class AuthController{

    getUser = async (email, res) =>{
        const userService = new App_userService();
        const users = await userService.selectAll({where: `login = "${email}"`});
        return users.length === 1 ? users.pop() : null;
    }

    login = async (params ,res) => {
        if(params.method !== 'POST') return {status:405};

        const user = await this.getUser(params.body.login);
        if (user) {
            
            const passwordEnteredByUser = params.body.password
            const hash = `${appConfig.HASH_PREFIX + user.password}`;
            
            const isMatch = await bcrypt.compare(passwordEnteredByUser, hash);
            if(!isMatch){
                return {status:401};
            }else{
                const payload = {id: user.id, email: user.login, role: user.role};
                const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
                return {id: user.id, email: user.login, role: user.role,token:token,result:true,message: "Connexion ok !"};
            } 
           
        }
        return {status:404};
    }

    register = async(params, res) => {
        // if(params.method !== 'PUT') return {status:405};
        const user = await this.getUser(params.login);

        if(user){
            return {status:500}
        }else{
            try{
                const payload = {mail: params.login, role: 1};
                const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
                //SEND MAIL
                const html = 
                `
                <b>Confirmez votre inscription : </b>
                <a href="http://localhost:3000/account/validation?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>
                
                `;               
                const mailerService = new MailerService();
                await mailerService.sendMail({to: params.login, subject:"Confirmer votre inscription", html}); 

                let password = await bcrypt.hash(params.password, 10);
                let passwordHash = password.slice(7,password.length);
                params.password = passwordHash;
                const app_userService = new App_userService().insertOneOrMany(params);
                return {status:200}
            

            }catch(error){
                return {error}
            }
        }
    }

    validate = async (req, res) => {
        return "validate";
        // let password = await bcrypt.hash(params.body.password, 10);
        // let passwordHash = password.slice(7,password.length);
        // params.body.password = passwordHash;
        
        // const app_userService = new App_userService().insertOneOrMany(params.body);
    };
    
    renew = async (req, res) => {
      return "renew";
    };

    check = async (req, res) => {
      const auth = req.cookies.auth;
      if(auth){
        const result = jwt.verify(auth,appConfig.JWT_SECRET);
        if(result){
          return {result:true, role:result.role};
        }
      }
      return {result:false, role:0}
    }

}
module.exports = AuthController;