//splice method ka use arrays ko modify krne k liye hota hai
let arr=[10,20,30,40];
console.log(arr);

//insertion me insert hoga means index[3] par 99 insert hoga 0 isliye diya q ki koi element delete nhi ho rhi hai
arr.splice(3,0,99)
console.log(arr);

//update me value update hogi means index[2]par 1000 update hogi 30 delete hogi aur uski place 1000 aayegi isliye 1 likha hai
arr.splice(2,1,1000)
console.log(arr);

//delete me index[1] ki value delete hogi delete ho rhi h isiye 1 likha hai
arr.splice(1,1)
console.log(arr);

//examples

let open=[13,14,15,16]
console.log(open);

//insert
open.splice(2,0,23)
console.log(open);//13 14 23 15 16

//update 
open.splice(3,1,20)
console.log(open);//13 14 23 20 16

//delete
open.splice(0,1)
console.log(open);//14 23 20 16

let start=[1,2,3,4,5];
console.log(start);

//insert
start.splice(3,0,15)
console.log(start);

//update
start.splice(1,1,17)
console.log(start);

//delete
start.splice(2,1)
console.log(start);

//examples-
let num=[10,40,80,50,20];
console.log(num);

//insert
num.splice(1,0,200);
console.log(num);

//update
num.splice(4,1,40)
console.log(num);

//delete
num.splice(2,1);
console.log(num);

//examples 3-
let newstart=[1,200,300,5,600];
console.log(newstart);

//insert 
newstart.splice(2,0,400);
console.log(newstart);//1,200,400,300,5,600

//update
newstart.splice(1,1,300);
console.log(newstart);//1,300,400,300,5,600

//delete
newstart.splice(4,1);
console.log(newstart);

//push=> array k last me ek new element add krta hai
let arr1=[10,20,30,40];
arr1.push(25);
console.log(arr1);

let a=[12,13,14,15]
a.push(16);
console.log(a);//12 13 14 15 16

let ab=[13,14,15,19]
ab.pop(19);
console.log(ab);//13 14 15

let ax=[13,56,89,34]
ax.shift(13)
console.log(ax);//56 89 34

let ay=[12,43,79,98]
ay.unshift(9,10,11)
console.log(ay);//9 10 11 12 43 79 98

//pop => array k last me se ek element delete krta hai
let arr2=[10,20,30,50];
arr2.pop(50);
console.log(arr2);

//shift=>array k start element ko delete krta hai
let arr3=[10,20,30,40];
arr3.shift(10);
console.log(arr3);

//unshift=>array k start me ek ya ek se jyada element add krta hai
let arr4=[10,20,30,40];
arr4.unshift(8,3);
console.log(arr4);

//examples- push
let numx=[800,400,399,200];
numx.push(80000);
console.log(numx);

//pop
numx.pop(80000)
console.log(numx);

//sift 
numx.shift(800);
console.log(numx);

//unsift 
numx.unshift(600,300);
console.log(numx);

//slice method ka use smjhama hai
let arr5=[3,5,7,9,13]//1 se 3 tk copy krna
let subart=arr.slice(1,4);
console.log(subart);

//map=>map() array ke har element par ek function apply karta hai aur naya array return karta hai, jisme modified elements hote hain.
//or map() ka use array ke har element par koi operation apply karke naya array banane ke liye hota hai.
let arr31 = [10, 20, 30, 40];
let modiArr = arr31.map((i) => {
    console.log(i);      // pehle print
    return i * 10;       // fir return
});
console.log(modiArr); // [100, 200, 300, 400]

let pract=[10,30,20,40];
 let pur=pract.map((i)=>{
  console.log(i);
  return i*10;
});
console.log(pur);//100 300 200 400

let sratarr=[4,3,6,2,1];
let strear=sratarr.map((i)=>{
  console.log(i);
  return i*10;
});
console.log(strear);

let apply=[12,14,25,8];
let result=apply.map((i)=>{
  console.log(i);
  return i+5;
});
console.log(result);
//examples
let arr35=[1,2,3,4,5];
let startNew=arr35.map((i)=>{
          console.log(i);
          return i*5;
});
console.log(startNew);

let arr9=[5,6,7,8]
let newArray=arr9.map((ele)=>ele+5);
console.log(newArray);

//filter() = “array me se sirf wo cheezein chuno jo condition ko satisfy karti hain”
let arr34 = [10, 15, 20, 25, 30];
let evens = arr34.filter(function(num){
    return num % 2 === 0;  // true for even numbers
});

console.log(evens); // [10, 20, 30]
console.log(arr);   // [10, 15, 20, 25, 30] (original unchanged)
 
let fruits = ['apple', 'banana', 'mango', 'avocado'];

let aFruits = fruits.filter(function(fruit){
    return fruit[0] === 'a';  // sirf 'a' se start hone wale fruits
});

console.log(aFruits);  // ['apple', 'avocado']
console.log(fruits);   // ['apple', 'banana', 'mango', 'avocado'] (original unchanged)

//find array me se phla element return krta hai jo condition true krta ho
//ager koi element match nh krta to undefined return krta hai.
let arr11=[5,12,8,130]
let newArr=arr11.find((ele)=>ele>10)
console.log(newArr);//12

//some exist krega to true or nh krega to false
//Ye check karta hai ki array me koi bhi element condition ko satisfy karta hai ya nahi.
//Return: true ya false

let arr12=[1,2,3,4]
let newArri=arr12.some((ele)=>ele>2)
console.log(newArri);

// join method Array ke sab elements ko ek string me join karta hai, aur aap separator define kar sakte ho.
//Return: ek string
let fruit = ["apple", "banana", "cherry"];
let rsult = fruit.join();
console.log(rsult); // "apple,banana,cherry"


const words=["javascript","css"]
console.log(words.join()); 

let arr14=[10,20,30,40]
let newA=arr14.join("-")
console.log(newA);

//reduce() array ke sab elements ko ek single value me reduce karne ke liye use hota hai. 
//accumulator: result ko store karta hai (har step me update hota hai)
//currentValue: current element
//initialValue: optional, accumulator ka starting value
let ar18=[1,2,3];
console.log(ar18.reduce((acc,curr)=>
acc+curr),0);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum); // 15

const newNumber=[3,4,20,6];
const total=newNumber.reduce(function(accum,curr){
  return accum+curr;

},0);
console.log(total);

const numValue=[12,13,7,5];
const valnum=numValue.reduce(function(acc,curr){
return acc+curr;
},0);
console.log(valnum);
//flat method  nested array ko singal arary me convert  krne k liye flat ka use krte hai infinity ka use ek sath merge krna 
let arr19=[[1,[2,3],[4,5]]]
console.log(arr19.flat(Infinity));//nested array me array merge krnek liye infinity ka use krenge

let arr20=[1,2,[3,4],5,6,7,8]
console.log(arr20.flat());//flat ka use krenge

let arr44=[1,[2,[3,[4]]]]
console.log(arr44.flat(2));

let arr30=[1,2,3[4[5[6[7[8[9[10],11,12,13,14]]]]]]]
let add=arr30.flat(Infinity)
console.log(add);


// every method array k har element ko chack krta hai ager sbhi element condition satisfy karein-true
//ager ek bhi element fail ho jaye-false.

let arr21=[4,5,6,7]
let newNu=arr21.some((ele)=>ele>2)
console.log(newNu);

//uppeCase
let strt = "javascript";
console.log(strt.toUpperCase());  // "JAVASCRIPT"

//lowercase
console.log(strt.toLowerCase());  // "javascript"

//includes() check karta hai ki string me specific word ya character present hai ya nahi.return true /false deta hai
let text = "I learn html";
let reult = text.includes("html");
console.log("Includes 'Java':", reult);

let number="i am b.tech student"
let totall=number.includes("class");
console.log(totall);

//replace(oldWord, newWord) string me ek word ko replace karta hai.
let numm = "I like PHP";
let tobefound = numm.replace("like","react");
console.log("Replaced:", tobefound);

let count=" i am ";
let tsum=count.replace("am","priyanka");
console.log(tsum);


/*//non primittive=> object me address compare hota hai vlaue compare krenge to false hoga
//primitive=> me value compare hoti hai

//deafult parameter=>default parameter last me dete hai 

//function expression=>annonumous simple function ye hoistiong spport nhi krti hai
cosnt op=function(){
console.log("hey")
}
const result=op(x)

//ternory operator=>
//condition ? expressionIfTrue : expressionIfFalse
Agar condition true ho → expressionIfTrue execute hoga
Agar condition false ho → expressionIfFalse execute hoga
//ternary operator=>yes or no me batate hai true hui to ? to h false :
          let btnshow=isbutton===false?"light":"dark";
          // btnshow=dark;
          console.log(btnshow);
          //const oper=condition?black: white;
//examples
//let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log(canVote); // "Yes, can vote"

//2examples
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Odd"


//spreak operator Array ya object ke elements/properties ko spread (expand) karta hai
Use:
Array copy karne ke liye
Array merge karne ke liye
Function me arguments pass karne ke liye
//rest prameter bache huyi value ko bolte hai isko prantitis k ander likhte hai...z as prameter 
function takeTwoValue(x,y,...z)
{
          clg(x,y);
}
takeTwoValue(3,5,6,7,8,9);

//spread ka use ek variable ki value dusre variable me copy krna
let x=[10,20,30]
let y=[...x]
console.log(y)//copy krna

//merge krna
let a1=[10,20,30]
let a2=[40,50,60]
let merged=[...a1,...a2]
console.log(merged);//[10,20,30,40,50,60];

// function argument predefined hote
function values (x,y) 
{
          clg(x,y)
          clg(arrgument)
}
values(10,20)
values(10,20,30,40)

//second examplels
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//Destructuring JavaScript ka ek modern feature hai
jiska use array ya object se values nikaal kar variables me store karne ke liye hota hai — short aur clean way me

//array distructing=array ke elements ko alag-alag variables me nikaal lena,
wo bhi short aur easy syntax me.
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// examples
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // green



//object destructiong {} me key k name hona chaiye nh huye to undefind aa jayega
special case me nh kr skte hai - space ;*/
/*const info={
          id:101,
          name:"priyanka",
          age:20,
}
const{id,name}=info;
console.log(id,name);*/
//second example
let strat={
            id:105,
            name:"rathod",
            age:22,

}
let{id,age}=strat;
console.log(id,age);

//break ka use loop me,if else khi per bhi use kr skte hai
for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    break;
  }
  console.log(i);
}

//continue=>skip krne k liye
  for(let i=10;i<=16;i++)
  {
          console.log("end")
          if(i==13)
          continue;//16 tk chelega break nh krega
}
// for...of loop values ko one-by-one nikaalne ke liye hota hai.inko array,string,set,map use krte hai.
let numberr = [10, 20, 30];

for (let num of numberr) {
  console.log(num);
}
const values=[5,4,8,5,7];
for(const numr of values){
  console.log(numr);
}
let names="priyanka"
for(let latter of names){
  console.log(latter);
}
//for...in loop keys / index nikaalne ke liye hota hai inka use object arrays me hota hai
/*obj={
          id:1,
          name:"xyz"
          for(let value in obj)
          {
                    clg(obj[value]),
                    clg(value),
          }
}*/
let user = { name: "Ali", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}

let student = {
  name: "Amit",
  age: 22,
  city: "Delhi"
};

for (let key in student) {
  console.log(key);
}


//this key word
//template leterals
//shollow
//deep shallow
//
//this keyword
//call apply bind 
//upercase
//lowercase
//length

//string inerpulation=>template literals ka use krte hai isko use backics se krte hai
//String ke andar directly variable ya calculation likhna
// bina + use kiye
//Iske liye JS me Template Literal use hota hai.
const nams = "Alice";
const ages = 25;

const message = `My name is ${nams} and I am ${ages} years old.`;
console.log(message);

//second examples
let first="priyanka";
let second="rathod";
let rsul=`full name${first} complet${second}`;
console.log(rsul);

//third examples
let hey="alexa";
let hii="xyz";
let rst=`i am ${hey} i am ${hii}`;
console.log(rst);

//concatination of strings
/*let v1="priyanka",
let v2="rathod",
let s3={s1} &{s2}*/

//string method in js
//trim() string ke starting aur ending ke extra spaces remove karta hai.
/*let tex = "   Hello World   ";
let reslt = text.trim();
console.log("Trimmed:", `"${reslt}"`);

let test=  "    priyanka    ";
let resul= text .trim();
console.log("trimmed:",`"${resul}"`);


//replace(oldWord, newWord) string me ek word ko replace karta hai.
let texts = "I like PHP";
let results = text.replace("PHP", "JavaScript");
console.log("Replaced:", results);


//this keyword
function show() {
  console.log(this);
}
show();

function priyanka(){
console.log(this);
}
priyanka();

let person = {
  name: "Rahul",
  greet: function() {
    console.log(this.name);
  }
};

person.greet();  // Output: Rahul
//shallow
let obj1 = { name: "Rahul", address: { city: "Delhi" } };

let obj2 = { ...obj1 }; // shallow copy
//deep 

let obj3 = { name: "Rahul", address: { city: "Delhi" } };

let obj4 = JSON.parse(JSON.stringify(obj1));  // deep copy
//template =>
///string array like object bolte hai 
///index se name change nh krte hai

let name = "Rahul";
let msg = `Hello ${name}, welcome!`;

console.log(msg); // Hello Rahul, welcome!

///lexical scoping=> means nested block outer function k variable ko inner function k ander use krte hai aur uska use dekhenge to lexical scoping
 
///curring=>asa function jisme ek se jyada prameter me to hote hai to divide usko ek parameter me layege

//simple curring-curring ka use khi nh hota ek parameter lete hai
//infinity curring 
//this keyword=>this keyword object ko point krta hai 
//this keyword normal function me bydefault window me
//this keyword object k ander function hota hai to use object
//arrow function me this keyword ka use nhi hota hai
//arrow function me id.name krne to undefined krega 

function first()
{
  console.log(this);
}
first();
  //foreach method kuch return nh krti hai
  //forin  method me square krti hai
//constuctor asa function jo calling k aage new data() to us time pr empty hota hai
//private value ko initilize krne k liye this constructor ka use 

//shallow copy=>original ne
//Spread operator me nestesd vale dono me apply hoga but outer ki value ek hi me change hogi
//second assign method ka use
//shallow copy
/*const ob1={
  bid:101,
  batteryName:"exide",
   companyInfo:{
    name:"exide to pvt.",
    revenue:10000

  },     
}

const ob2=ob1;
obj.bid=1000
obj2.bie=2000

//second method
objectssign()
const ob3=objectAssign(obj4)

//deep copy=>each object is different
const ob1{
  id:101,
  name:'growtech',
  info:{
    name:"dre",
    rename:1 cr,
  },
  address:"c21"

}*/
