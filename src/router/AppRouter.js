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
    }
}