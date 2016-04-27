const angular = require('angular');

require('angular-route')

const app = angular.module('PeopleApp', ['ngRoute']);

require('./services/auth_service')(app);
require('./services/error_service')(app);

app.controller('PeopleController', ['AuthService','$http', '$location', 'ErrorService',
    function(AuthService, $http, $location, ErrorService) {
    const mainRoute = 'http://localhost:3000/people';
    const vm = this;
    vm.people = [];
    vm.error = ErrorService();
    console.log(vm.error);
    vm.people = ['person'];
    vm.getPeople = function() {
      $http.get(mainRoute, {
        headers: {
          token: AuthService.getToken()
        }
      })
        .then(function (result) {
            vm.error = ErrorService(null);
            vm.people = result.data;
          }, (err) => {
            vm.error = ErrorService('Please Sign In');
            $location.path('/signup');
          });
    };

    vm.createPerson = function(person) {
      $http.post(mainRoute, person, {
        headers: {
          token: AuthService.getToken()
        }
      })
        .then(function(res){
          console.log(res);
          vm.people.push(res.data);
          vm.newPerson = null;
        });
    };

    vm.removePerson = function(person) {
      $http.delete(mainRoute + '/' + person._id, {
        headers: {
          token: AuthService.getToken()
        }
      })
        .then(function(res){
          vm.people = vm.people.filter((p) => p._id != person._id);
        });
    };

    vm.updatePerson = function(person) {
      $http.put(mainRoute + '/' + person._id, person, {
        headers: {
          token: AuthService.getToken()
        }
      })
        .then((res) => {
          person.editing = false;
        }, (err) => console.log(err))
    };

    vm.toggleForm = function(person) {
      if (!person.editing) {
        person.backupName = person.name;
        person.editing = true;
      } else {
        person.name = person.backupName;
        person.editing = false;
      }
    }

    vm.signUp = function(user) {
      AuthService.createUser(user, function(err, res) {
        if (err) return vm.error = ErrorService('Problem Creating User');
        vm.error = ErrorService(null);
        $location.path('/home');
      });
    }

    vm.signOut = function() {
      AuthService.signOut(() => {
        $location.path('/signup');
      });
    }
    vm.signIn = function(user) {
      AuthService.signIn(user, (err, res) => {
        if (err) return vm.error = ErrorService('Problem Signing In');
        vm.error = ErrorService(null);
        $location.path('/home');
      })
    }

  }]);

app.config(['$routeProvider', function(router) {
  router
    .when('/signup', {
      controller: 'PeopleController',
      controllerAs: 'peoplectrl',
      templateUrl: 'views/signup_in.html'
    })
    .when('/home', {
      controller: 'PeopleController',
      controllerAs: 'peoplectrl',
      templateUrl: 'views/home.html'
    })
}])










