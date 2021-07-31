const bcrypt = require('bcryptjs');
const uuid = require('uuid')

const {UserModel} = require('../models');

const MailService = require('./MailService');
const TokenService = require('./TokenService');

const ApiError = require('../exceptions/ApiError');

const {UserDto} = require('../dtos')

class AuthService { 
    async register(email, password) {
        const candidate = await UserModel.findOne({email});

        if(candidate){
            throw ApiError.BadRequest("User already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const activationLink = uuid.v4();

        const user = await UserModel.create({email, password: hashedPassword, activationLink});

        await MailService.sendActivationEmail(email, `http://localhost:5000/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({...userDto});
        
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        }
    }
    async activate(activationLink) {
        const user = UserModel.findOne({activationLink});

        if(!user){
            throw ApiError.BadRequest("Wrong link")
        }
        user.isActivated = true;

        await user.save();
    }
    async login(email, password) {
        const user = UserModel.findOne({email});

        if(!user){
            throw ApiError.BadRequest("User not found")
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if(!isPassEquals){
            throw ApiError.BadRequest("Wrong Password")
        }

        const userDto = new UserDto(user);

        const tokens = TokenService.generateTokens({...userDto});
        
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        }
    }
    async logout(refreshToken){
        await TokenService.removeToken(refreshToken);
    }
    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }

        const userData = TokenService.validateRrfreshToken(refreshToken);
        const tokenFromDB = await TokenService.findToken(refreshToken);

        if(!userData || !tokenFromDB){
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id);

        const userDto = new UserDto(user);

        const tokens = TokenService.generateTokens({...userDto});
        
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        }
    }
}

module.exports = new AuthService();