window.onload = function () {
    let section = document.querySelector('.principio')
    let div4 = document.querySelector('.descripcion')
    let h4 = document.querySelector('h4')
    let p = document.querySelector('p')
    let div2 = document.querySelector('.comprar')
    let label = document.querySelector('label')
    let div3 = document.querySelector('.favoritos')
    let h3 = document.querySelector('h3')
    const div =  document.querySelector('.icons')
    /* const darkmode = confirm ('¿Desea modo oscuro?')

    if (darkmode) {
        section.style.backgroundColor = '#121212'
        div.style.color = '#FFFFFF'
        h4.style.color ='#FFFFFF'
        p.style.color ='#FFFFFF'
        div2.style.backgroundColor = '#121212'
        label.style.color = '#FFFFFF'
        div3.style.backgroundColor = '#121212'
        h3.style.color = '#121212'
        h3.style.backgroundColor = '#121212' 
    } */

    div.addEventListener("click", (e) => {
        section.style.backgroundColor = '#222426'
        div4.style.color = '#FFFFFF'
        h4.style.color ='#FFFFFF'
        p.style.color ='#FFFFFF'
        div2.style.backgroundColor = '#121212'
        label.style.color = '#FFFFFF'
        div3.style.backgroundColor = '#121212'
        h3.style.color = '#121212'
        /* h3.style.backgroundColor = '#121212'  */
       })
}