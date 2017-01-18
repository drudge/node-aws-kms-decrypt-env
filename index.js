'use strict';

const aws = require('aws-sdk');
const series = require('async-series');

function decryptEnvVar(key, out) {
  const kms = new aws.KMS();
  return function (next) {
    kms.decrypt({
      CiphertextBlob: new Buffer(process.env[key], 'base64')
    }, (err, buf) => {
      if (err) return next(err);
      out[key] = buf.Plaintext.toString('utf8');
      next();
    });
  }
}

function decryptEnvVars(keys, out, fn) {
  series(keys.map(key => decryptEnvVar(key, out)), err => {
    if (err) return fn(err);
    out.ok = true;
    fn();
  });
}

module.exports = decryptEnvVars;