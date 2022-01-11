window.onload = function (){
    let main = document.querySelector('.perfil')
    let body = document.querySelector('body')
    let ul = document.querySelector('.perfilul')
let darkModeButton = document.querySelector(".botonDark");

darkModeButton.addEventListener('click',()=>{
    main.classList.toggle('fondoNegro')
    
    ul.classList.toggle('blanco')

    body.classList.toggle('fondoNegro2')
  })
}