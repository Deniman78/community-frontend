const auth = require('../controllers/auth')
const {userValidator} = require('../middlewares/userValidator');

module.exports = app => {

    app.post('/api/auth/login', auth.login)
    
    app.post('/api/auth/register',userValidator, auth.register) 

}
