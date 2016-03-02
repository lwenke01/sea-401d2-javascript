'use strict';

var greet = require(__dirname + '/lib/greet');
var face = require('cool-ascii-faces');

console.log(face());

var hello = function(){
  var greeting = greet(process.argv[2] || 'world' );
  console.log(greeting);
  return greeting;
};

hello();

module.exports = hello;
