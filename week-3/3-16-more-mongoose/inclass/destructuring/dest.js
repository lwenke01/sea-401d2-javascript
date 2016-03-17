/*
var [a, b, c, d, e] = [1, 2, 3, 4]
console.log(d)
console.log(e)
*/

/*
var [a,,c,d] = [1,2,3,4]
console.log(a)
console.log(c)
console.log(d)

var a = 10
var a = 15
*/

var [a, b, c] = [1, [2, 3, 4], 2]
var [a, b, c] = [1, [2, 3, 4], 2]
var [a, [b, c, d], e] = [1, [2, 3, 4], 2]
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

var [a, [, c, ], e] = [1, [2, 3, 4], 2]


console.log(a)
console.log(b)
console.log(c)





