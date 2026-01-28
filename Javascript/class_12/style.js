//important concepts
//closure=>jb inner function apne outer function k variable ko yaad krk rkhta hai even after outer function execute ho chuka ho 
//1.lexical scoping
//2.simple function

//Q Closure kaise banta hai?

//Closure tab banta hai jab
//Ek function ke andar dusra function ho
//Inner function outer ke variable ko use kare
//Outer function return ho jaye
//Phir bhi inner function outer ke variable ko access kare

//clouser ka use q krte hai 

//Data ko Secure rakhne ke liye
//JavaScript me by default private variables nahi hote.
//Closure se hum data ko hide kar sakte hain.  

//Q.1> what is clouser?
//Closure is a feature in JavaScript where an inner function remembers and can access variables of its outer function, 
// even after the outer function has finished executing.


//How is a Closure formed in JavaScript?/how it create the clouser?

//A closure is formed when: 
//A function is defined inside another function
//The inner function uses variables of the outer functionv 
//The outer function returns, but the inner function still remembers those variables.


//Uses of Closure in JavaScript

//Data Privacy / Encapsulation
//Closure allows us to hide variables from the global scope.
//Only the inner function can access or modify them.




//program clouser ka 
//let block scope hota hai but Closure scope ko nahi, memory ko preserve karta hai.
//function first()
//{
   // let a=100;
   // let b=200;
   // function second()
   // {
    //    console.log(a,b);
   // } 
   // second();
//}
//first();

//function priyanka()
//{
   // let a="priyanka";
   // function rathod()
   // {
   //     console.log(a);
   // }
   // rathod();
//}
//priyanka();

//function outer() {
//   let a = 10;

//  function inner() {
//      console.log(a);
// }

// inner();
//}
//outer();

//function outer() {
//   let count = 0;

//  return function inner() {
//      count++;
//      console.log(count);
// }
//}

//let fun = outer();

//fun(); // 1
//fun(); // 2
//fun(); // 3


//[disadvantages self
//object ko use nh kr rhe to un object ko null se initiliaze krk rkho q ki variable me store krte hai to memory loss hoti hai.
//let ab krnege to usse memory waste hogi isiliye hum null se initiliaze krenge 
/*function totalPost()
{
          let initialPostCount=0;
             return function  ()
          {
                    console.log(initialPostCount);
                    return initialPostCount++; 

          }
}

          let ab=totalPost()
          console.log(ab());
          console.log(ab());

          let ob1=totalPost()
          console.log(ob1());

          let ab1=totalPost()
          console.log(ab1());
          console.log(ab1());

          let ob2=totalPost()
          console.log(ob2());*/


//js single threaded pdna hai

//asynchronus programning=>multiple cheeze ek sath krna 
//run the lines of code simultanously means parallely
//bom=>browser object model->kisi functionn ko call nhi krte automatically call ho jata hai
//json =>key string me rhegi ,aur object k last me , nh lga skte,kisi bhi object me key ko null nh de skte is case me empty deta hai

//function  me object nh bna skte hai
//json se  imformation k liye ui and json k form me lete hai ]


//**api calling menas server ko request bhejna aur server se data receive krna api call hota hai 
//**api call krne k tarike
//**fetch() (Most common)
//**async / await (Best practice)
//**axios(Industry standard)

//**api calling application programing interface means server se data lena ya bhejna using http                               
//** http means hyper text transper protocol
//**http ka use server aur browser k bich data exchange krne k liye hota hai 
//**ye batata hi ki data kaise request aur kaise response hoga
//*common http method
//1>GET = data lena
//2>post = data bhejna
//3>put = update
//4>delete = delete                                     

//**What is API Calling in JavaScript?

//**API calling in JavaScript is the process of sending a request from a JavaScript application to a server 
// and receiving a response (data) from that server.


//**Q Why do we need API Calling? 

//API calling is used to:
//Fetch data from a server
//Send data to a database
//Connect frontend with backend
//Use third-party services (weather, payment, maps, login)

//**Q three way to call api

//**fetch() (Most common)
//**async / await (Best practice)
//**axios(Industry standard)
 

//**XHR is one of the ways to make API calls in JavaScript, but it is an older approach compared to fetch and axios.
//XHR
/*cost xhrobj=new XMLHttpRequest();
 xhrobj.responseType="json"
xhrobj.open("GET,URL") 
xhrobj.send()*/

//api calling by XHR
/*const ob1=new XMLHttpRequest();
ob1.responseType="json";//null
ob1.open("GET","https://jsonplaceholder.typicode.com/posts");
ob1.send();
console.log(ob1)
console.log("api calling")*/


//**second way is best way calling the API

/*function apiCalling(method,url){
   const xhrobj1=new XMLHttpRequest();
   xhrobj1.responseType="json";
   xhrobj1.open(method,url);
   xhrobj1.send()
   xhrobj1.onload=()=>{
      console.log(xhrobj1.response);
   } 
}
apiCalling("GET","https://jsonplaceholder.typicode.com/posts");*/

//step1>function banana hai method lega (GET, POST etc.) ,url lega (API ka address)
//2>XMLHttpRequest object banana
//const xhrobj1 = new XMLHttpRequest();
// Ye object server se data mangne ke kaam aata hai
// Isi ke through API call hoti hai

//3>responseType set karna
//xhrobj1.responseType = "json";
//Server se jo data aaye Wo automatically JSON → JS object me convert ho jaye

//4>open() method
//xhrobj1.open(method, url);
//Is stage par request sirf prepare hoti hai, send nahi hoti

//5>send() method
//xhrobj1.send();

 //Ab request server ko chali gayi
 //Data aane me thoda time lagta hai
 //Isi liye XHR asynchronous hota hai

 //6>onload callback
//xhrobj1.onload = () => {   //onclick ek event hai jo tab trigger hota hai jab user kisi button, link, ya element par click karta hai
 //  console.log(xhrobj1.response);
//};

//server se response aa jata hai
//request complete ho jati hai
// tab ye function automatically chalta hai
// Actual data yahin milta hai

//Q XHR me error handle karne ke liye kya use karte hain?

//  onerror ka use krte hai 
//  Network error ke liye use hota hai


//dom implememtation
// first way of calling the api
/*const obj = new XMLHttpRequest();
obj.response = "json";
obj.open("GET", "https://jsonplaceholder.typicode.com/posts");
obj.send();
console.log(obj);
console.log("api")*/

// function apiCalling(method, url) {
//     const obj = new XMLHttpRequest();
//     // obj.response = "json";
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);

//     }
//     console.log(obj);
//     // console.log(obj.response);
//     console.log("api")
//     return obj.response;
// }
// let ans=apiCalling("GET", "https://jsonplaceholder.typicode.com/posts");
// // console.log(ans)



// 2nd way 
// function apiCalling(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);
//         printApiData(obj.response)

//     }

// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/posts/1", (data) => {
//     console.log("data of api", data)
// });

//**callbackhell/pramid of Doom=>ek se dusre,dusre k amder third ,third----n
//**phle ka output dusre me use krenge.
//**callback ek situation hai
//**disadvantage-redibility nhi rhta horizontal scorlling.


//**callback hell-> when you make a multiple function call inside a multiple callback function i.e callback hell.
//**it is also known as pyramid of Doom.
//**  due to this code become difficult to read or understand.

//sir copy vala
/*function NarakKaDwar(method, url, printApiData) {
    const obj = new XMLHttpRequest();
    obj.responseType = "json";
    obj.open(method, url);
    obj.send();
    obj.addEventListener("load", () => {
        printApiData(obj.response)
    })
}

NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log("Ye meri all posts hai", data);


    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
        (data) => {
            console.log("Ye meri Single Post hai", data)
            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                (data) => {
                    console.log("Ye meri Single Post ke andar je sare comments hai", data)
                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                        (data) => {
                            console.log("Ye meri Single Post ke andar ek comments hai", data)
                            NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                console.log("Ye meri all posts hai", data);


                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                    (data) => {
                                        console.log("Ye meri Single Post hai", data)
                                        NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                            (data) => {
                                                console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                    (data) => {
                                                        console.log("Ye meri Single Post ke andar ek comments hai", data)
                                                        NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                                            console.log("Ye meri all posts hai", data);


                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                                                (data) => {
                                                                    console.log("Ye meri Single Post hai", data)
                                                                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                                                        (data) => {
                                                                            console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                                                (data) => {
                                                                                    console.log("Ye meri Single Post ke andar ek comments hai", data)

                                                                                });
                                                                        });
                                                                });

                                                        });
                                                    });
                                            });
                                    });

                            });
                        });
                });
        });

});*/
//solution of callback hell problem using fetch


// function FetchProducts(method, url, callback) {
//   const data = new XMLHttpRequest();
//   data.responseType = "json";
//   data.open(method, url);
//   data.send();
//   data.onload = () => {
//     callback(data.response);
//   };
// }

// FetchProducts("GET", "https://fakestoreapi.com/products", (data) => {
//   console.log("all Products");
//   console.log(data);
//   FetchProducts(
//     "GET",
//     https://fakestoreapi.com/products/category/${data[0].category},
//     (data) => {
//       console.log("Products Categories");
//       console.log(data);

//       FetchProducts(
//         "GET",
//         https://fakestoreapi.com/products/${data[0].id},
//         (data) => {
//           console.log("single Products");
//           console.log(data);

//           FetchProducts(
//             "GET",
//             https://fakestoreapi.com/products/category/${data.category},
//             (data) => {
//               console.log("get category from single product");
//               console.log(data);
//             }
//           );
//         }
//       );
//     }
//   );
// });
function firstStart(method, url, printApiData) {
    const obj = new XMLHttpRequest();
    obj.responseType = "json";
    obj.open(method, url);
    obj.send();
    obj.addEventListener("load", () => {
        printApiData(obj.response)
    })
}
firstStart("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log("Ye meri all posts hai", data);
    firstStart("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
        (data) => {
            console.log("Ye meri Single Post hai", data)
            firstStart("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,)


        })
})

//**callbackhell se bachne k liye 
//1>Promise 2> async await ka use krte hai 

//promises=>object hote hai,it's a object in js. funture me value dene k liye or nh  dene k liye hote hai which gives you assurance or gurantee.
//i will give u something.
//i have a states /phases->1.pending(default)
// 2.resolve(fulfiled)
// 3.reject 
//syntax
const p = new Promconstise((resolve, reject) => { });//two paramenter lega 1.resove 2.reject
//resolve k liye=>then()
//reject k liye=>catch()

//api call , fetch ,axios.