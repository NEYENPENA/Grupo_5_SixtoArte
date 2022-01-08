window.onload = function(){
    let main = document.querySelector('.home')
    let p = document.querySelector('.precio')
    let p2 = document.querySelector('p')

    const div = document.querySelector('.icons')
    /* let div = document.querySelector('.carrousel') */
    /* const darkmode = confirm('¿Desea modo oscuro?') */

  /*   if (darkmode) { */

    /* main.style.backgroundColor = '#191919' */
    /* main.style.backgroundColor = '#121212'
    p.style.color = '#FFFFFF' 
    p2.style.color = '#FFFFFF' */
    /* div.style.backgroundColor = 'white' */
    /* } */

   div.addEventListener("click", (e) => {
    main.style.backgroundColor = '#121212'
    p.style.color = '#FFFFFF' 
    p2.style.color = '#FFFFFF'
   })
  /*   let mododarkbutton = document.querySelector('.fas fa-adjust')

    mododarkbutton.addEventListener(click, function(){
    mododarkbutton.style.color = 'red'
    }) */
 /*    console.log(main);
    console.log(p);
    console.log(p2);
    console.log(darkmode); */
}