window.onload = function (){
    let main = document.querySelector('.perfil')
    let ul = document.querySelector('.perfilul')
    const div = document.querySelector('.icons')
    /* const darkmode = confirm('¿Desea modo oscuro?')
        if (darkmode) {
    main.style.backgroundColor = '#121212'
    ul.style.color = '#FFFFFF'
        } */
        div.addEventListener("click", (e) => {
            main.style.backgroundColor = '#222426'
            ul.style.color = '#FFFFFF'
           })
}