import { router } from "../router"

export const TablaPedidos ={
    template:`
    <div class="col-6">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Cerveza</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr class="mb-3">
            <td>Estrella Galicia</td>
            <td>5</td>
            <td><button type="submit" class="text-white btn btn-danger">Eliminar</button></td>
            <td><button type="submit" class="text-white btn btn-secondary">Editar Pedido</button></td>
          </tr>
          <tr class="mb-3">
            <td>Alhambra reserva 1925</td>
            <td>3</td>
            <td><button type="submit" class="text-white btn btn-danger mb-3">Eliminar</button></td>
            <td><button type="submit" class="text-white btn btn-secondary mb-3">Editar Pedido</button></td>
          </tr>
          <tr class="mb-3">
            <td>San Miguel Especial</td>
            <td>5</td>
            <td><button type="submit" class="text-white btn btn-danger">Eliminar</button></td>
            <td><button type="submit" class="text-white btn btn-secondary">Editar Pedido</button></td>
            </tr>
        </tbody>
    </table>
    <button type="submit" class="enviar text-white btn btn-primary mb-3">Enviar pedido</button>
    <button type="submit" class="editar text-white btn btn-secondary mb-3">Editar pedido</button>
    <button type="submit" class="eliminar text-white btn btn-danger mb-3">Eliminar pedido</button>
    </div>
    `,
    // script: ()=>{
    //     document.querySelector("#tabla").innerHTML = Home.template
    // }
}