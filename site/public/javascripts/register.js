

window.addEventListener('load',()=>{
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
    const small1 = qs('.smallJS1')
    const small2 = qs('.smallJS2')
    const small3 = qs('.smallJS3')
    const small4 = qs('.smallJS4')
    const small5 = qs('.smallJS5')
    const small6 = qs('.smallJS6')
    const user = qs('#user')
    const fecha = qs('#date')
    const email = qs('#correo')
    const contraseña = qs('#contraseña')
    const comfirmacion = qs('#confirm')

    let name =false
    let usuario = false
    let contra = false
    let correo = false
    let confirm =false
   
    nombre.addEventListener('input', (e)=>{
        if(e.target.value.length < 3){
            nombre.classList.add('inputInvalid')
            nombre.classList.remove('inputValid')
            small1.innerHTML = ('minimo de 3 caracteres')
            name = false
        }else{
            nombre.classList.add('inputValid')
            nombre.classList.remove('inputInvalid')
            small1.innerHTML = ('')
            name= e.target.value
        }

    })
    user.addEventListener('input', (e)=>{
        
        if(e.target.value == ''){
            user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small2.innerHTML = ('no puede estar vacio')
            usuario = false
            
           } else {
            usuario = false
            user.classList.add('inputValid')
            user.classList.remove('inputInvalid')
            small2.innerHTML = ('')
            for (let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].username === e.target.value){
                    usuario = usuarios[i].username
                }
            }

           }
           
        if(usuario != false){
            user.classList.add('inputInvalid')
            user.classList.remove('inputValid')
            small2.innerHTML = ('el usuario ya existe')
            usuario = 'mal'
           }
           
           else {
            user.classList.add('inputValid')
            user.classList.remove('inputInvalid')
            small2.innerHTML = ('')
            usuario = e.target.value
           }


    })
    email.addEventListener('input', (e)=>{
        
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email === e.target.value){
                correo = 'existe'
            }
        }
        if(e.target.value == ''){
            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small4.innerHTML = ('no puede estar vacio')
            correo = false
            }
            else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value)){
            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small4.innerHTML = ('no es un correo valido')
            correo = false
           } else if(correo === 'existe'){
            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small4.innerHTML = ('el correo ya existe')
            correo = 'mal'
           }
           
           else {
            email.classList.add('inputValid')
            email.classList.remove('inputInvalid')
            small4.innerHTML = ('')
            correo = true
           }
           
    })

    contraseña.addEventListener('input', (e)=>{
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/.test(e.target.value)){
            contraseña.classList.add('inputInvalid')
            contraseña.classList.remove('inputValid')
            small5.innerHTML = ('la contraseña debe de tener un minimo de 8 caracteres y un maximo de 15, minimo una letra minuscula, una mayuscula y un número y sin espacios en blanco')
            contra = false
        }else{
            contraseña.classList.add('inputValid')
            contraseña.classList.remove('inputInvalid')
            small5.innerHTML = ('')
            contra = e.target.value
        }
    })

    comfirmacion.addEventListener('blur', (e)=>{
        if(e.target.value != ''){
            
            confirm = e.target.value
            email.classList.add('inputValid')
            email.classList.remove('inputInvalid')
            small6.innerHTML = ('')
        }else{

            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small6.innerHTML = ('el campo no puede estar vacio')
            confirm = false
        }

    })

   



    




   
    form.addEventListener('submit', (e)=>{
        if(fecha.value ==''){
            e.preventDefault()
            fecha.classList.add('inputInvalid')
            fecha.classList.remove('inputValid')
            small3.innerHTML = ('el campo no puede estar vacio')
        }else{
            fecha.classList.add('inputValid')
            fecha.classList.remove('inputInvalid')
            small3.innerHTML = ('')
        }
        
       if(!name){
        e.preventDefault()
        nombre.classList.add('inputInvalid')
        nombre.classList.remove('inputValid')
        small1.innerHTML = ('el campo no puede estar vacio')
       }else{
        nombre.classList.add('inputValid')
        nombre.classList.remove('inputInvalid')
        small1.innerHTML = ('')
       }

       if(!usuario){
        e.preventDefault()
        user.classList.add('inputInvalid')
        user.classList.remove('inputValid')
        small2.innerHTML = ('el campo no puede estar vacio')
       }else{
        user.classList.add('inputValid')
        user.classList.remove('inputInvalid')
        small2.innerHTML = ('')
       }
        if(!contra){
            e.preventDefault()
            contraseña.classList.add('inputInvalid')
            contraseña.classList.remove('inputValid')
            small5.innerHTML = ('el campo no puede estar vacio')
        }else{
            contraseña.classList.add('inputValid')
            contraseña.classList.remove('inputInvalid')
            small5.innerHTML = ('')
        }

        if(!confirm){
            e.preventDefault()
            comfirmacion.classList.add('inputInvalid')
            comfirmacion.classList.remove('inputValid')
            small6.innerHTML = ('el campo no puede estar vacio')
        }else{
            comfirmacion.classList.add('inputValid')
            comfirmacion.classList.remove('inputInvalid')
            small6.innerHTML = ('')
        }

        if(!correo){
            e.preventDefault()
            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small4.innerHTML = ('el campo no puede estar vacio')
        }else if(correo == 'mal'){
            e.preventDefault()
            email.classList.add('inputInvalid')
            email.classList.remove('inputValid')
            small4.innerHTML = ('el correo ya existe')
        }
        
        else{
            email.classList.add('inputValid')
            email.classList.remove('inputInvalid')
            small4.innerHTML = ('')
        }
        if(contra != confirm){
            e.preventDefault()
            comfirmacion.classList.add('inputInvalid')
            comfirmacion.classList.remove('inputValid')
            small6.innerHTML = ('las contraseñas no coinciden')
        }else{
            comfirmacion.classList.add('inputValid')
            comfirmacion.classList.remove('inputInvalid')
            small6.innerHTML = ('')
        }
        
        
        
    })

    

document.getElementById("image").onchange = (e)=> {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
  
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
  
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      let preview = document.getElementById('preview3'),
              image = document.createElement('img');
  
      image.src = reader.result;
  
      preview.innerHTML = '';
      preview.append(image);
    };
  }

  let body = document.querySelector('.register')
    let darkModeButton = document.querySelector(".botonDark");
  
    
    darkModeButton.addEventListener('click',()=>{
     body.classList.toggle('fondoNegro2')
    })
})
