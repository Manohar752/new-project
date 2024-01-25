
let ulList = document.querySelector("#list")
let add = document.getElementById("add")

let inputBox = document.getElementById("input")



add.addEventListener("click", ()=>{
  if(inputBox.value ==""){
    alert("please enter list")
  }          
  else{
    
    let listText = document.createElement("li")
    ulList.appendChild(listText)
    listText.innerText=`${inputBox.value}`



    // let button = document.createElement("button")
    // inputBox.value.append(button)
    // button.value = "del"
    // button.style.background = "blue"



  }   
  inputBox.value=""             
}) 

