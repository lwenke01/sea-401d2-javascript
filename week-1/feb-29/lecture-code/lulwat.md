**README.md**
``` javascript
Modular Patterns
================

# hello world
* **hello-world.js**
``` javascript
'use strict';

console.log('hello world');
```

# module.expports
* **greet.js**
``` javascript
'use strict';
module.exports = function(name){
  return 'hello ' + name;
}

console.log('hello from inside greet.js');
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/2-greet-module-exports');
console.log(greet('unicorn'));
```

# exports
* **greet.js**
``` javascript
'use strict';
exports.greet = function(name){
  return 'hello a second time ' + name;
}
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/3-greet-exports').greet;
console.log(greet('unicorn'));
```

# Testing !!!
* `npm install mocha -g`
* `npm install chai`
* **test/greet-test.js**
``` javascript
var greet = require(__dirname + '/../2-greet-module-exports');
var greet2 = require(__dirname + '/../3-greet-exports.js').greet;

var expect = require('chai').expect;

describe('test the first greet function', function(){
  it('should greet a "hello test"', function(){
    expect(greet('test')).to.eql('hello test');
  });
});

describe('test the second greet function', function(){
  it('should greet a "hello a second time test"', function(){
    expect(greet2('test')).to.eql('hello a second time test');
  });
});
```
```

**greet.js**
``` javascript
'use strict';

function greet(name){
  return "hello, " + name + '!!!!';
}

module.exports = greet;
```

**helloworld.js**
``` javascript
'use strict';

var greet = require(__dirname + '/greet');
var greeting = greet('aaron the slug');
console.log(greeting);
```

**lulwat.md**
``` javascript
**README.md**
``` javascript
Modular Patterns
================

# hello world
* **hello-world.js**
``` javascript
'use strict';

console.log('hello world');
```

# module.expports
* **greet.js**
``` javascript
'use strict';
module.exports = function(name){
  return 'hello ' + name;
}

console.log('hello from inside greet.js');
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/2-greet-module-exports');
console.log(greet('unicorn'));
```

# exports
* **greet.js**
``` javascript
'use strict';
exports.greet = function(name){
  return 'hello a second time ' + name;
}
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/3-greet-exports').greet;
console.log(greet('unicorn'));
```

# Testing !!!
* `npm install mocha -g`
* `npm install chai`
* **test/greet-test.js**
``` javascript
var greet = require(__dirname + '/../2-greet-module-exports');
var greet2 = require(__dirname + '/../3-greet-exports.js').greet;

var expect = require('chai').expect;

describe('test the first greet function', function(){
  it('should greet a "hello test"', function(){
    expect(greet('test')).to.eql('hello test');
  });
});

describe('test the second greet function', function(){
  it('should greet a "hello a second time test"', function(){
    expect(greet2('test')).to.eql('hello a second time test');
  });
});
```

**greet.js**
``` javascript
'use strict';

function greet(name){
  return "hello, " + name + '!!!!';
}

module.exports = greet;

**helloworld.js**
``` javascript
'use strict';

var greet = require(__dirname + '/greet');
var greeting = greet('aaron the slug');
console.log(greeting);

**lulwat.md**
``` javascript

**papawheelie.js**
``` javascript
'use strict';

var tricycle = {
  wheels: 3,
  type: 'bigwheel',
  color: 'techna'
};

exports.papaWheelie = function(num){
  return 'wheelie poped ' + num + 'cm off the ground';
};

exports.getVehicle = function(){
  return tricycle;
}

```

**papawheelie.js**
``` javascript
'use strict';

var tricycle = {
  wheels: 3,
  type: 'bigwheel',
  color: 'techna'
};

exports.papaWheelie = function(num){
  return 'wheelie poped ' + num + 'cm off the ground';
};

exports.getVehicle = function(){
  return tricycle;
}
```

