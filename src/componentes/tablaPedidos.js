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
          <tr>
            <td>Estrella Galicia</td>
            <td>5</td>
            <td><button type="submit" class="bg-danger text-white btn btn-primary mb-3">Eliminar</button><td>
            <td><button type="submit" class="bg-yellow text-white btn btn-primary mb-3">Editar Pedido</button></td>
          </tr>
          <tr>
            <td>Alhambra reserva 1925</td>
            <td>3</td>
            <td><button type="submit" class="bg-danger text-white btn btn-primary mb-3">Eliminar</button></td>
            <td><button type="submit" class="bg-yellow text-white btn btn-primary mb-3">Editar Pedido</button></td>
          </tr>
          <tr>
            <td>San Miguel Especial</td>
            <td>5</td>
            <td><button type="submit" class="bg-danger text-white btn btn-primary mb-3">Eliminar</button></td>
            <td><button type="submit" class="bg-yellow text-white btn btn-primary mb-3">Editar Pedido</button></td>
            </tr>
        </tbody>
    </table>
    <button type="submit" class="bg-primary text-white btn btn-primary mb-3">Enviar pedido</button>
    </div>
    `,
    // script: ()=>{
    //     document.querySelector("#tabla").innerHTML = Home.template
    // }
}