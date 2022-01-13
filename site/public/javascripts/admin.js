window.onload = function(){
    let main = document.querySelector('.admin1')
    let body = document.querySelector('.admin')
    let h2 = document.querySelector('h2')
    let h3 = document.querySelectorAll('h3')

    let darkModeButton = document.querySelector(".botonDark");

    darkModeButton.addEventListener('click',()=>{
        main.classList.toggle('fondoNegro')
        h2.classList.toggle('blanco')
        h2.classList.toggle('fondoNegro')
        body.classList.toggle('fondoNegro2')
        h3.forEach(dato =>
          dato.classList.toggle('blanco2'))
      })

    
}
