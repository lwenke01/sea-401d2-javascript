const angular = require('angular');

const app = angular.module('PeopleApp', [])

require('angular-route')
require('./services/auth_service')(app);

app.controller('PeopleController', ['AuthService','$http' ,function(AuthService, $http) {
    const mainRoute = 'http://localhost:3000/people';
    const vm = this;
    vm.people = [];

    vm.people = ['person'];
    vm.getPeople = function() {
      $http.get(mainRoute, {
        headers: {
          token: AuthService.getToken()
        }
      })
        .then(function (result) {
            vm.people = result.data;
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
    vm.signUp = function(user){
      AuthService.createUser(user);
    }

  }]);
  app.config(['$routeProvider', function(router){
    Router.when('/signup', {
      controller: 'PeopleController',
      controllerAs: 'peoplectrl',
      templateUrl: 'views/signup_in.html'
    })
    // .when('/home', {
    //   controller: 'PeopleController',
    //   controllerAs: 'peopleCtrl',
    //   templateUrl: 'views/home.html'
    // })
  }])
