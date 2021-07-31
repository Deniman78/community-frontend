const jwt = require('jsonwebtoken');
const config = require('config');

const {TokenModel} = require('../models')

class TokenService {
    generateTokens(payload){

        const accessToken = jwt.sign(payload, config.get('jwtAccessSecret'), {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, config.get('jwtRefreshSecret'), {expiresIn: '1d'});

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token){
        try{
            const userData = jwt.verify(token,  config.get('jwtAccessSecret'))
            return userData
        } catch (err){
            return null;
        }
    }

    validateRrfreshToken(token){
        try{
            const userData = jwt.verify(token,  config.get('jwtRefreshSecret'))
            return userData
        } catch (err){
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({user: userId});

        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save();
        }

        const token = await TokenModel.create({user: userId, refreshToken});

        return token;
    }
    async removeToken(refreshToken){
        await TokenModel.deleteOne({refreshToken});
    }
    async findToken(refreshToken){
        return await TokenModel.findOne({refreshToken});
    }
}

module.exports = new TokenService