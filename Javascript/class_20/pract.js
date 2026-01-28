let divName=document.getElementById("Div-1")
console.log( "first",divName);

let button=document.createElement("button");
console.log("create ",button);

button.textContent="Add"
divName.appendChild(button)
button.addEventListener("click",()=>{
     console.log("start");  
     let element = document.createElement("p");
     element.textContent="pura";
     divName.appendChild(element);


})