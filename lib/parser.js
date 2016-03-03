'use strict';

var splitStream = require('split-transform-stream');

function parse(inputStream) {
  var regexp = new RegExp('^([0-9a-fA-F]{40})\\srefs\/(\\w.*)$');

  function write(line, enc, cb) {
    var matched = line.match(regexp);

    if (matched) {
      this.push({
        hash: matched[1],
        name: matched[2]
      }, 'utf8');
    }

    cb();
  }

  return splitStream(inputStream, write);
}

module.exports = parse;
