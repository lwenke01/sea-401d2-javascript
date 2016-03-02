'use strict';

var holyPoint = {
  x: 3,
  y: 7
};

function addOne(pt){
  pt.x++;
  pt.y++;
  return pt;
}

console.log('orig point    : ', holyPoint);         // x = 3, y = 7
console.log('result addOn  : ', addOne(holyPoint)); // x = 4, y = 8
console.log('orig point    : ', holyPoint);         // x = 4, y = 8
