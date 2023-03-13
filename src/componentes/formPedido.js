import { router } from "../router"

export const FormPedido ={
    template:`
    <div class="d-flex">
    <div class="col-6">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre del grupo</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Alcoholicos novatos">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mesa</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Elige tu birra</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Mahou Cinco Estrellas">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">¿Cuantas te traigo?</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="1">
        </div>
        <div class="mb-3">
        <button type="submit" class="bg-secundary text-white btn btn-primary mb-3">Añadir pedido</button>
        </div>
    </div>
    <div class="col-6>
                    <div class="mb-3">
                        <div class="h3">San Miguekl Especial</div>
                        <div>Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.</div>
                        <img class="" src="images/cerveza.png" alt="cerveza">
                    </div>
                </div>
    </div>
    `,
    // script: ()=>{
    //     document.querySelector("#form").innerHTML= Home.template
    // }
}