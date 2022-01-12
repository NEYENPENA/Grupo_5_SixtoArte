window.onload = function () {
    
const main = document.querySelector('.carritoDeProducto')


let p2 = document.querySelectorAll('.precio')
let button = document.querySelector('.pagar')
let p3 = document.querySelector('.producto')
let body = document.querySelector('body')

let darkModeButton = document.querySelector(".botonDark");

/* const darkmode = confirm('¿Desea modo oscuro?') */

/* if (darkmode) {

main.style.backgroundColor = '#121212'
p.style.color = '#FFFFFF'
p2.style.color = '#FFFFFF'
p2.style.backgroundColor = '#808080'
button.style.backgroundColor = '#4592AF'
p3.style.color = '#FFFFFF'
   }  */
  darkModeButton.addEventListener("click", () => {
      main.style.backgroundColor = '#2e2d2d'
      p2.forEach(parrafo =>{
         parrafo.style.color = '#FFFFFF'
       })
      button.style.backgroundColor = '#4592AF'
      button.style.color = '#FFFFFF'
      p3.style.color = '#FFFFFF'
      body.style.backgroundColor = '#747272'
     })

}