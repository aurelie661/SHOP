const jwt = require("jsonwebtoken");
const config = require("../config/app.config");

class AuthMiddleware{

    static authCheck = async(action, req, res, next) => {
        const route = Object.keys(config.RESTRICTED_ROUTES).find(route => req.originalUrl.match(route));
        if(route){
            const predicate = config.RESTRICTED_ROUTES[route];
            const auth = req.cookies.auth;
            if(auth){
                const result = jwt.verify(auth, config.JWT_SECRET);
                if(result && predicate(result, res.locals)){
                    const data = await action(req, res);
                    return res.send(data);
                }
            }
            return res.send({result: false, message: "Accés non autoriser"});
        }
        const data = await action(req, res);
        return res.send(data);
    }
}
module.exports = AuthMiddleware.authCheck;