const readline = require('readline').createInterface({
    input : process.stdin,
    output :process.stdout
})

function OddNumber(num){
    const result=[]
    let number=1
    for(let i=0;i<num;i++){
        result.push(number)
        number+=2
    }
    console.log('Output : ',result.join(' , '))
}

readline.question('Enter a number : ',(number)=>{
    const num=parseInt(number)
    if(num<=0 || isNaN(num)){
        console.log('Enter a valid number !!')
    }
    else{
        OddNumber(num)
    }
    readline.close()
})