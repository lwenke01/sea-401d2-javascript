const angular = require('angular');

const app = angular.module('PeopleApp', [])
app.controller('PeopleController', ['$http', function($http) {
    const mainRoute = 'http://localhost:3000/people';
    const vm = this;

    vm.people = ['person'];
    vm.getPeople = function() {
      $http.get(mainRoute)
        .then(function (result) {
            vm.people = result.data.people;
          });
    };

    vm.createPerson = function(person) {
      $http.post(mainRoute, person)
        .then(function(res){
          vm.people.push(res.data);
          vm.newPerson = null;
        });
    };

    vm.removePerson = function(person) {
      $http.delete(mainRoute + '/' + person._id)
        .then(function(res){
          vm.people = vm.people.filter((p) => p._id != person._id);
        });
    };

    vm.updatePerson = function(person) {
      $http.put(mainRoute + '/' + person._id, person)
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

  }]);