const ApiError = require('../exceptions/ApiError')

const TokenService = require('../service/TokenService');

module.exports = (err, req, res, next) => {
    try{
        const authorizationHeadr = req.headers.authorization;
        if(!authorizationHeadr){
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeadr.split(' ')[1];

        if(!accessToken){
            return next(ApiError.UnauthorizedError())
        }

        const userData = TokenService.validateAccessToken(accessToken);

        if(!userData){
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next();

    }catch (err){
        return next(ApiError.UnauthorizedError())
    }
}