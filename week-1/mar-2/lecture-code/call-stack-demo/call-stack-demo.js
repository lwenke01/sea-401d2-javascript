'use strict';

function third(){
  console.log('invoked third function');
  return;
}

function second(){
  console.log('invoked second function');
  third();
  return;
}

function first(){
  console.log('invoked first function');
  var x = 3;
  second();
  return;
}

first();
