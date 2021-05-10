const authController = require('../controllers/AuthController');
const { userValidator } = require('../middlewares/userValidator');

module.exports = app => {
  /**
   * @route POST /api/auth/login
   * @group Authorization
   * @param {LoginVM.model} model.body.required
   * @returns {LoginResponseVM.model} 200 - OK
   * @returns {ErrorResponseVM.model} 400 - Bad Request
   * @returns {string} 500 - Internal Server Error
   */
  app.post('/api/auth/login', authController.login);

  /**
   * @route POST /api/auth/register
   * @group Authorization
   * @param {RegisterVM.model} model.body.required
   * @returns {LoginResponseVM.model} 200 - OK
   * @returns {ErrorResponseVM.model} 400 - Bad Request
   * @returns {string} 500 - Internal Server Error
   */
  app.post('/api/auth/register', userValidator, authController.register);
};
