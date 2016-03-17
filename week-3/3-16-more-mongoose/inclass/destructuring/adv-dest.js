var person = { name: 'joe', age: 99 }

var { age: myAge, name: myName} = person

var {name, age} = { name: 'joe', age: 99 }
console.log(name)
console.log(age)

var {name, age: ratherOld} = { name: 'joe', age: 99 }
console.log(name)
console.log(ratherOld)

var add = require('./calc').add
var sub = require('./calc').sub

var {add, sub} = require('./calc')
