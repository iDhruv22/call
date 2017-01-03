# call
CallJs for ES7 async and await
==============================

This is the the wrapper on node js http module. The call function returns a promise object.

__**Installation:**__

```javascript
  git clone https://github.com/iDhruv22/call.git
  cd call
  npm install
  npm start
```

__**Example:**__

```javascript
  var call = require('./index');

  async function makecall() {
    var data = await call({
      host: 'jsonplaceholder.typicode.com',
      path: "/posts/1"
    });
    console.log(data);
  }

  makecall();
```
