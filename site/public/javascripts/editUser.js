window.addEventListener('load', (e)=>{
    let usuarios = 'nada'
    fetch('http://localhost:3000/api/user/list')
    .then(resultado=>{
         return resultado.json()
        .then(datas=>{  
             usuarios = datas    
        })
        .catch(error=>{
            console.log(error)
        })
    })
    .catch(error=>{
        console.log(error)
    })
    
    const qs =(tag)=>{
        return document.querySelector(tag)
    }
    const form = qs('#form')
    const nombre = qs('#nombre')
    const user = qs('#user')
    const contraseña = qs('#contraseña')
    const small10 =qs ('.smallJS10')
    const small11 = qs ('.smallJS11')
    const small12 = qs ('.smallJS12')

    let name = true
    let usuario = true
    let contra = true

    nombre.addEventListener('input', (e)=>{
        if(e.target.value.length == ''){
            nombre.classList.add('inputInvalid')
            nombre.classList.remove('inputValid')
            small10.innerHTML = ('no puede estar vacio')
            name = false

        }else if(e.target.value.length < 3){
            nombre.classList.add('inputInvalid')
            nombre.classList.remove('inputValid')
            small10.innerHTML = ('minimo de 3 caracteres')
            name = false
        }else{
            nombre.classList.add('inputValid')
            nombre.classList.remove('inputInvalid')
            small10.innerHTML = ('')
            name= e.target.value
        }

    })
    user.addEventListener('input', (e)=>{
        usuario = false
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].username === e.target.value){
                usuario = usuarios[i].username
            } 
        }
        
        if(e.target.value == ''){
            user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small11.innerHTML = ('no puede estar vacio')
            usuario = false
            
           } else if(usuario){
            
            user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small11.innerHTML = ('el usuario ya existe')
            usuario = 'mal'
           }
           
           else {
            user.classList.add('inputValid')
            user.classList.remove('inputInvalid')
            small11.innerHTML = ('')
            usuario = e.target.value
           }


    })

    contraseña.addEventListener('input', (e)=>{
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/.test(e.target.value)){
            contraseña.classList.add('inputInvalid')
            contraseña.classList.remove('inputValid')
            small12.innerHTML = ('la contraseña debe de tener un minimo de 8 caracteres y un maximo de 15, minimo una letra minuscula, una mayuscula y un número y sin espacios en blanco')
            contra = false
        }else{
            contraseña.classList.add('inputValid')
            contraseña.classList.remove('inputInvalid')
            small12.innerHTML = ('')
            contra = e.target.value
        }
    })


form.addEventListener('submit', (e)=>{
        
        
       if(!name){
        e.preventDefault()
        nombre.classList.add('inputInvalid')
        nombre.classList.remove('inputValid')
        small10.innerHTML = ('el campo no puede estar vacio y un minimo de 3 caracteres')
       }else{
        nombre.classList.add('inputValid')
        nombre.classList.remove('inputInvalid')
        small10.innerHTML = ('')
       }

        if(!usuario){
        e.preventDefault()
        user.classList.add('inputInvalid')
        user.classList.remove('inputValid')
        small11.innerHTML = ('el campo no puede estar vacio')
        }else{
        user.classList.add('inputValid')
        user.classList.remove('inputInvalid')
        small11.innerHTML = ('')
        }


        if(!contra){
            e.preventDefault()
            contraseña.classList.add('inputInvalid')
            contraseña.classList.remove('inputValid')
            small12.innerHTML = ('el campo no puede estar vacio')
        }else{
            contraseña.classList.add('inputValid')
            contraseña.classList.remove('inputInvalid')
            small12.innerHTML = ('')
        }
        
        
    })


    document.getElementById("image").onchange = (e)=> {
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();
    
        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(e.target.files[0]);
    
        // Le decimos que cuando este listo ejecute el código interno
        reader.onload = function(){
        let preview = document.getElementById('preview4'),
                image = document.createElement('img');
    
        image.src = reader.result;
    
        preview.innerHTML = '';
        preview.append(image);
        };
  }
 /*    const main = qs ('.conteiner')
    const h1 = qs ('.titulo')
    const input = qs ('#image')
    const darkmode = confirm ('¿Desea modo oscuro?')

    if (darkmode){
    main.style.backgroundColor = '#121212'
    h1.style.color = '#FFFFFF'
    input.style.backgroundColor = '#FFFFFF'
} */
const main = qs ('.conteiner')
const h1 = qs ('.titulo')
const input = qs ('#image')
const div = qs('.icons')

div.addEventListener("click", (e) => {
    main.style.backgroundColor = '#222426'
    h1.style.color = '#FFFFFF'
    input.style.backgroundColor = '#FFFFFF'
   })

})
