"use strict";

var gitSpawnedStream = require('git-spawned-stream');
var streamingParser = require('./lib/parser');

function getReferences(repoPath) {
  var args = ['show-ref'];

  return streamingParser(gitSpawnedStream(repoPath, args));
}

module.exports = getReferences;
