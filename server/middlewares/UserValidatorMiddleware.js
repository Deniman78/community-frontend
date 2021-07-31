const { check, validationResult } = require('express-validator');
const ApiError = require('../exceptions/ApiError')

module.exports = [
  check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Minimum 5 characters required!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      throw ApiError.BadRequest("Data incorrect", errors.array());
    }
    next();
  },
];
