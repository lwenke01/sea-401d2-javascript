const angular = require('angular');

const app = angular.module('PeopleApp', [])
app.controller('PeopleController', ['$scope', '$http', function($scope, $http) {
    const mainRoute = 'http://localhost:3000/people';
    $scope.people = ['person'];
    $scope.getPeople = function() {
      $http.get(mainRoute)
      .then(function (result) {
          $scope.people = result.data.people;
        });
      };
    $scope.createPerson = function(person) {
      $http.post(mainRoute, person)
        .then(function(res){
          $scope.people.push(person);
          $scope.newPerson = {};
        });
    };
    $scope.removePerson = function(person) {
      $http.delete(mainRoute + '/' + person._id)
        .then(function(res){
          $scope.people = $scope.people.filter((p) => p._id != person._id);
        });
    };

  }]);