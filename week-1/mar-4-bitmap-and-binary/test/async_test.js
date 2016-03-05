const expect = require('chai').expect;

describe('async test', () => {
  it('is the the best test evarrrrr!!!!!', (bird) => {
    process.nextTick(() => {
      expect(true).to.eql(true);
      bird();
    });
  });

  it('throws and error', () => {
    throw new Error('fail the test');
  });
});

describe('async test', function() {
  it('is the the best test evarrrrr!!!!!', function(done) {
    process.nextTick(function() {
      expect(true).to.eql(false);
    });
  });
});
