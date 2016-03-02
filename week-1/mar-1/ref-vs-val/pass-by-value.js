'use strict';

var num = 5;

function addOne(input){
  return  ++input;
}

console.log('orig num     : ' + num);         // 5
console.log('addOne result: ' + addOne(num)); // 6
console.log('orig num     : ' + num);         // 5
