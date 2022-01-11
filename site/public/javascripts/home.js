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




})
const darkGray = "#222426";
const darker = "#4592AF";
const white = "#FFFFFF";

const whiteGray = "#FFFFFF";

function changeMode (mode = "dark"){
  let main = document.querySelector(".home");
  let p = document.querySelector(".precio");
  let p2 = document.querySelectorAll("p");
  let button = document.querySelectorAll("button");

  p2.forEach((e) => {
    e.style.color = mode == "dark" ? white : darker;
  });
  main.style.backgroundColor = mode == "dark" ? darkGray : white;
  p.style.color = white;
  button.forEach((e) => {
    e.style.backgroundColor = mode == "dark" ? darker : white;
    e.style.borderRadius = "5px";
  });
};


window.onload = function () {
  const darkModeButton = document.querySelector(".icons");

  darkModeButton.addEventListener("click", function() {
        // next two code lines should be replaced by store functions
    let main = document.querySelector(".home");
    if (main.style.backgroundColor == darkGray) {
      changeMode("light");
    } else {
      changeMode("dark");
    }
  }, false);
};
