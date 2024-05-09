// CommonJS,every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// import the vars from another files

const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(names) - { john: 'john', peter: 'peter' }

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
