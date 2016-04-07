function Dog(name, age) {
  var this = {}
  this.__proto__ = Dog.prototype
  this.name = name
  this.age = age
}

Dog.prototype.bark = function() {
  console.log('woof')
}

var dog = new Dog('dogert, 2)
dog.bark()
