// object 

// let obj ={
//     name:"ujjval",
//     age :20,
//     weght:"5 inch",

//     grat:function(){
//         console.log("Hello ujjval ");
        
//     }
// };

// console.log(obj);
// obj.grat();
// console.log(typeof(obj));

// array

// let arr=[4,5,6,7,7];

// //arr constrcutr
// let brr=new Array('love ', 1, true)
// console.log(brr[2]);
// console.log(typeof(brr));


//method arr
// let arr=[3,57,3,8,6,8,2,45,78,34,70]
// arr.push('ujjval')

// arr.pop();

// arr.shift()

// arr.unshift(true)
// arr.push(35)
// console.log(arr.slice(1,3));
// arr.splice(0,1,"ujjval")

  
// console.log(arr);

// let ans= arr.map((Number) =>{
//     return Number*Number
// });

// console.log(ans);


// let ans= arr.map((Number,index) =>{
//     console.log(Number);
//     console.log(index);
    
// });


//filter


// let evenNum=arr.filter((number) =>{
//     // if(number%2==0)
//     // {
//     //     return true
//     // }
//     // else{
//     //     return false
//     // }
//     return number%2==0;
// })
// console.log(evenNum);

//reduce 


// let num=arr.reduce((acc, cuurunt) =>{
//     return acc+cuurunt;
// },2)

// console.log(num);

//sorting 
// arr.sort();
// console.log(arr);


//indexof
// console.log(arr.indexOf(3));   

// find ()

//forEach 

// arr.forEach((value , index ) =>{
//     console.log("Number ", value, "Index", index);
    
// });
// let length=arr.length;
// for(let i=0; i<length; i++){
//     console.log(arr[i]);
    
// }


// for in loop in javascript 

// let obj ={
//     name:"ujjval",
//     age :20,
//     weght:"5 inch",

//     grat:function(){
//         console.log("Hello ujjval ");
        
//     }
// };

// for(let key in obj){
//     console.log(key,"", obj[key]);
    
// }



// funcation 

let arr=[34,66,3,2,1]
 function getsum(arr)
 {
    let len=arr.length;
let sum=0;
for(let i=0; i<len; i++){
    sum+=arr[i];
}
return sum;
 }
 let total=getsum(arr);
 console.log(total);
 
 