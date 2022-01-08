window.onload = function(){

    /* let body = document.querySelector('.detalleAdm') */
    let section = document.querySelector('.principio')
    let div1 = document.querySelector('.descripcion')
    let h4 = document.querySelector('h4')
    let p = document.querySelector('p')
    let a = document.querySelector('a')

    let div = document.querySelector('.icons')

    div.addEventListener("click", (e) => {
       /* body.style.backgroundColor = '#121212' */
       section.style.backgroundColor = '#121212'
       div1.style.color = '#FFFFFF'
       h4.style.color = '#FFFFFF'
       p.style.color = '#FFFFFF'
       a.backgroundColor = '#121212'
       })

    
}