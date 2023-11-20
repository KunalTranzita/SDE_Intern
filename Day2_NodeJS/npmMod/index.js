import chalk from 'chalk';
import validator from 'validator';
//console.log(chalk.green.italic.underline.inverse('Hello world!'));

const res=validator.isEmail("kunal@kunal.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
