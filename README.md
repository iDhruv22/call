CallJs for ES7 async and await
==============================

This is the wrapper around node js http module, and the call function returns a promise object.

__**Installation:**__

```javascript
  git clone https://github.com/iDhruv22/call.git
  cd call
  npm install
  npm start
```

__**Example:**__

__Single request:__

```javascript

  var call = require('./index');

  async function makecall() {
    var options = {
      host: 'jsonplaceholder.typicode.com',
      path: "/posts/1"
    };

    var data = await call.request(options);

    console.log(data);
  }
  makecall();

```
__Parallel request:__

```javascript

  var call = require('./index');

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

  makeParallelCalls();

```
