let x = function (){
 console.log("HII")
}

x();

// next function 
(function exec(){
    console.log("nemed");
})();

// immidiatly invoke function
(function (x) {
    console.log(x * x);
})(5);

