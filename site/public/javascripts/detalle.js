window.onload = function(){

    let main = document.querySelector("main");
    let h4 = document.querySelectorAll("h4");
    let section = document.querySelector('.principio')
    let body = document.querySelector('.detalleAdm')
    let div = document.querySelector('.comprar')
    let div1 = document.querySelector('.trash')
    let article = document.querySelector('.pedidos')

    let darkModeButton = document.querySelector(".botonDark");
    
      
      darkModeButton.addEventListener('click',()=>{

        body.classList.toggle('fondoNegro4')  

        main.classList.toggle('fondoNegro4')

        h4.forEach(dato =>{
          dato.classList.toggle('blanco2')
        })

       section.classList.toggle('fondoNegro2')

       div.classList.toggle('fondoNegro2')

       div1.classList.toggle('fondoNegro2')

       article.classList.toggle('fondoNegro4')
      })
   

    
}