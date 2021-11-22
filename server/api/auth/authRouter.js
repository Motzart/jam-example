// import axios from 'axios';

const { login } = require('../../service/authService');

module.exports = (router) => {
  router.post('/auth/login', async (req, res, next) => {
    try {
      const response = await login(req, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

  // TODO will be implemented later
  // router.post('/auth/registration', async (req, res, next) => {
  //   try {
  //     const response = await UserService.login(req, req.body);
  //     res.json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.post('/auth/refreshtoken', async (req, res, next) => {
  //   try {
  //     const response = await UserService.registration(req, req.body);
  //     res.json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.post('/auth/restore-password', async (req, res, next) => {
  //   try {
  //     const response = await UserService.restorePassword(req, req.body);
  //     res.json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.get('/auth/logout', (req, res) => {
  //   const redirectUrl = req.cookies.lastLocation || '/';
  //   res.clearCookie('lastLocation');
  //   res.clearCookie('jwt_token');
  //   res.redirect(redirectUrl);
  // });
}