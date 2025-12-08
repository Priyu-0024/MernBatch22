let i=20;
if(i%2==0)
{
   console.log( "number is even");
}
else{
   console.log( "odd number");
}
// 2 ki table me even or odd print

/*for(let i=1;i<=10;i++)
{
   let result=2*i;
   if(result%2==0)
   {
      console.log(result+"number is even");
      
   }
   else{
      console.log(result+"number  is odd");
   }
}*/
for(let i=1;i<=10;i++)
{
   let final=2*i;
   if(final%2==0)
   {
      console.log(final+"number even");
   }
   else{
      console.log(final+"number odd");
   }
}
// 3 ki table print 
for(let i=1;i<=10;i++)
{
   let table=3*i;
   if(table%2==0)
   {
      console.log( table+"number is even");
   }
   else{
      console.log( table+"odd number");
   }
}
//only 5 ki table
for(let i=1;i<=10;i++)
{
   let tbl=5*i;
   /*if(tbl%2==0)
   {
      console.log( tbl+"number is even");
   }
   else{
      console.log( tbl+"number is odd");
   }*/
  console.log(tbl);
}
//7 ki table
for(let i=1;i<=10;i++)
{
   let num=7*i;
   console.log(num);
}
//divisible by 5 and 11
let number= 22;
if(number%5==0 &&number%11)
{
   console.log("number is divisible");
}
else{
   console.log("not divisible");
}
//divisible by 12 and16
let numbe=34;
if(numbe%12==0 && numbe%16==0)
{
   console.log("number is divisible by 12 and 16");
}
else{
   console.log("number is not divisible");
}
//divisible by 2,3,5
let num=12;
if(num%2===0 && num%3===0 && num%5===5)
{
   console.log("number is divisible");
}
else{
   console.log("not divisible");
}