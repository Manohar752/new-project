// This program is written by Manohar// 

let x=function (n1,n2){
    let sum = n1+n2
    return sum
}
let i = x(10,20)
document.write(i)




// This program is written by Manohar// 

function isPrime(num)
{
    let value=0
    let i=1

    for (i=1;i<=num;i++)
    {
        if(num % i === 0)
        {
            value++
        }
        
    }
    if (value===2)
    {
        return num
    }
}  
    function filter( numbers,fn)
    {
        let res=[]
        for( let x in numbers)
        {
            if (fn(x))
            {
                res.push(x)
            }
        }
    
    return res
    }







const numbers = [ 11,20,3,4,50,6,7,8,9,20]

let evenArr = []

   let isEven = ((num)=>
   {
      return num % 2 === 0
   }
   )
   
   

newArr = numbers.filter(isEven)
 
console.log(newArr)