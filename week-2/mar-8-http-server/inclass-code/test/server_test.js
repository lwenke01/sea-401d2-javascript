var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');
var fs = require('fs');

describe('Vanilla HTTP server tests', () => {
  var html;
  before((done) => {
    fs.readFile(__dirname + '/../public/index.html', (err, data) => {
      html = data.toString();
      done();
    })
  })
  it('should respond to /hello with hello', (done) => {
    request('localhost:3000')
      .get('/hello')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body).to.eql({message: 'hello'});
        done();
      })
  })
  it('should send back an index page', (done) => {
    request('localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql(html)
        done();

      })
  })
  it('should get back a 404', (done) => {
    request('localhost:3000')
      .get('/anything')
      .end((err, res) => {
        expect(err).to.not.eql(null);
        expect(res).to.have.status(404);
        expect(res.text).to.eql('404 Not Found');
        done();
      })
  })
})