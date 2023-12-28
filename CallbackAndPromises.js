// function h(x, fn){
//     //h -> is a hof
//     //fn -> callback
//     console.log(x * x);
//     fn();
// }

// h(10, exec)

// function exec(n){
//     console.log("squered value is ", n);
// }
console.log("Start");
setTimeout(function f(){
   console.log("time done");     //asynchronuos code
},3000);


console.log("end");