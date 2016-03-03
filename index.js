"use strict";

var gitSpawnedStream = require('git-spawned-stream');
var streamingParser = require('./lib/parser');

function getReferences(repoPath, opts) {
  var args = ['show-ref'];

  if (opts) {
    if (opts.tags) { args.push('--tags'); }
    if (opts.heads) { args.push('--heads'); }
  }

  return streamingParser(gitSpawnedStream(repoPath, args));
}

module.exports = getReferences;
