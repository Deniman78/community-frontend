const auth = require('../controllers/auth')

module.exports = app => {

    app.post('/api/auth/login', auth.login)
    
    app.post('/api/auth/register', auth.register) 

}
