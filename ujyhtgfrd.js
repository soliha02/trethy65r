let text = document.querySelector('h2')
let btn = document.querySelector('button')
let input = document.querySelector('input')


btn.addEventListener('click' , ()=>{
    localStorage.setItem('name' input.value)

    text.innerHTML = localStorage.getItem('name')
})

text.innerHTML = localStorage.getItem('name')
