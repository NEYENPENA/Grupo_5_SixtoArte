window.addEventListener('load', ()=>{

    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const form = qs('#formBuscador')
    const buscador =qs('#buscador')

    let validate = false

    buscador.addEventListener('input', (e)=>{

        if(e.target.value.length == 0){
            validate = false
            
            }else{
                validate = true
            }
    })
    form.addEventListener('submit', (ef)=>{
        if(!validate){
            ef.preventDefault()
        }
        


    })




})