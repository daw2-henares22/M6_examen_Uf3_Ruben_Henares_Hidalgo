import { router } from "../router"

export const FormPedido ={
    template:`
    <div class="d-flex">
    <div class="col-6 needs-validation" novalidate>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre del grupo</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alcoholicos novatos" required>
        </div>
        <div class="valid-feedback">
            Todo bien
        </div>
        <div class="invalid-feedback">
            Es necesario poner el nombre
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="terms" required>
            <label for="terms" class="form-check-label">Acepto los terminos y condiciones</label>
        </div>
        <div class="valid-feedback">
            Todo bien
        </div>
        <div class="invalid-feedback">
            Es necesario aceptar los terminos
        </div>


        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mesa</label>
            <input type="text" class="form-control" id="mesaInput" required>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Elige tu birra</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Mahou Cinco Estrellas" required>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">¿Cuantas te traigo?</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="1" required>
        </div>
        <div class="mb-3">
        <button type="submit" class="text-white btn btn-secondary mb-3">Añadir pedido</button>
        </div>
    </div>
    <div class="col-6 ms-4">
                    <div class="mb-3">
                        <div class="h3">San Miguekl Especial</div>
                        <div>Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.</div>
                        <img class="img-fluid" src="images/cerveza.png" alt="cerveza">
                    </div>
                </div>
    </div>

    <script>
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

    </script>

    `,
    // script: ()=>{
    //     document.querySelector("#form").innerHTML= Home.template
    // }

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