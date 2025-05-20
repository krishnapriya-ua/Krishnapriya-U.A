function Count(array){
   let result={}
   for (let i=1;i<=9;i++){
    result[i]=array.filter(num=>num%i===0).length
   }
   console.log(result)
}
let array=[1,2,8,9,12,46,76,82,15,20,30]
console.log(Count(array))