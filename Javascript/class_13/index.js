//** Q What is a Promise in JavaScript? (Detailed)

//**A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.”
//**It is a placeholder for a value that is not available immediately.
//** That value can be:
//**resolved value (success)
//**rejection reason (error)

//**Promise States (Very Important)
//**A Promise has three states:

//** Pending
//Pending, which means the operation is still ongoing
//Initial state
//Neither success nor failure

//**Fulfilled

//Operation completed successfully
//resolve(value) called

//** Rejected

//Operation failed
//reject(error) called

//syntax
   //const a=new Promise((res,rej)=>{
  //res("fulfilled");
  //rej("no");
//})
//console.log(a);

//** Consuming a Promise (then, catch, finally) 
//**then()

//Executes when promise is fulfilled
//Receives resolved value

//**catch()

//Executes when promise is rejected
//Receives error

//**finally() 

//Executes always (success or failure)

//**Q Why do we use Promises?

//To handle asynchronous operations
//To avoid callback hell
//To write clean and readable code

//**What is .then()?

//.then() is used to handle the successful result of a Promise.

//Q** What is .catch()?

//.catch() is used to handle errors or rejected Promises.

//Q **What is .finally()?

//.finally() executes regardless of success or failure.

//Q **Why do we use Promises?

//“Promises are used to handle asynchronous operations and avoid callback hell.”

//Q**What is Promise chaining
//“Promise chaining allows us to run multiple .then() methods one after another, passing the result from one to the next.”

//“Promise chaining me hum ek ke baad ek .then() use karte hain aur pehle ka result next .then() me pass hota hai.”
  
//Q** what is Promise.all()? waits for all Promises to complete. If any Promise fails, the whole Promise fails.”
//“Promise.all() sab Promises complete hone ka wait karta hai. Agar koi bhi Promise fail ho jaye, 
// to pura Promise.all() fail ho jata hai.

//**QWhat is Promise.race()?
//“Promise.race() returns the result of the first Promise that settles, whether fulfilled or rejected.

//“Promise.race() pehle complete hone wale Promise ka result return karta hai, chahe woh success ho ya failure.”

//**Q What is Promise.any()?
//“Promise.any() returns the first Promise that resolves successfully. If all Promises fail, it throws an error.”

//“Promise.any() pehla successfully resolved Promise ka result return karta hai. Agar sab fail ho jaye, to error throw hota hai.”

//**Difference between Callback and Promise?
//“Callbacks can lead to callback hell and messy code. Promises provide cleaner and more readable async
//  code with proper error handling.”

// *promises=>object hote hai,it's a object in js. funture me value dene k liye or nh  dene k liye hote hai which gives you assurance or gurantee.
//i will give u something.
//i have a stages /phases->1.pending(default)
                          // 2.resolve(fulfiled)
                          // 3.reject (error)
//syntax
//const p=new Promise((resolve,reject)=>{});//two paramenter lega 1.resolve 2.reject
//reslove k liye=>then()
//reject k liye=>catch()
//resolve
/*const p1=new Promise((res,rej)=>{
  res("promisefullfilled");
  rej("reject");

});
  console.log(p1);*/
// resolve ka result dekhene k liye then method ka use hota ye ek call function leti hai or variable me stor krna hota.
/*p1.then((res)=>{
console.log(res);
});*/
//---------------------------------------------------------------
//reject
/*const p2=new Promise((res,rej)=>{
  rej("reject");
  res("resolve");
});
p2.catch((reject)=>{
  console.log(reject);
})*/

//pending
//const pro=new Promise((a,b)=>{
 // console.log(pro);
//});//default

//fech method
//we are doing api calling by fetch
//const apifech=fetch()

//sir ka copy
// const pro = new Promise( (a,b) => {
// });
// console.log(pro)

// const pro = new Promise( (resolve,reject) => {
//     resolve("promise fulfield");
//     reject("promise reject");
// });
// console.log(pro)

// const pro = new Promise( (resolve,reject) => {
//     reject("promise reject");
//     resolve("promise fulfield");

// });
// pro.then( (op) => {console.log(op);}).catch( (err) => {console.log("promise has faild",err)})

//we are doing API calling by fetch
// const apifetch = fetch(`https://fakestoreapi.com/products/`)
// console.log(apifetch)
// apifetch.then( (op) => {console.log(op);}).catch( (err) => {console.log("promise has faild",err)})

//Now we are converting body data into json formate
// fetch(`https://fakestoreapi.com/products/`).then((op) => {
//     op.json().then((op) => { console.log("API response", op); }
//     ).catch((err) => { console.log("API faild", err) })
// }
// ).catch((err) => { console.log("promise has faild", err) })
// console.log(apifetch)
// apifetch.then( (op) => {
//     op.json().then( (op) => {console.log("API response",op);}
// ).catch( (err) => {console.log("API faild",err)})
// }
// ).catch( (err) => {console.log("promise has faild",err)})

//Calling API Using XHR
//function FetchProducts(method, url, callback) {
//   const data = new XMLHttpRequest();
//   data.responseType = "json";
//   data.open(method, url);
//   data.send();
//   data.onload = () => {
//     callback(data.response);

// };
//}

//Calling APi using fetch
// function FetchProducts(url) {
//     const res = fetch(url);
//     return res;
// }

// console.log(p)
// p.then((data) => {
//     data.json().then((data1) => {
//         console.log("firstApi calling", data1);

//         FetchProducts(`https://fakestoreapi.com/products/category/${data1[0].category}`).then((data1) => {
//             data1.json().then((data2) => {
//                 console.log("second Api calling", data2);
//                 FetchProducts(`https://fakestoreapi.com/products/${data2[0].id}/`).then((data3) => {
//                     data3.json().then((data3) => {
//                         console.log("third Api calling", data3);
//                         FetchProducts(`https://fakestoreapi.com/products/category/${data3.category}`).then((data3) => {
//                             data3.json().then((data3) => {
//                                 console.log("fourth Api calling", data3);

//                             }).catch(data => console.log("forth api me error", data))
//                         })
//                     }).catch(data => console.log("third api me error", data))
//                 })


//             }).catch(data => console.log("second api me error", data))
//         })

//     }).catch(data => console.log(data))
// }).catch(err => console.log("first api me error", err))

// const p = FetchProducts("https://fakestoreapi.com/products");

// p.then(d => d.json())
//     .then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`)))
//     .then(r => r.json())
//     .then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`)))
//     .then(r => r.json())
//     .then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`)))
//     .then(r => r.json())
//     .then(d4 => console.log("fourth Api calling", d4))
//     .catch(err => console.log("error", err));

// p.then(d => d.json()).then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`))).then(r => r.json()).then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`))).then(r => r.json()).then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`))).then(r => r.json()).then(d4 => console.log("fourth Api calling", d4)).catch(err => console.log("error", err));

//await ek keyword hota hai jo async ko syncronous bnata hai
//async await use to perform sideeffects and also solve the chaining problem.
async function FetchProducts(url) {
    const res1 = await fetch(url);
    const ans1 = await res1.json();
     console.log("first api calling ", ans1)
    const res2 = await fetch(`${url}/category/${ans1[0].category}`);
    const ans2 = await res2.json();
     console.log("second api calling ", ans2)

    const res3 = await fetch(`${url}/${ans2[0].id}`);
    const ans3 = await res3.json();
     console.log("third api calling ", ans3)
    const res4 = await fetch(`${url}/category/${ans3.category}`);
    const ans4 = await res4.json();
    console.log("first api calling ", ans4)
}

FetchProducts("https://fakestoreapi.com/products");

//error handling/exception=1>complile time->syntax error ki vjh se aati hai
//2>run time->logical  run time error ko solve krne k liye

//try= ek keyword hai- try ek block hai error aane ki posibility hoti hai try multiple hoskte hai but cactch nhi try k baad hi catch aata hai.
//simple tarika
/*function sumTo(a,b)
try{
  return a+b;//error aa gai to catch me jayegi
}*/
//catch=function hai ek . try k ander jo erroe aati h usko ek parameter me leta haior us error ko print krvate hai 

//throw=coustom error message ko send krne k liye hota try k ander likhte hai

//finally block= asa code jisko chalana hi chalana hai
//with try catch
/*function addTwNo(x,y)
try{
  return x+y;
}
catch(e){
  console.log(e);
}
let ans=addTwNo(20,30);*/
// is trike se kr best ho skta hai
function addTwoSum(x,y){
  try{
  if(typeof(x)===Number && typeof(y)===Number){
    return x+y;
  }
  else{
    throw("x or y should be number")
  }
}

catch(e){
  console.log("we get an error",e);
}
}
addTwoSum(2,3);
