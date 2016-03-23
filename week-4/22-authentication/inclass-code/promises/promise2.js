var fs = require('fs')

/*
fs.readFile('file1', (err, data) => {
  console.log('hello from 1')
  fs.readFile('file2', (err, data) => {
    console.log('hello from 2')
    fs.readFile('file3', (err, data) => {
      console.log('hello from 3')
      fs.readFile('file4', (err, data) => {

      })
    })

  })
})

.then(

)
.then(

)
.then(

)
.then(

)
*/

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

readFile('./promise1.js')
.then(data => {
  console.log('read in data from file 1')
  return readFile('file2')
})
.then(data => readFile('file3'))
.then(data => {
  console.log('read in data from file 3')
})


