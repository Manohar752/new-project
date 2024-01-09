let div =  document.querySelector("div")
console.log(div);

let id = div.getAttribute("id");
console.log(id)

let newBTN = document.createElement("button");

newBTN.innerText ="login";
console.log(newBTN);

let myButton = document.querySelector("div");
 
div.after(newBTN);