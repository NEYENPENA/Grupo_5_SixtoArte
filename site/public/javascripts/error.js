window.onload = function () {
    let body = document.querySelector('.error')
    let p = document.querySelector('.conten__number')

    const darkmode = confirm('¿Desea modo oscuro?')
    if (darkmode){
        body.style.backgroundColor = '#222426'
        /* p.style.color = '#8B0000' */
        p.style.color = '#328eaf'
    }
}