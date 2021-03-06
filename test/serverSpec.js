var expect = require("chai").expect;
var request = require("request");
var app = require("../app");

describe('Database server', function() {

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

  describe('getting route', function() {
    var setUrl = "http://localhost:4000/set?somekey=somevalue";
    var getUrl = "http://localhost:4000/get?key=somekey";
    var getWrongUrl = "http://localhost:4000/get?key=wrongkey";

    before(function() {
      request(setUrl);
    });

    it('returns status 200', function(done) {
      request(getUrl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns the value of the given key', function(done) {
      request(getUrl, function(error, response, body) {
        expect(body).to.equal('somevalue');
        done();
      });
    });

    it('prints a message if the key does not exist', function(done) {
      request(getWrongUrl, function(error, response, body) {
        expect(body).to.equal('Sorry, that key does not exist');
        done();
      });
    });
  });

});
