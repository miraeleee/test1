// for문
// for(var i = 0; i < 10; i++){
//     console.log(i*2);
// }

// 짝수값만 출력
for(var i = 0; i <=10; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
let sum = 0;
for(var i=1; i<=10; i++){
    sum += i;
}
console.log(sum);

// while문 - 무한루프 주의!
// var i =0;
// while(i<10){
//     console.log(i*3);
//     const result = i * 3;
//     if(i === 9)
//         break;
//     i++;    
// }

// 짝수 값만 출력
// var i =0;
// while(a <= 10){
    
//     if(i%2===0){
//         console.log(i);
//     }
//     i++;
// }

// do~whil0e문
// 적어도 한번은 실행해야할 때
// do{
//     문법
// }while(조건식)
var i =0;
do{
    console.log(i);
    i++;
}while(i<10);