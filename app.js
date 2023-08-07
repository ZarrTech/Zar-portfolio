const menuBurger = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.overlay')
const downloadCvBtn = document.querySelector('.downloadCv')
const downloadWorkBtn = document.querySelector('.downloadWork')
const slideIn = document.querySelectorAll('.slide-in')
const li = document.querySelectorAll('.scroll-link')
const mobile = document.querySelector('.mobile-nav')
const arrowUp = document.querySelector('.arrow-up')
const navBar = document.querySelector('.header')


menuBurger.addEventListener("click", function(){
    menuBurger.classList.contains("open")? menuBurger.classList.remove('open') & mobileMenu.classList.add('fade-out') & mobileMenu.classList.remove('fade-in') : menuBurger.classList.add('open') & mobileMenu.classList.add('fade-in')  &mobileMenu.classList.remove('fade-out')
})

li.forEach(function(link){
    link.addEventListener("click", function(e){
        menuBurger.classList.remove('open')
        mobileMenu.classList.add('fade-out')
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navHeight = navBar.getBoundingClientRect().height
        let position = element.offsetTop - navHeight
        console.log(position)

        window.scrollTo({
            left: 0,
            top : position
        })
      
    })
})

window.addEventListener('scroll', function(){
   const scrollHeight = window.pageYOffset

   scrollHeight > 500 ? arrowUp.classList.add('show-arrow') : arrowUp.classList.remove('show-arrow')
})




 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},{threshold: 0.1})

 slideIn.forEach(slide =>{
    observer.observe(slide)
 })

 
 let width1 = 1
 let width2 = 1
 let width3 = 1
 let width4 = 1
 let width5 = 1
 const pacent = [90, 80, 50, 30, 80]

 setInterval(()=>{
    width1++
    width2++
    width3++
    width4++
    width5++

    if(width1 >= pacent[0]){
        clearInterval(width1 = pacent[0])
    }

    if(width2 >= pacent[1]){
        clearInterval(width2 = pacent[1])
    }

    if(width3 >= pacent[2]){
        clearInterval(width3 = pacent[2])
    }

    if(width4 >= pacent[3]){
        clearInterval(width4 = pacent[3])
    }

    if(width5 >= pacent[4]){
        clearInterval(width5 = pacent[4])
    }

    document.querySelector('.line-1').style.width = width1 + '%'
    document.querySelector('#percentage-1').innerText = width1 + '%'

    document.querySelector('.line-2').style.width = width2 + '%'
    document.querySelector('#percentage-2').innerText = width2 + '%'

    document.querySelector('.line-3').style.width = width3 + '%'
    document.querySelector('#percentage-3').innerText = width3 + '%'

    document.querySelector('.line-4').style.width = width4 + '%'
    document.querySelector('#percentage-4').innerText = width4 + '%'

    document.querySelector('.line-5').style.width = width5 + '%'
    document.querySelector('#percentage-5').innerText = width5 + '%'


 },60)