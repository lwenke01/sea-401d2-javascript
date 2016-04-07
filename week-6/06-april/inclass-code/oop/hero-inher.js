function Human(name, power) {
  this.name = name
  this.power = power
  this.hp = 100
}

Human.prototype.attack = function(target) {
  target.takeDamage(this.power)
}

Human.prototype.takeDamage = function(damage) {
  this.hp -= damage
}

function SuperHuman(name, power, superpower) {
  Human.call(this, name, power)
  // this = {name: name, power: power, hp: hp}
  this.superpower = superpower
  // this = {superpower: superpower, name: name, power: power, hp: hp}
}

SuperHuman.prototype = new Human()

SuperHuman.prototype.usePower = function(target) {
  target.takeDamage(this.superpower) 
}

console.log(SuperHuman.prototype)

var superDude = new SuperHuman('super dude', 50, 100)
var normalDude = new Human('normal man', 10)

superDude.usePower(normalDude)
superDude.attack(normalDude)
//

/*
Human.prototype.beHuman = function() {
  console.log('I am a human')
}

superDude.beHuman()
*/

superDude.attack = 'so attack'

console.log(superDude.attack)
delete superDude.attack
console.log(superDude.attack)

function PowerfullHero(name) {
  return new SuperHuman(name, 100, 100)
}

