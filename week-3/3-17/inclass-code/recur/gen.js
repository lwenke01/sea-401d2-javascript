function* myGen() {
  yield('hello')
  yield('how')
}

var gen = myGen()
console.log(gen.next().value)
console.log(gen.next().value)

function* infNumbers() {
  var i = 0
  while (true) {
    yield(i++)
  }
}

var infGen = infNumbers()
console.log(infGen.next().value)
console.log(infGen.next().value)
console.log(infGen.next().value)
console.log(infGen.next().value)
