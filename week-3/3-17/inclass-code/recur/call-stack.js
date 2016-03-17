function x() {
  var a = 4
  var b = 10
  var c = 15
  y()
  return a + b + c  
}

function y() {
  var [x, y, z] = [5, 15, 20]
  // stuff
  return
}

var a = 'b'
x()
console.log(a)
