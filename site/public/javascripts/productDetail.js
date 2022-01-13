window.onload = function () {
    
    let darkModeButton = document.querySelector(".botonDark");
    let h2 = document.querySelector('h2')
    let h4 = document.querySelector('h4')
    let h3 = document.querySelector('h3')
    let p = document.querySelector('p')
    let body = document.querySelector('.bodyDetail')
    let main = document.querySelector('.mainDetail')
    let principio = document.querySelector('.principio')
    let comprar =document.querySelector('.comprar')
    let relacionado =document.querySelector('.relacionadoOscuro')

    darkModeButton.addEventListener("click", (e) => {
        h2.classList.toggle('blanco')
        body.classList.toggle('fondoNegro2')
        main.classList.toggle('fondoNegro')
        principio.classList.toggle('fondoNegro2')
        h4.classList.toggle('blanco')
        p.classList.toggle('blanco')
        h3.classList.toggle('fondoNegro')
        relacionado.classList.toggle('fondoNegro')
       })
}