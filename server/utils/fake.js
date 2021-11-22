const userAuthData = {
  data: {
    name: 'test',
    token: '22',
    refreshToken: '33'
  }
}

const fakePromise = () => {
  return new Promise(function (resolve, reject) {
    setTimeout (function(){
      console.log ('using fake promise:');
      let mockResponseData = userAuthData;
      resolve(mockResponseData);
    }, 1000);
  });
}

module.exports = { fakePromise };