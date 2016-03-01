'use strict';
var expect = require('chai').expect;
var greet = require(__dirname + '/../greet.js');
var papaWheelieObject = require(__dirname + '/../papawheelie.js');

var getVehicle = papaWheelieObject.getVehicle;
var papaWheelie = papaWheelieObject.papaWheelie;

describe('testing greet function from greet.js', function(){
  it('greet should return "hello, slug"', function(){
    expect(greet('slug')).to.equal('hello, slug!!!!');
  });
});

describe('testing functions on papaWheelie', function(){
  it('it shoud return a tricycle object', function(){
    var tricycle = getVehicle();
    expect(tricycle.wheels).to.equal(3);   
  });

  it('should return "wheelie poped 42cm off the ground"', function(){
    
    expect(papaWheelie(42)).to.equal("wheelie poped 42cm off the ground");
  });
});
