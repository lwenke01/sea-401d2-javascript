var promisify = require('promisify-node')
var fs = promisify('fs')

fs.readFile('./promise2.js').then(data => {
  console.log(data)
})
