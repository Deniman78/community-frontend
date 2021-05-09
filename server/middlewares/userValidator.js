const {check, validationResult} = require('express-validator');

exports.userValidator = [
//   check('name')
//     .trim()
//     .escape()
//     .not()
//     .isEmpty()
//     .withMessage('User name can not be empty!')
//     .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
   check('password')
    .isLength({min: 5})
    .withMessage('Minimum 5 characters required!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({errors: errors.array()});
    next();
  },
];

