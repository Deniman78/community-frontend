const {AuthService} = require('../service');

module.exports = {
  register: async (req, res, next) => {
    try {

      const {email, password} = req.body;
      const userData = await AuthService.register(email, password);
      res.cookie('refreshToken', {}, {maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
      
    } catch(err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {

      const {email, password} = req.body;
      const userData = await AuthService.login(email, password);
      res.cookie('refreshToken', {}, {maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
      
    } catch(err) {
      next(err);
    }
  },

  logout: async(req,res, next) =>  {
    try {
      const {refreshToken} = req.cookies;
      const token = await AuthService.logout(refreshToken);
      res.clearCookie('refreshToken')
      return res.status(200);
    } catch(err) {
      next(err);
    }
  },

  activate: async(req,res, next) =>  {  
    try {
      const {activationLink} = req.params.link;

      await AuthService.activate(activationLink);

      return res.redirect('http://localhost:3000/')
      
    } catch(err) {
      next(err);
    }
  },

  refresh: async(req,res, next) =>  {
    try {
      const {refreshToken} = req.cookies;
      const userData = await AuthService.refresh(refreshToken);
      res.cookie('refreshToken', {}, {maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
    } catch(err) {
      next(err);
    }
  }
};
