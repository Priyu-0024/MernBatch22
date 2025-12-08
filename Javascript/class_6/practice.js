//pure function
function pureFunction()
{
  console.log("it is pure function");
}
pureFunction();
pureFunction();
pureFunction();
pureFunction();

function hello()
{
  console.log("hello priyanka");
}
hello();
hello();
hello();
hello();

//impure function 
let age =25;
function impureFunction(){
  console.log(age++);
} 
impureFunction();
impureFunction();
impureFunction();
impureFunction();
//second program
var a=12;
function impureValue(){
  console.log(a++);
}
impureValue();
impureValue();
impureValue();
impureValue();
//third program
let number=10;
function startNumber()
{
  console.log(number++)
}
startNumber();
startNumber();
startNumber();
startNumber();
//fourth program
let start=30;
function sumOfNumber()
{
  console.log(start++);

}
sumOfNumber();
sumOfNumber();


//iifee
console.log((function(){
return console.log('hey i am priyanka rathod');
})())

console.log((function(){
  console.log("completed b.tech");
})())

console.log((function () {
    return console.log('hey its a IIFI function');

})())

console.log((function(){
  return console.log("im priyanka rathod");
})())

console.log((function(){
  return console.log('i am form khargoane');
})())

console.log((function(){
  return console.log('recently complete b.tech');
})())

console.log((function(){
  return console.log("learm html css js");
})())

console.log((function(){
  return console.log("learn html css");
})())

//iffee
console.log((function(){
   console.log("learn css");
})())

//callback function
function helloWord(){
  console.log("callbackfunction");
}
function startNew(callback)
{
  console.log("higherorder");
  callback();
  
}
startNew(helloWord);
//second
function taskTo()
{
  console.log("tofind number");
}
function takeTbe(callback)
{
  console.log("value");
  callback()
}
takeTbe(taskTo)
//even odd number
for(i=1;i<=10;i++)
{
  if(i%2==0)
  {
    console.log(i+"number is even");
  }
  else{
    console.log(i+"number is odd");
  }
}
//refrence error
console.log(b);
let b=23;
{

}
