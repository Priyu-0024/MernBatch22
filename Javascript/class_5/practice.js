//normal function
function first()
{
  console.log("hello priyanka");
}
first();

function hii(x,y)
{
  z=x+y;
  console.log(z);
}
hii(3,2);

//bhar use krna hai to
function valueSum(a,b)
{
  return a+b;
}
 let sum=valueSum(2,2);
console.log(sum);

function twoNumber(x,y)
{
    return x*y;
}
 let multiply=twoNumber(100,200);
 console.log(multiply);

 //print krna chate ho to 
 console.log(twoNumber(100,200))

 //return keyword use nhi kiya to 
 function startOne()
 {
  console.log("hii")
 }
 let num=startOne();
 console.log(num)

 //arrow function
 let add=(a,b)=>{
    console.log(a+b);
 }
 add(8,8);
 //short tarika
 let addition=(x,y)=>console.log(x*y);
 addition(5,5);
 
 //arrow function with return
 let numTwo=(s,n)=>{
    return s*n
 }
 
 let total= numTwo(2,9);
 console.log(total);

 let toBe=(b,n)=>{
   return b-n; 
 }
  let ans=toBe(10,20);
  console.log(ans);

  //arrow function with no return but store in
  let toEnd=(d,r)=>console.log(d*r);
 let endl=toEnd(1,1);
 console.log(endl);

 //arrow function multiple lines
 let multipleValue=(p,r)=>
 {
  console.log(p+r);
  console.log(p-r);
  console.log(p*r);
  console.log(p/r);
 }
 let all= multipleValue(3,3);
 console.log(all);