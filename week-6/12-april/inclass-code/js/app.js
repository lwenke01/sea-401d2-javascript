(function() {
  var app = angular.module('app', [])
  app.controller('NameController', NameController)

  function NameController() {
    this.firstName = 'Peggy'
    this.lastName = 'Hill'
    this.fullName = 'Peggy Hill'
    this.update = function() {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }
})()
