'use strict'

function fiveTimes(i) {
  //base case
  if (i > 5) {
    return
  }
  
  //recursive case
  console.log(i)
  fiveTimes(i + 1)
}

function factorial(n) {
  //base case
  if (n <= 1) {
    return n
  }
  return n * factorial(n-1)
}

console.log(factorial(1))
console.log(factorial(5))

var cache = {}
function fib(n) {
  //var cache = arguments[1] || {}
  // base case
  if (n == 0 || n == 1) {
    return n
  }

  return fib(n-2, cache) + fib(n-1, cach3)
}

fib(5)

