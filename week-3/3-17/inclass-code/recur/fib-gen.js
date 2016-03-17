function* fibGen() {
  var x = 0
  var y = 1
  while (true) {
    var temp1 = x
    var temp2 = y
    x = temp2 
    y = temp1 + temp2
    yield(y)
  }
}

var fibGen = fibGen()
console.log(fibGen.next().value)
console.log(fibGen.next().value)
console.log(fibGen.next().value)
console.log(fibGen.next().value)
console.log(fibGen.next().value)
