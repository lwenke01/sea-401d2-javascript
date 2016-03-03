## buffer-demo
**buffer-demo/buffer-demo.js**
``` javascript
'use strict';

var helloBuf = new Buffer('hello world');
console.log('helloBuf           : ', helloBuf);
console.log('helloBuf.lengh     : ', helloBuf.length);

console.log('\n ---- buffers and strings -----');
console.log('helloBuf.toSting()            : ', helloBuf.toString());
console.log('helloBuf.toSting("utf8", 6)   : ', helloBuf.toString('utf8', 6));
console.log('helloBuf.toSting("hex")       : ', helloBuf.toString('hex'));
helloBuf.write('slugs', 6);
console.log('helloBuf.write("slugs", 6)');
console.log('helloBuf.toString()           : ', helloBuf.toString());

console.log('\n ---- buffers and numbers -----');
console.log('helloBuf.readUInt8()          : ', helloBuf.readUInt8());
console.log('helloBuf.readUInt16LE()       : ', helloBuf.readUInt16LE());
```

## call-stack-demo
**call-stack-demo/call-stack-demo.js**
``` javascript
'use strict';

function third(){
  console.log('invoked third function');
  return;
}

function second(){
  console.log('invoked second function');
  third();
  return;
}

function first(){
  console.log('invoked first function');
  var x = 3;
  second();
  return;
}

first();
```

## event-loop-demo
**event-loop-demo/event-loop-demo.js**
``` javascript
'use strict';

process.nextTick(function(){
  console.log('wat fire');
  process.nextTick(function(){
    console.log('yolo ');
  });
});

process.nextTick(function(){
  console.log('last fire');
});

console.log('first fire');
```

## fs-module-demo
**fs-module-demo/fs-module-demo.js**
``` javascript
'use strict';

var fs = require('fs');

fs.readFile('./helloworld.txt', function(err, data){
  if (err) return console.error(err);
  console.log(data.toString());
});

//fs.readFile('./dosnt-exist.txt', function(err, data){
  //if (err) return console.error(err);
  //console.log(data.toString());
//});
```

**fs-module-demo/helloworld.txt**
``` javascript
hello world, from a file 
```

