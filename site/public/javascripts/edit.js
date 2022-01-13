window.onload = function(){
    let main = document.querySelector('main')
    let h2 = document.querySelector('h2')
    let form = document.querySelector('.form')
    let body = document.querySelector('.edit')
    let label = document.querySelectorAll('.label')

    let darkModeButton = document.querySelector(".botonDark");
    
      
    darkModeButton.addEventListener('click',()=>{
      main.classList.toggle('fondoNegro2')
      h2.classList.toggle('negro')
      form.classList.toggle('fondoNegro3')
      body.classList.toggle('fondoNegro3')
      label.forEach(labe =>{
        labe.classList.toggle('negro')
      })
    })
}