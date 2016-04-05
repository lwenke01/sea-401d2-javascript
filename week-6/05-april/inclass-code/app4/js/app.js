angular.module('app', [])
  .controller('PanelController', function() {
    this.tab = 'home'
    this.isActive = function(someTab) {
      return this.tab == someTab
    }
    this.setTab = function(newTab) {
      this.tab = newTab
    }
  })
