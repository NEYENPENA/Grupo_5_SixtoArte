
window.addEventListener('load',()=>{

        const qs =(tag)=>{
         return document.querySelectorAll(tag)
        }
         let formEliminar = qs('#formEliminar')

    for(let i =0; i< formEliminar.length; i++){
        formEliminar[i].addEventListener('submit', (e)=>{
        e.preventDefault()
        Swal.fire({
            title: '¿seguro que quiere eliminar este producto?',
            icon: 'warning',
            html:
              'esta acción no se puede deshacer',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> ',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    
    
            .then(result =>{
              if(result.isConfirmed){
                formEliminar[i].submit()
                
              }
              
            })

        })
    }
})