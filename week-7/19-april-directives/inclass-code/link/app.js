var app = angular.module('app', [])

app.directive('custom', function() {
  return {
    scope: {}
  , restrict: 'A'
  , link: function($scope, element, attrs) {
      element.on('click', function() {
        element.css('border', 'solid')
      })  
    }
  }
}
