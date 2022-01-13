window.addEventListener('load',()=>{

    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const form = qs('#form')
    const nombre =qs('#nombre')
    const precio =qs('#precio')
    const descripcion = qs('#descripcion')
    
    let name = false
    let price = false
    let description = false

    const small20 = qs('.smallJS20')
    const small21 = qs('.smallJS21')
    const small22 = qs('.smallJS22')
    const small25 = qs('.smallJS25')
    

    nombre.addEventListener('blur', (e)=>{

        if(e.target.value ==''){
            nombre.classList.add('inputInvalid')
            nombre.classList.remove('inputValid')
            small20.innerHTML = ('el campo no puede estar vacio')
            name = false
        }else if(e.target.value.length <3){
            nombre.classList.add('inputInvalid')
            nombre.classList.remove('inputValid')
            small20.innerHTML = ('el campo tiene que tener un minimo de 3 caracteres')
            name = false
        }
        
        else{
            nombre.classList.add('inputValid')
            nombre.classList.remove('inputInvalid')
            small20.innerHTML = ('')
            name = true
        }
    })
    precio.addEventListener('blur', (e)=>{

        if(e.target.value ==''){
            precio.classList.add('inputInvalid')
            precio.classList.remove('inputValid')
            small21.innerHTML = ('el campo no puede estar vacio')
            price = false
        }else{
            precio.classList.add('inputValid')
            precio.classList.remove('inputInvalid')
            small21.innerHTML = ('')
            price = true
        }
    })
    descripcion.addEventListener('blur', (e)=>{

        if(e.target.value ==''){
            descripcion.classList.add('inputInvalid')
            descripcion.classList.remove('inputValid')
            small22.innerHTML = ('el campo no puede estar vacio')
            description = false
        }else{
            descripcion.classList.add('inputValid')
            descripcion.classList.remove('inputInvalid')
            small22.innerHTML = ('')
            description = true
        }
    })
    


    form.addEventListener('submit',(e)=>{

        if(!name || !price || !description){
            e.preventDefault()
            small25.innerHTML = ('complete los campos')
        }else{
            small25.innerHTML = ('')
        }

        
    })

    







})
document.getElementById("image").onchange = (e)=> {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
  
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
  
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      let preview = document.getElementById('preview'),
              image = document.createElement('img');
  
      image.src = reader.result;
  
      preview.innerHTML = '';
      preview.append(image);
    };
  }