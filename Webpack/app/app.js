import isEmail from 'validator/lib/isEmail'
import tripleMe from './tripleMe'

console.log(isEmail("john"))
console.log(tripleMe(3))

if (module.hot) {
  module.hot.accept()
}
