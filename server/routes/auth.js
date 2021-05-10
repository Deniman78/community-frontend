const auth = require('../controllers/auth')
const {userValidator} = require('../middlewares/userValidator');

module.exports = app => {

    /**
     * @route POST /api/auth/login
     * @group Authorization
     * @param {LoginVM.model} model.body.required
     * @returns {LoginResponseVM.model} 200 - OK
     * @returns {ErrorResponseVM.model} 400 - Bad Request
     * @returns {string} 500 - Internal Server Error
     */
    app.post('/api/auth/login', auth.login)


    /**
     * @route POST /api/auth/register
     * @group Authorization
     * @param {RegisterVM.model} model.body.required
     * @returns {LoginResponseVM.model} 200 - OK
     * @returns {ErrorResponseVM.model} 400 - Bad Request
     * @returns {string} 500 - Internal Server Error
     */
    app.post('/api/auth/register',userValidator, auth.register) 

}
