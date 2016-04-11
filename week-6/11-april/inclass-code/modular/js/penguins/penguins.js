(function() {
  angular.module('penguins')
    .controller('PenguinController', PenguinController) 

  function PenguinController() {
    this.name = 'Peggy the Penguin'
  }
})()
