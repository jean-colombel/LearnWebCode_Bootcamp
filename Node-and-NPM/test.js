const tripleMe = require('./tripleMe')
const fs = require('fs')
const validator = require('validator')

let x = 10;

console.log(tripleMe(x))

fs.readFile('./content.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  fs.writeFile('./index.html', `<h1>${data}</h1>`, function(err) {
    if (err) throw err;
    console.log('File was succesfully created.')
  })
})

console.log(validator.isEmail("john"))
