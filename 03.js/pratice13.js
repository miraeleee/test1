for(var i = 2; i < 10; i++){
    console.log("====="+i+"단=====")
    for(var j = 1; j < 10; j++){
        console.log(i+ " * " + j + " = " +j*i);
    }
   
}
let sum = 0;
for(let n=0; n < 100; n++){
    if(n % 2 === 0 || n % 3 === 0){
        sum += n;
    }
}console.log(sum);

