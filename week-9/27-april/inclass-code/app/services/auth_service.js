module.exports = function(app){
  app.factory('AuthService', ['$http', '$window', function($http, $window) {
    var token;
    var url = 'http://localhost:3000';

    var auth = {
      createUser(user) {
        $http.post(url + '/signUp', user)
        .then((res)=>{
          token = $window.localStorage.token = res.data.token;
        })
      },
      getToken(){
        return token || $window.localStorage.token;
      }
    }
    return auth;
  }])
};
