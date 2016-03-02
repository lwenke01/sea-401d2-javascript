var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('testing greet.js', function(){
  it('should return "hello, slug"', function(){
    expect(greet('slug')).to.equal('hello, slug');
  }); 
});
