var app = angular.module('app', [])

app.directive('dog', function() {
  return {
    restrict: 'E',
    scope: {
      age: '=',
      hobby: '='
    },
    transclude: true,
    replace: true,
    template: '<section><button ng-click="dogCtrl.addYear()"> age</button> My Dog: {{age}} {{hobby}} <ng-transclude></ng-transclude></section>',
    controller: function($scope) {
      this.addYear = function() {
        $scope.age += 1
      } 
    },
    controllerAs: 'dogCtrl'
  }
})

app.directive('customDirective', function() {
  return {
    restrict: 'E',
    scope: {
      x: '='
    },
    replace: true,
    template: '<p> X equals: {{x}}'
  }
})
