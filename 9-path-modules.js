const path = require('path')
// separator
// console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath) \content\subfolder\test.txt
// const base = path.basename(filePath)
// console.log(base) test.txt

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute) C:\Users\asus\Desktop\nodeTuto\first\content\subfolder\test.txt

// our application will run in other environement
