let burger = document.querySelector('.burger')
let navli =document.querySelector('.vnavresp ')
let nav = document.querySelector('.nav')

burger.addEventListener('click',()=>{
    navli.classList.toggle('vnavresp')
    nav.classList.toggle('hnavresp')
})