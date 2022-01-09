window.onload = function(){
    let main = document.querySelector('.home')
    let p = document.querySelector('.precio')
    let p2 = document.querySelectorAll('p')
    let button = document.querySelectorAll('button')
    
/*     console.log(p2);
 */
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
    p2.forEach( e => {
      e.style.color = '#FFFFFF'
    })
    main.style.backgroundColor = '#222426'
    p.style.color = '#FFFFFF' 
    button.forEach( e => {
      e.style.backgroundColor = '#4592AF'
      e.style.borderRadius = '5px'
    })

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