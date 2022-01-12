window.onload = function () {
    
   let main = document.querySelector(".carritoDeProducto");
   let body = document.querySelector("body")
   let p1 = document.querySelectorAll('.producto')
   let p = document.querySelectorAll('.precio')
   let p2 = document.querySelector('.resultadofinal')

   let darkModeButton = document.querySelector(".botonDark");
   
     
     darkModeButton.addEventListener('click',()=>{
      main.classList.toggle('fondoNegro4')
      body.classList.toggle('fondoNegro2')
      p1.forEach(producto =>{
        producto.classList.toggle('blanco1')
      })
      p.forEach(producto =>{
        producto.classList.toggle('blanco1')
      })
      p2.classList.toggle('blanco')
     })

}