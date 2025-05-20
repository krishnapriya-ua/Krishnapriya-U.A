const readline=require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
})

function OddPattern(number){
    let count=parseInt(number)

    if(count<=0 || isNaN(count)){
        console.log('Enter a valid number !!')
        return;
    }

    let result=[]
    let num=1
    let limit = count % 2 === 0 ? count-1 : count

    for(let i=0;i<limit;i++){
        result.push(num)
        num+=2
    }
    
    console.log('Output : ',result.join(' , '))
}

readline.question('Enter a number : ',(number)=>{
    OddPattern(number)
    readline.close()
})