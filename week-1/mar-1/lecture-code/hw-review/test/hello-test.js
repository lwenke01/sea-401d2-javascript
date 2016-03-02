'use strict';

var expect = require('chai').expect;
var hello = require(__dirname + '/../hello');

describe('testing hello.js', function(){
  describe('testing hello.js with no arguments', function(){
    it('it should return "hello, world"', function(){
      expect(hello()).to.equal('hello, world');
    });
  });

  describe('test hello.js with arguments', function(){
    beforeEach(function(){
      this.processArgvBackup = process.argv;
      process.argv = ['node', 'path/to/hello.js', 'slug'];
    });

    afterEach(function(){
      process.argv = this.processArgvBackup;
    });

    it('it should return "hello, slug"', function(){
      expect(hello()).to.equal('hello, slug');
    });
  });
});
