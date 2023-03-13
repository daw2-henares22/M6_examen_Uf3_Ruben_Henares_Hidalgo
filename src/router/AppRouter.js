import { Cervezas } from "../componentes/cervezas";
import { FormPedido } from "../componentes/formPedido";
import { Home } from "../vistas/Home";



export const mainRoute = '/';

// export const routes={
//     home: '/home',
//     login: '/login',
//     adminUser: '/adminUser',
//     admin: '/admin',
//     about: '/about',
// }

export const router = {
    Home: ()=>{
        document.querySelector('main').innerHTML = Home.template;
    },
    script:
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
          'use strict'
        
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          const forms = document.querySelectorAll('.needs-validation')
        
          // Loop over them and prevent submission
          Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
          
              form.classList.add('was-validated')
            }, false)
          })
        })(),



}

