const ApiError = require('../exceptions/ApiError')

module.exports = (err, req, res, next) => {
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
}