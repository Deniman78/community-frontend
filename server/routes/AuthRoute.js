const {AuthController} = require('../controllers');
const { UserValidatorMiddleware, } = require('../middlewares');

module.exports = app => {
  app.post('/api/auth/login', AuthController.login);

  app.post('/api/auth/register', UserValidatorMiddleware, AuthController.register);

  app.post('/api/auth/logout', AuthController.logout);

  app.get('api/auth/activate/:link', AuthController.activate);

  app.get('api/auth/refresh', AuthController.refresh);
};
