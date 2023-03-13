import { router } from "../router"

//este es el menu
export const Toolbar ={
    template: `
    <div>Ruben Henares Hidalgo</div>`,

    script: ()=>{
        console.log('hola soy header')
        //home
        document.querySelector('#home').addEventListener('click',()=>{
            router.Home()
        })

        //about
        document.querySelector('#about').addEventListener('click',()=>{
            router.About()
        })
        //admin
        document.querySelector('#admin').addEventListener('click',()=>{
            router.Admin()
        })
        
        //login
        document.querySelector('#login').addEventListener('click', ()=>{
            router.Login()
        })
        const main = document.querySelector("main")
        //detectamos el evento click en los botones eliminar y editar
        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('eliminar')){
                router.eliminar(event)
            }
            if(event.target.classList.contains('editar')){
                router.editar(event)
            }
        })

        //about
        document.querySelector('#about').addEventListener('click',()=>{
            router.About()
        })
    }
}