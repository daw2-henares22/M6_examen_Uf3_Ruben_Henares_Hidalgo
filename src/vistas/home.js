import { FormPedido } from "../componentes/formPedido"

export const Home = {
    template:`
    <div class="container">
        <div class="container-fluid">
            <div class="h1 d-flex justify-content-center">Birras y tapas</div>
            <div class="h2">Selecciona tu cerveza y haz tu pedido</div>
           
            <div id=form></div>

                
            
        </div>
        <div class="container">
            <div class="container-fluid">
                <div class="h2">Esto es lo que te has tomado ya ...</div>
                <div id=tabla></div>
            </div>
        </div>
    </div>
    `,
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
        })()

}