window.addEventListener('load',()=>{

    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const slider = qs('#slider')
    let sliderSection = document.querySelectorAll('.slider_section')
    let sliderSectionLast =sliderSection[sliderSection.length -1]
    const botonL = qs('#botonLeft')
    const botonR = qs('#botonRight')

    slider.insertAdjacentElement('afterbegin', sliderSectionLast)

    function moverDerecha(){

        let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
        slider.style.marginLeft = "-200%"
        slider.style.transition = "all 0.5s"
        setTimeout(function (){
            slider.style.transition = "none" 
            slider.insertAdjacentElement('beforeend', sliderSectionFirst)
            slider.style.marginLeft = "-100%";
        }, 500 );
    }

    function moverIzquierda(){

        let sliderSection = document.querySelectorAll('.slider_section')
        let sliderSectionLast =sliderSection[sliderSection.length -1]
        slider.style.marginLeft = "0%"
        slider.style.transition = "all 0.5s"
        setTimeout(function (){
            slider.style.transition = "none" 
            slider.insertAdjacentElement('afterbegin', sliderSectionLast)
            slider.style.marginLeft = "-100%";
        }, 500 );
    }


    botonR.addEventListener('click', ()=>{
        moverDerecha()
    })
    botonL.addEventListener('click', ()=>{
        moverIzquierda()
    })

    setInterval(() => {
        moverDerecha()
    }, 4000);



    let main = document.querySelector(".home");
    
    let p2 = document.querySelectorAll("p");
    let button = document.querySelectorAll("button");
    let carrito = document.querySelectorAll('.fa-shopping-cart')
    let body = document.querySelector('.bodyHome')
  
    
      let darkModeButton = document.querySelector(".botonDark");
    
      
      darkModeButton.addEventListener('click',()=>{
        main.classList.toggle('fondoNegro')

        p2.forEach(parrafo =>{
          parrafo.classList.toggle('blanco')
        })
        carrito.forEach(car =>{
          car.classList.toggle('blanco') 
        })
        carrito.forEach(car =>{
          car.classList.toggle('fondoNegro') 
        })
        body.classList.toggle('fondoNegro2')
      })
    


})

