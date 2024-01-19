// let div =  document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id)

// let newBTN = document.createElement("button");

// newBTN.innerText ="login";
// console.log(newBTN);

// let myButton = document.querySelector("div");
 
// div.after(newBTN);



// let myBtn = document.querySelector("#btn")


// let body = document.querySelector("body");
// let myMode = "light";


// myBtn.addEventListener("click",()=>{
// if(myMode === "light"){
   
//     myMode ="dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
// }else{
//     myMode ="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
// }

// console.log(myMode);
// });

let myBtn = document.querySelector("#btn");

console.log(myBtn);
myBtn.addEventListener("click", function(evt){

    console.log(this);
    console.log(evt);
if(evt.altKey){
    console.log("AltKey was pressed");
}
if(evt.ctrlKey){
    console.log("CTRL key was pressed");
}
if(evt.shiftKey){
    console.log("ShiftKey was pressed");
}

})



