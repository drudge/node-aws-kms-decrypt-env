
## Installation

      $ npm install aws-kms-decrypt-env --save

## Usage

```js
const decryptEnvVars = require('aws-kms-decrypt-env');

const decrypted = {};

exports.handler = function(event, context, callback) {
  if (decrypted.ok) return processEvent(event, context, callback);

  decryptEnvVars([
    'REDSHIFT_CONNECTION',
    'SECRET_ACCESS_KEY'
  ], decrypted, err => {
    if (err) return callback(err);
    processEvent(event, context, callback);
  });
};

function processEvent(event, context, callback) {
  // here you can access decrypted environment variables via:
  //   decrypted.REDSHIFT_CONNECTION
  //   decrypted.SECRET_ACCESS_KEY
}
```

## License

(The MIT License)

Copyright (c) 2017 Nicholas Penree <nick@penree.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.