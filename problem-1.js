class Calculator{
  constructor(a,b){
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  Operate(operation){
    switch(operation){
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'division':
        return this.b !== 0 ? this.a / this.b : 'Invalid output';
      default:
        return 'Invalid output'
    }
  }
}

const readline = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
})

readline.question('Enter your first input : ',(a)=>{
  readline.question('Enter your second input : ',(b)=>{
    readline.question('Enter the operation (add, subtract, multiply, division ) : ',(operation)=>{
      const calc=new Calculator(a,b)
      console.log('Result : ',calc.Operate(operation))
      readline.close()
    })
  })
})