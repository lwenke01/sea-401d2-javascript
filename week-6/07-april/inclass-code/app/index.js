const angular = require('angular');

const app = angular.module('PeopleApp', [])
app.controller('PeopleController', ['$http', function($http) {
    const mainRoute = 'http://localhost:3000/people';
    this.smokeTest = 'SMOKE TEST';
    this.people = ['person'];
    this.getPeople = function() {
      $http.get(mainRoute)
      .then((result) => {
          this.people = result.data.people;
        }, function(error) {

        })
      }
    this.createPerson = function(person) {
      $http.post(mainRoute, person)
        .then((res) => {
          this.people.push(person);
          this.newPerson = {};
        })
    }
    this.removePerson = function(person) {
      $http.delete(mainRoute + '/' + person._id)
        .then((res) => {
          this.people = this.people.filter((p) => p._id != person._id);
        })
    }

  }]);