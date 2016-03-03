'use strict';

// un-comment one of the outsideName variables then run cash-demo.js
// then switch which one is uncovered and re run cash-demo.js
// do you notice the difference?

//var outsideName = null;
var greet = module.exports = function(name){
  //var outsideName = null;
  var name = outsideName = outsideName || name;
  return 'hello ' + name;
}

console.log(greet('slugs and unicons'));

