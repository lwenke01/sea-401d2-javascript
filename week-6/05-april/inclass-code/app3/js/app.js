var app = angular.module('app', [])
app.controller('PeopleController', PeopleController) 

function PeopleController() {
  this.people = [
    {name: 'tim', age: 20}
  , {name: 'bob', age: 10}
  ]
}
