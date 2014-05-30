"use strict";

var proxyquire = require('proxyquire');
var should = require('should');
var fs = require('fs');

var streamingParser = require('../lib/parser');

describe('git-show-ref', function() {
  it('should parse the output', function(done) {
    var refs = [];
    var inputStream = fs.createReadStream(__dirname + '/fixture.txt', 'utf8');

    streamingParser(inputStream).on('data', function(ref) {
      refs.push(ref);
    }).on('end', function() {
      refs.should.eql(require(__dirname + '/output.json'));
      done();
    });
  });
});
