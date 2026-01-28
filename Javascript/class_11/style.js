//shallow copy
/*const ob1={
  bid:101,
  batteryName:"exide",
   companyInfo:{
    name:"exide to pvt.",
    revenue:10000

  }, 
  isGodQuality:true ,   
}

const ob2=ob1;
ob1.bid=1000;
ob2.bid=2000;*/
//Deep copy 
const ob1={
  id:101,
  name:'growtech',
  info:{
    name:"dre",
    rename:100,
  },
  address:"c21"

}
//first way 
const obj2 = JSON.parse(JSON.stringify(ob1));
ob1.id=1000;
obj2.id=2000;
ob1.info.name="growtech"
console.log(ob1);
console.log(obj2);

//second sturcturedclone 
//lader 
/*const obj2 = JSON.parse(JSON.structuredClone(ob1));
ob1.id=1000;
obj2.id=2000;
ob1.info.name="growtech"
console.log(ob1);
console.log(obj2);*/


/*function start()
{
          console.log(this)
}
start();

//shallow copy
const ob1={
  bid:101,
  batteryName:"exide",
   companyInfo:{
    name:"exide to pvt.",
    revenue:10000

  }, 
  isGodQuality:true ,   
}

const ob2=ob1;
ob1.bid=1000;
ob2.bid=2000;

//second method
objectssign()
const ob3=objectAssign(obj4)


//
const cooler={
          id:'c212',
          color:"indux",
          on:function(){
                    console.log(this);
          }

}
cooler.on();
//
const coolrs={
          id:'c212',
          colors:"indux",
          on:()=>{
                    console.log(this);
          }
}
          coolrs.on()*/

//call method => call method me hum simple function lete h aur usme this keyword ka use krte hai to window me show hoga //object ki value borrow krne k liye call ka use krte hai 

//apply method=>apply method and call method same hoti hai isme hum calling me []k form me dete hai use apply method bolte hai 
let obj={
  id:101,
}
function number(){
  console.log(this);
}
number();
//pract
let z;
let arr=[1,2,3,4,5,6,7]
console.log(arr.length);
arr.length=0;
arr[6]=20;
console.log(arr[z],arr.length);
