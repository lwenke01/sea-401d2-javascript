module.exports = function(app) {
  app.factory('CountService', function() {
    var myService = {};
    var count = 0;
    var show = false;

    myService.getShow = function() {
      return show;
    }

    myService.show = function() {
      show = !show;
    }

    myService.increment = function() {
      count++;
    };

    myService.getCount = function() {
      return count;
    };

    return myService;
  })
};
