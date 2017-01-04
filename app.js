var call = require('./call');

async function makecall() {
  var data = await call.request({
    host: "qrng.anu.edu.au",
    path: "/API/jsonI.php?length=1&type=uint8"
  });

  console.log(data.result);
}

async function makeParallelCalls() {
  var requests = [
    call.request({
      host: "qrng.anu.edu.au",
      path: "/API/jsonI.php?length=1&type=uint8"
    }),
    call.request({
      host: "qrng.anu.edu.au",
      path: "/API/jsonI.php?length=1&type=uint8"
    }),
    call.request({
      host: "qrng.anu.edu.au",
      path: "/API/jsonI.php?length=1&type=uint8"
    })
  ];

  var data = await call.parallel(requests);
  console.log(data.result);
}

makecall();
