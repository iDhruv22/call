var call = require('./index');

async function makecall() {
  var data = await call({
    host: 'jsonplaceholder.typicode.com',
    path: "/posts/1"
  });
  console.log(data);
}

makecall();
