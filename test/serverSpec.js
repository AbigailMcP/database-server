var expect = require("chai").expect;
var request = require("request");
var app = require("../app");

describe('Database server', function() {

  describe('homepage', function() {
    var url = "http://localhost:4000/";

    it('returns status 200', function(done) {
      request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
      });
    });
  });

  describe('setting route', function() {
    var url = "http://localhost:4000/set?somekey=somevalue";

    it('returns status 200', function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('saves a key value pair to a hash', function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('{"somekey":"somevalue"}');
        done();
      });
    });

  });

});
