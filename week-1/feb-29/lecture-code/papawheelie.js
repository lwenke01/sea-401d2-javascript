'use strict';

var tricycle = {
  wheels: 3,
  type: 'bigwheel',
  color: 'techna'
};

exports.papaWheelie = function(num){
  return 'wheelie poped ' + num + 'cm off the ground';
};

exports.getVehicle = function(){
  return tricycle;
}
