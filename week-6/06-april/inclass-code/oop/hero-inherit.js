function Human(name, attack) {
  this.name = name
  this.attack = attack
  this.health = 100
}

Human.prototype.fight = function(e) {
  e.takeDamage(this.attack)
}

Human.prototype.takeDamage = function(damage) {
  this.health -= 100
}

function SuperHuman(name, attack) {
  Human.call(this, name, attack)
  this.health = 1000
  this.attack += 100
}


SuperHuman.prototype = new Human()
SuperHuman.prototype.doGood = function() {
  console.log('I am a do gooder')
}

var s = new SuperHuman('super dude', 30)
console.log(s.health)
console.log(s.fight)
console.log(s.__proto__)
s.doGood()

var h = new Human('bob', 10)
h.doGood()
