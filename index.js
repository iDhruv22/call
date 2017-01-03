var http = require('http');
var call = {};

call.request = function(options) {

  // Same options those are being use in NodeJS http module -
  // Refer - http://nodejs.org/api/http.html#http_http_request_options_callback

  try {
    return new Promise((resolve, reject) => {
      http.request(options, (res) => {
        var data = '';

        // Collect the data via stream
        res.on('data', (chunk) => {
          data += chunk;
        });

        // When stream ends
        res.on('end', () => {
          resolve(data);
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
