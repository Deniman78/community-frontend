const auth = require('../controllers/auth')
const {userValidator} = require('../middlewares/userValidator');

module.exports = app => {

    app.post('/api/auth/login',userValidator, auth.login)
    
    app.post('/api/auth/register',userValidator, auth.register) 

}
