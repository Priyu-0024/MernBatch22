//task 1 done
//1->get the div so that you can attach btn
let divEle=document.getElementById("Div-1");
console.log("now we have div",divEle);

//2-create the btn
let addBtn=document.createElement("button");
console.log("btn created",addBtn);

//3 add the content to the btn
addBtn.textContent="Add"

//4 attach the btn inside the div
divEle.appendChild(addBtn);

//task- 2
//1-> get the btn so  we already have btn(done)
//2->attachHandler
addBtn.addEventListener("click",()=>{
          console.log("me kush")
          //1->get the div so that  you can attach you(done)
          //2->create the paragraph
          let paraEle=document.createElement("p");
          //3->add the content to the btn
          paraEle.textContent="sab"
          //4->attach the para to the div
          divEle.appendChild(paraEle);
})

