//1.  let variable block scope hota hai
{
    let a;
    a=12;
    console.log(a);
}
//console.log(a);//bhar access nh kr skti hu

{
    let a=13;  //variable bnate time value de b skti hu or nh b
    a=15;      //update bhi kr skti hu
    console.log(a);
}
//------------------------------const-------------------------------------------------
//2. const bhi block scope hota hai
/*{
    const b;  //variable bnate time hi value dena hoga
    b=12;
    console.log(a);
}*/

{
    const x=23;
  //  x=24;   //update nh kr skte hai
    console.log(x);
}
//------------------------------var-------------------------------------------------
{
    var b=100;
    var v=200;
    console.log(b);
}
console.log(v);

/*{
    console.log(y);//undefined aaya is case me
    var y=700;

}*/
//-------------------------------scoping--------------------------------------------
//block scope variable->let aur const se bnte hai
{
    let e=100;
    const r=200;
    console.log(e,r);
}
//console.log(e,r); bhar access nh kr skte hai

//----------------------------local/function scope-----------------------------------
//function scope variable-> var se bnte hai
function hii(x,y)
{
    var z=x+y;
    console.log(z);
}
hii(3,4)
//console.log(z);  error aa jayegi
//---------------------------global scope--------------------------------------------
 let x = 10;
 const y = 20;
 var z = 674;

 {
    console.log(x, y, z)
}
//-------------------------------extraordinary---------------------------------------
{
let a=20;
var k=10;

    console.log(a);
}
console.log(k);

 //Nan
 let result = "hello" -5;
 console.log(result);