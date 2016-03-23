var fs = require('fs')

/*
fs.readFile('./file1.txt', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  return data
})
*/

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    //resolve('hello')
    reject('goodbye')
  })
}

readFile('stuff').then((data) => {
  console.log(data)
}).catch(err => console.log(err))
readFile('stuff').then((data) => {
  console.log(data)
})

var p = readFile()

p.then(data => console.log(data))





/*
var p = readFile('./file1.txt')



readFile('./file1.txt').then(data => {

}).catch(err => {

})
*/
