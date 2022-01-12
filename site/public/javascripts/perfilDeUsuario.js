window.onload = function (){
    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const qw =(e,v)=>{
        return e.document.classList.toggle(v)
    }

    let darkModeButton = document.querySelector(".botonDark");
    let main = qs('perfil')



    darkModeButton.addEventListener('click', ()=>{

        qw(main,'fondoNegro')





    })



}