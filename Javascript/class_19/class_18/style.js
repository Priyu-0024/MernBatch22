function callBackhell(method,url,next){
   const obj1=new XMLHttpRequest();
   obj1.responseType="json";
   obj1.open(method,url);
   obj1.send()
   obj1.onload=()=>{
      console.log(obj1.response);
      next(obj1.response);

   }
   
}
callBackhell("GET","https://fakestoreapi.com/products",(d)=>{
          console.log(d);
          callBackhell("GET",`https://fakestoreapi.com/products/category/${d[0].category}`,(d)=>{
                    console.log(d);
                //callBackhell("GET",`https://fakestoreapi.com/products/${d[0].id)`,//(d)=>{
                              console.log(d);
                //  });
                callBackhell("GET",`https://fakestoreapi.com/products/${d[0].id}`,
                    (d)=>{
                              console.log(d);
                    }
                )

                //callBackhell("GET",'https://fakestoreapi.com/products/category/${d.category}`,(d)=>{
                 //   console.log(d);
                 //  });
                   
          });
});