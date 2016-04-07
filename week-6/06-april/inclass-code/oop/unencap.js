var person = {
  name: 'john',
  age: 22
  hobby: 'fishing'
}

function addAge(person) {
  person.age = person.age + 1
}

addAge(person)


function Person() {
  this.name = 'john'
  this.age = 22
  this.hobby = 'fishing'
}

Person.prototype.addAge = function() {
  this.age = this.age + 1
}

var p = new Person()
p.addAge()
