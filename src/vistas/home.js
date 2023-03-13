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
    `
}