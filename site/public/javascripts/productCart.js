window.onload = function () {
    
const main = document.querySelector('.carritoDeProducto')
let p = document.querySelector('.resultadofinal')
let p2 = document.querySelector('.precio')
let button = document.querySelector('.pagar')
let p3 = document.querySelector('.producto')
const div = document.querySelector('.icons')

/* const darkmode = confirm('¿Desea modo oscuro?') */

/* if (darkmode) {

main.style.backgroundColor = '#121212'
p.style.color = '#FFFFFF'
p2.style.color = '#FFFFFF'
p2.style.backgroundColor = '#808080'
button.style.backgroundColor = '#4592AF'
p3.style.color = '#FFFFFF'
   }  */
   div.addEventListener("click", (e) => {
      main.style.backgroundColor = '#121212'
      p.style.color = '#FFFFFF'
      p2.style.color = '#FFFFFF'
      p2.style.backgroundColor = '#808080'
      button.style.backgroundColor = '#4592AF'
      button.style.color = '#FFFFFF'
      p3.style.color = '#FFFFFF'
     })

}