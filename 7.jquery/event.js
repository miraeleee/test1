//console.log(document)
console.log($(document))
//jquery방법
$(document).ready(function() {
    console.log('ready - 문서의 DOM이 완성되면 실행되는 이벤트')
})
$(function() {
    console.log('방법2')
})
//javascript방법
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOMContentLoaded - 문서의 DOM이 완성되면 실행되는 이벤트')
// }(function() {
//     console.log("js 방법2")
// })

//마우스이벤트(자주사용)
$('.hello').click(function(){
    $('.hello').css('color','red')
})//css가 입혀진것임

$('.num').click(function(){
    // $('.num').css('color','blue')
     $(this).css('color','blue','font-wight','bold')
})
$('.num').on('click',function(){
     $(this).css('color','red','font-wight','bold')
})
$('.numbers').mouseover(function(){
   // $('.numbers').css('background-color','green')
    $(this).css('background-color','green')
})
$('.numbers').on('mouseleave',function(){
    $(this).css('background-color','yellow')
})
// 후에 이것을 appen시켜서 활용할 수 있다.
$('.hover').hover(function(){
    $(this).css("color","red")
},function(){
    $(this).css('color','blue')
})

console.log($(window))

$(window).scroll(function(){
    console.log('scroll')
})
$(window).on('scroll',function(){
    console.log('scrolls')
})

$('.input-key').keydown(function(event){
    console.log(event.code)
    if(event.code === 'ArrowUp'){
        console.log('up')
    }else if(event.code === 'ArrowLeft'){
        console.log('left')
    }else if(event.code === 'ArrowDown'){
        console.log('down')
    }else{
        console.log('others')
    }
})

$('.input-key').on('keydown',function(event){
      console.log('event.code')
})

// 폼태그 매우중요, 액션을 해야하기때문

//추가 날라가기전 작업(날라가지않게), 어떠한이벤트(e) 처리
$('#todo-form').submit(function(e){
    e.preventDefault();
    const todo =$('input[name=todo]').val()//가져오고 , 변수에 저장하고
    console.log(todo)
    $('.todos').append('<li>${todo}</li>') // append시켜주고
    $('input[name=todo]').val("") // 설정해준다
})


