"use strict";

var splitStream = require('split-transform-stream');

module.exports = function(inputStream) {
  var regexp = new RegExp("^([0-9a-fA-F]{40})\\srefs\/(\\w.*)$");

  function write(line, enc, cb) {
    var matched = null;

    if (matched = line.match(regexp)) {
      this.push({
        hash: matched[1],
        name: matched[2]
      }, 'utf8');
    }

    cb();
  }

  return splitStream(inputStream, write);
};
