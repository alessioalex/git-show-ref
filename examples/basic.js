/* eslint-disable func-names, no-console */
'use strict';

var gitShowRef = require('../');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));

gitShowRef(repoPath).on('data', function(data) {
  console.log(data);
}).on('error', function(err) {
  throw err;
}).on('end', function() {
  console.log('\n-----------------');
  console.log('That\'s all folks!');
});
