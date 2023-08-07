const { verify } = require("jsonwebtoken");
const AppError = require("../utils/App.Error");
const authConfig = require("../configs/auth")


function ensureAuthenticated(request, response, next){
    const authHeader = request.headers['authorization'];
    const { secret } = authConfig.jwt;

    if(!authHeader){
        throw new AppError("JWT token inválido", 401)
    };

    const [, token] = authHeader.split(' ');

    try{
        const { sub: user_id} = verify(token, secret)

        request.user = {
            id: +user_id,
        };

        return next();

    }catch{
        throw new AppError("JWT token inválido", 401)
    };


};


module.exports = ensureAuthenticated;