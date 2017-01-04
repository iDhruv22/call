/*

MIT License

Copyright (c) 2017 iDhruv22

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

var http = require('http');
var call = {};

call.request = function(options) {

  if (typeof options === 'undefined') {
    throw new Error('Not valid options.');
  }

  // Same options those are being use in NodeJS http module -
  // Refer - http://nodejs.org/api/http.html#http_http_request_options_callback

  try {
    return new Promise((resolve, reject) => {
      http.request(options, (res) => {
        var result = '';

        // Collect the data via stream
        res.on('data', (chunk) => {
          result += chunk;
        });

        // When stream ends
        res.on('end', () => {
          resolve({
            result,
            res
          });
        });

        // When error occured
        res.on('error', (e) => {
          reject(`${e.message}`);
        });
      }).end();
    });
  } catch (e) {
    console.log(e.name, e.message);
  }
}

call.parallel = function(listofpromises) {

  if (Object.prototype.toString.call(variable) != '[object Array]') {
    throw new Error('Not a valid array.');
  }

  try {
    return new Promise((resolve, reject) => {
      return Promise.all(listofpromises).then(result => {
        resolve(result);
      });
    });
  } catch (e) {
    console.log(e.name, e.message);
  }
}

module.exports = call;
