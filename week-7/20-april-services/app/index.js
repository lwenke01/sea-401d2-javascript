const angular = require('angular');

const app = angular.module('PeopleApp', [])

require('./js/services/count_service')(app);
require('./js/services/http_service')(app);

app.controller('PeopleController', ['$http', 'CountService', 'ResourceService',
    function($http, CountService, ResourceService) {

    const mainRoute = 'http://localhost:3000/people';
    const vm = this;
    const peopleResource = ResourceService('people');

    console.log(peopleResource)

    vm.people = ['person'];
    vm.count = CountService.getCount();

    vm.shouldShow = CountService.getShow();

    vm.show = function() {
      CountService.show();
      vm.shouldShow = CountService.getShow();
    }

    vm.increment = function() {
      CountService.increment();
      vm.count = CountService.getCount();
    }

    vm.getPeople = function() {
      peopleResource.getAll()
        .then(function (result) {
            vm.people = result.data.people;
          });
    };

    vm.createPerson = function(person) {
      peopleResource.create(person)
        .then(function(res){
          vm.people.push(res.data);
          vm.newPerson = null;
        });
    };

    vm.removePerson = function(person) {
      peopleResource.remove(person)
        .then(function(res){
          vm.people = vm.people.filter((p) => p._id != person._id);
        });
    };

    vm.updatePerson = function(person) {
      peopleResource.update(person)
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

app.controller('SecondController', function(CountService) {
    var vm = this;
    vm.count = CountService.getCount();

    vm.shouldShow = CountService.getShow();

    vm.show = function() {
      CountService.show();
      vm.shouldShow = CountService.getShow();
    }

    vm.increment = function() {
      CountService.increment();
      vm.count = CountService.getCount();
    }
})


