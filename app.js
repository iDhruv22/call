var call = require('./index');

async function makecall() {
  var data = await call.request({
    host: 'jsonplaceholder.typicode.com',
    path: "/posts/1"
  });

  console.log(data);
}

async function makeParallelCalls() {
  var requests = [
    call.request({
      host: 'jsonplaceholder.typicode.com',
      path: "/posts/1"
    }),
    call.request({
      host: 'jsonplaceholder.typicode.com',
      path: "/posts/2"
    }),
    call.request({
      host: 'jsonplaceholder.typicode.com',
      path: "/posts/3"
    })
  ];

  var data = await call.parallel(requests);
  console.log(data);
}

// makecall();
makeParallelCalls();
