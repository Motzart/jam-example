// import { getData } from '../fetchService';
const { fakePromise } = require('../utils/fake');
// const api = require("../../src/services/api");
// const TokenService = require("../../src/services/token.service");

// class UserService {
//   static async login(req, loginData) {
//     const response = await getData({
//       path: '/login',
//       options: {
//         method: 'POST',
//         data: loginData,
//       },
//     });
//     return response.data;
//   }
// }

const login = async(req, loginData) => {
  // const response = await getData({
  //   path: '/login',
  //   options: {
  //     method: 'POST',
  //     data: loginData,
  //   },
  // });
  const response = await fakePromise();
  console.log('response', response)
  return response.data;
}


module.exports = { login };