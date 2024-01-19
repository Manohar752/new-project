// // This program is written by Manohar// 

// let x=function (n1,n2){
//     let sum = n1+n2
//     return sum
// }
// let i = x(10,20)
// document.write(i)




// // This program is written by Manohar// 

// function isPrime(num)
// {
//     let value=0
//     let i=1

//     for (i=1;i<=num;i++)
//     {
//         if(num % i === 0)
//         {
//             value++
//         }
        
//     }
//     if (value===2)
//     {
//         return num
//     }
// }  
//     function filter( numbers,fn)
//     {
//         let res=[]
//         for( let x in numbers)
//         {
//             if (fn(x))
//             {
//                 res.push(x)
//             }
//         }
    
//     return res
//     }







// const numbers = [ 11,20,3,4,50,6,7,5,8,9,20]

//     isEven = (num)=>
//     {
//          return num % 2 === 0
//     }
// newArr = numbers.filter(isEven)
 
// console.log(newArr)


// function num (...numbers){

// let sum = 0
// let i

// for(i of numbers){
//     sum = sum + i
// } 
//  return sum
// }

// res=num( 11,22,30,40,50)

// console.log(res)


// const numbers = [440,20,30,40,50]

// const sum = numbers.sort ((accumalator,currentvalue)=>  accumalator + currentvalue )


// console.log(sum)


// let numb = [2,4,6,8,10]
    
//  isEven=((num)=> num % 2 === 0)

//  const res = numb.every(isEven)
//  console.log(res)

// OBJECTS*******
// let alien = {
//     name:'manu',
//     technology:'js'
// }
// console.log(alien);





// DOM*********************

// const myButton = document.querySelector("#btn")
// myButton.addEventListener("click",()=>{
//  document.querySelector("body").style.background="orange";
// })
// console.log(myButton);


// function validateform(){  
//     let name=document.myform.name.value;  
//   let password=document.myform.password.value;  
      
//     if (name==null || name=="")
//     {  
//       alert("Name can't be blank");  
//       return false;  
//     }
//     else if(password.length<8)
//     {  
//       alert("Password must be at least 8 characters long.");  
//       return false;  
//       }  
//     } 
//     console.log(validateform);






// // Color Picker*********************************************
// const myButton = document.querySelector("#btn")
// const myBody = document.body
// const myHead = document.querySelector("h2")
// // const myColor= `(${red},${green},${blue})`
// // console.dir(myHead)
 


// function randomColorGenarator(){ 

// console.log(myButton);

// const red = Math.floor(Math.random()*256)
// const green = Math.floor(Math.random()*256)
// const blue = Math.floor(Math.random()*256)


// const rgb = `rgb(${red},${green},${blue})`
// return rgb
// }

// myButton.addEventListener("click",()=>{
//   let randomColor =randomColorGenarator()
  
//   myBody.style.backgroundColor= randomColor;
//   myHead.style.color = "black";
//   myHead.textContent= randomColor;
// })




// const myBtn = document.querySelector("#btn")

// function myFunc(){
// const myInput = document.querySelector(".input").value
// const myHead = document.querySelector("#head")
// myHead.textContent = `${myInput}`
// }


// myBtn.addEventListener("click",myFunc)



let myBtn = document.querySelector("#btn")


let body = document.querySelector("body");
let myMode = "light";


myBtn.addEventListener("click",()=>{
if(myMode ==="light"){
   
    myMode ="dark";
    body.classList.add("dark");
    body.classList.remove("light");
}else{
    myMode ="light";
    body.classList.add("light");
    body.classList.remove("dark");
}

console.log(myMode);
});
