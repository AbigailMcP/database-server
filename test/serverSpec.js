var expect = require("chai").expect;
var request = require("request");
var app = require("../app");

describe('Database server', function() {

  var url = "http://localhost:4000/";

  it('returns status 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
