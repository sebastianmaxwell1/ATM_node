const prompt = require('prompt-sync')();

console.log('Deposit or Withdrawl');

const atmAction = prompt();

console.log(`You are going to make a ${atmAction}!`)