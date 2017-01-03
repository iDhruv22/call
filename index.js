var http = require('http');
var https = require('https');

function call(options) {
  try {
    return new Promise((resolve, reject) => {
      https.request(options, (res) => {
        var data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });

        res.on('error', (e) => {
          reject(`${e.message}`);
        });

      }).end();
    });
  } catch (e) {
    console.log(e.name, e.message);
  }
}

module.exports = call;
