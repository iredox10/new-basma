const hamburger = document.querySelector('.hamburger')
const list = document.querySelector('.list')
const [...links] = document.querySelectorAll('.list li a')


hamburger.addEventListener('click', () =>{
    list.classList.toggle('open')
})

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        list.classList.remove('open')
    })
})
