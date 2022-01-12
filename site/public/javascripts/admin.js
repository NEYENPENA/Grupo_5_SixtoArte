window.onload = function(){
    
    let main = document.querySelector('.admin1')
    let h2 = document.querySelector('h2')
    let h3 = document.querySelectorAll('h3')

    let div = document.querySelector('.icons')

    div.addEventListener("click", (e) => {
        main.style.backgroundColor = '#222426'
        h2.style.color = '#FFFFFF'
        h3.forEach( e => {
            e.style.color = '#FFFFFF'
          })
        
        /* h3.style.backgroundColor = '#FFFFFF' */
    })
}