import { router } from "../router"

export const FormPedido ={
    template:`
    <div class="d-flex">
    <div id="formValidar" class="col-6 needs-validation" novalidate>
        <div class="mb-3">
            <label for="validationCustom01" class="form-label">Nombre del grupo</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alcoholicos novatos" required>
        </div>
        <div class="valid-feedback">
            Todo bien
        </div>
        <div class="invalid-feedback">
            Es necesario poner el nombre
        </div>
        <div class="mb-3">
            <label for="validationCustom02" class="form-label">Mesa</label>
            <input type="text" class="form-control" id="mesaInput" required>
        </div>
        <div class="mb-3">
            <label for="validationCustom03" class="form-label">Elige tu birra</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Mahou Cinco Estrellas" required>
        </div>
        <div class="mb-3">
            <label for="validationCustom04" class="form-label">¿Cuantas te traigo?</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="1" required>
        </div>
        <div class="mb-3">
          <button type="submit" class="añadir text-white btn btn-secondary mb-3">Añadir pedido</button>
          <button type="submit" class="editar text-white btn btn-primary mb-3">Editar</button>
          <button type="submit" class="eliminar text-white btn btn-danger mb-3">Eliminar</button>
        </div>
    </div>
    <div class="col-6 ms-4">
      <div id="datosCervezas"></div>
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

    script:()=>{
      //validar
      document.querySelector('editar').addEventListener("click", (e)=>{
        e.preventDefault()
        //Añadimos la clase was-validated para que se muestre la validación de boostrap
        document.querySelector("#formValidar").classList.add('was-validated');
        if(formEditar.checkValidity()){
            formEditar.classList.remove('was-validated')
        }
    })
    }
}