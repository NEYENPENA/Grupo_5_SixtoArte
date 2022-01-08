window.onload = function(){
    let main = document.querySelector('main')
    let h2 = document.querySelector('h2')
    let form = document.querySelector('.form')

    let div = document.querySelector('.icons')

    div.addEventListener("click", (e) => {
       main.style.backgroundColor = '#121212'
       h2.style.color = '#FFFFFF'
       form.style.backgroundColor = '#19181a'
       form.style.color = '#FFFFFF'
       })
}