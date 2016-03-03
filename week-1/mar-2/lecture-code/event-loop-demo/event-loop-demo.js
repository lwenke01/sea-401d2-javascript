'use strict';

process.nextTick(function(){
  console.log('wat fire');
  process.nextTick(function(){
    console.log('yolo ');
  });
});

process.nextTick(function(){
  console.log('last fire');
});

console.log('first fire');
