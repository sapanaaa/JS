   //here i learned about basic datatypes in JavaSctipt
   const a=10;
   let b="i love you 3000";
   const c=3n;
   d= true;
   e= Symbol('ironman')
   let f; //or we define let f= undefined;

   let g={ a,b,c
   }
   console.log(typeof a); //number
   console.log(typeof b); //string
   console.log(typeof c); //bigint
   console.log(typeof d); //boolean
   console.log(typeof e); //symbol
   console.log(typeof f); //undefined
   console.log(typeof g); //object

   //brief about strings
   let h= `who said ${b} ?`;
   console.log(h);

   let i='1';
   console.log(a + i); //'10' concatinates with '1'