var app = angular.module('app', [])

app.directive('customNav', function() {
  return {
    return : 'E',
    // this location is relative to index.html. NOT the current file
    templateUrl: './app/templates/navbar.html'
  }
})
