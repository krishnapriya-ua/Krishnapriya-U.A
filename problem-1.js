// Program-1.js

class Calculator {
  constructor(a, b) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  operate(operation) {
    switch (operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  }
}

// Example usage:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter first number: ', (a) => {
  readline.question('Enter second number: ', (b) => {
    readline.question('Enter operation (add/subtract/multiply/divide): ', (operation) => {
      const calc = new Calculator(a, b);
      console.log('Result:', calc.operate(operation));
      readline.close();
    });
  });
});
