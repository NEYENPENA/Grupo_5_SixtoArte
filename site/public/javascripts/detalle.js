window.onload = function(){

    /* let body = document.querySelector('.detalleAdm') */
    let section = document.querySelector('.principio')
    let div1 = document.querySelector('.descripcion')
    let h4 = document.querySelector('h4')
    let p = document.querySelector('p')
    let a = document.querySelector('a')
    let div3 = document.querySelector('.comprar')
    let div2 = document.querySelector('.trash')
    let label = document.querySelector('label')

    let div = document.querySelector('.icons')

    div.addEventListener("click", (e) => {
       /* body.style.backgroundColor = '#121212' */
       section.style.backgroundColor = '#222426'
       div1.style.color = '#FFFFFF'
       h4.style.color = '#FFFFFF'
       p.style.color = '#FFFFFF'
       a.backgroundColor = '#121212'
       div3.style.backgroundColor = '#222426'
       div2.style.backgroundColor = '#222426'
       label.style.color = '#FFFFFF'
       })

    
}