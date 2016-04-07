function Hero(name, armor, attack) {
  this.name = name
  this.armor = armor
  this.attack = attack
  this.health = 100
}

Hero.prototype.attack = function(target) {
  target.takeDamage(this.attack)
}

Hero.prototype.takeDamage = function(damage) {
  this.health = (this.health - (damage - this.armor))
}

var hero1 = new Hero('bob the plumber', 5, 10)
var hero2 = new Hero('Trogdor the burninator', 1, 50)

//hero2.attack(hero1)

var trogdor1 = new Hero('Trogdor the burninator yay', 1, 50)
var trogdor2 = new Hero('lizardman', 1, 50)
var trogdor3 = new Hero('yatd', 1, 50)


function Trogdor(name) {
  var newTrogdor = this // {}
  Hero.call(newTrogdor, name, 1, 50) 
}

var castleEater = new Trogdor('yum castles')
console.log(castleEater.health)
