(function() {
  angular.module('dogs', [])
  .directive('dog', function() {
    return {
      restrict: 'E',
      template: '<p>yo dawg</p>'
    }
  })
})()
