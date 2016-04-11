(function() {
  var app = angular.module('salmons', [])
  app.controller('SalmonController', SalmonController)

  function SalmonController() {
    this.freshness = 'fresh'
  }
})()
