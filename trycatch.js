try {
   let x = undefined;
   console.log(x[0]);
}catch(err)
{
    console.log("error handling in catch",err);
}finally{
    console.log("this is finally block");
}

console.log("end")