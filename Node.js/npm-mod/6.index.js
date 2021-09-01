// ------------ Chalk.js ---------------------------
const chalk = require('chalk');

// console.log(chalk.blue.underline.inverse('hello world!'));

// console.log(chalk.green.inverse('Great Success'));

// console.log(chalk.red.bold.inverse('error 404'));

// console.log(chalk.yellow.strikethrough.inverse('boingggg'));

// ------------ validator.js ---------------------------
const validator = require('validator');

const result = validator.isEmail('prakhar@gmail.com');
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));