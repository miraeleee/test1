function appendJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerHTML= '마지막 자식'

    ul.append(li)
}
function appendJquery(){
    $('.colors').append('<li>Jquery자식추가</li>')
}

   function prependJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerHTML= '첫 자식'

    ul.prepend(li)
   }
   function prependJquery(){
    $('.colors').prepend('<li>첫번째 자식으로 추가</li>')
   }
    function beforeJs(){
        let green = document.querySelector('.green')
        let li = document.createElement('li')
        li.textContent='이전 형제'
        green.before(li)
    }
    function beforeJquery(){
        $('.green').before('<li>이전 형제로 추가</li>')
    }

    function afterJs(){
        let navy = document.querySelector('.navy')
        let li = document.createElement('li')
        li.textContent='다음 형제'

        navy.after(li)
    }
    function afterJquery(){
        $('.navy').after('<li>다음 형제로 추가</li>')
    }

    function removeJs() {
        let li = document.querySelector('#li2')
        li.remove()
    }
    function removeJquery() {
        $("#li2").remove()
    }
    function emptyJs() {
        let ul = document.querySelector('.nums')
        //자바스크립트는 emtpy()가 존재하지 않음
        ul.innerHTML = ''
    }
    function emptyJquery() {
        $('.nums').empty()
    }

    function findParent() {
        console.log($('.child2').parent())
    }
    function findParents() {
        console.log($('.child2').parents())
    }
    function findNext() {
        console.log($('.child2').next())
    }
    function findPrev() {
        console.log($('.child2').prev())
    }
    function findChildren() {
        console.log($('.parent').children())
    }
    //클래스제어js-css접목하기위함
    function addClass() {
        $('.origin-class').addClass('add-class')
    }
    function addClassJs() {
        let p = document.querySelector(".origin-class")
        p.classList.add('add-class')
    }
    function removeClass() {
        $('.origin-class').removeClass('origin-class')
    }
    function removeClassJs() {
        let p = document.querySelector(".origin-class")
        p.classList.remove('add-class')
    }
    function hasClass() {
        console.log($('.origin-class').hasClass('add-class'))
    }
    function hasClassJs() {
        let p = document.querySelector(".origin-class")
        console.log(p.classList.contains('origin-class'))
    }
    function toggleClass() {
        $('.origin-class').toggleClass('add-class')
    }
    function toggleClassJs() {
        let p = document.querySelector(".origin-class")
        p.classList.toggle('add-class')
    }
    
    
    
    
    