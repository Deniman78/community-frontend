/**
 * @typedef LoginVM
 * @property {string} email.required
 * @property {string} password.required
 */
class LoginVM {
  constructor(params) {
    this.email = params.email;
    this.password = params.password;
  }
}

/**
 * @typedef RegisterVM
 * @property {string} email.required
 * @property {string} password.required
 */
class RegisterVM {
  constructor(params) {
    this.email = params.email;
    this.password = params.password;
  }
}

/**
 * @typedef LoginResponseVM
 * @property {boolean} status
 * @property {string} token
 */
class LoginResponseVM {
  constructor(token) {
    this.status = token !== null;
    this.token = token;
  }
}

/**
 * @typedef ErrorResponseVM
 * @property {boolean} status
 * @property {string} error
 */
class ErrorResponseVM {
  constructor(error) {
    this.status = false;
    this.error = error;
  }
}

module.exports = {
  login: token => new LoginResponseVM(token),
  error: error => new ErrorResponseVM(error),
  loginModel: params => new LoginVM(params),
  registerModel: params => new RegisterVM(params),
};
