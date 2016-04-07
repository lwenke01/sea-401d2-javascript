var person = {
  kind: 'human'
}

var dog = {
  kind: 'dog'
}


var fidoTheDog = { name: 'fido', hobby: 'playing fetch'}

fidoTheDog.__proto__ = dog
console.log(fidoTheDog.kind)

var cat = {
  kind: 'cat'
}

fidoTheDog.__proto__ = cat
console.log(fidoTheDog.kind)

cat.favFood = 'fish'
console.log(fidoTheDog.favFood)
