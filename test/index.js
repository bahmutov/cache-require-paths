var useCache = process.argv.some(function (str) {
  return str === '--cache';
});

if (useCache) {
  console.log('using filename cache');
  require('..');
}

function time(fn) {
  var t = process.hrtime();
  var result = fn();
  t = process.hrtime(t);
  var nanoToMs = 1e-6;
  console.log('benchmark took %d seconds and %d milliseconds',
    t[0], Math.round(t[1] * nanoToMs));
  console.log('bencharm function was');
  console.log(fn.toString());
}

function load() {
  var exp = require('express');
}

time(load);
