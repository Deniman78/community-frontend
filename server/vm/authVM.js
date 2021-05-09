
class ErrorResponseVM {
    constructor(error) {
        this.status = false;
        this.message = error;
    }
}

class LoginVM {
    constructor(params) {
        this.status = params.token != null;
        this.message = params.msg;
        this.data = params.token;
    }
}

class RegisterVM {
    constructor(params) {
        this.status = true;
        this.message = params;
    }
}

module.exports = {
    error: (error) => new ErrorResponseVM(error),
    login: (params) => new LoginVM(params),
    register: (params) => new RegisterVM(params)
};
