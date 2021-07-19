let args = process.argv.slice(2),
fs = require('fs'),
framework = require('./framework'),
file = fs.readFileSync(args[0]).toString();
console.log(framework.css.parse(file));