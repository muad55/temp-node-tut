// fs = fileSystem

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second) Hello this is first text file  Hello this is second text file
// create file
// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first},${second}`
// )
// if there is some value in result.sync it will be by overriden node

// if u want to open the file , u should pass just one more argument

// to avoid override the file (don't remove the content of the file) :
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first},${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next task')
