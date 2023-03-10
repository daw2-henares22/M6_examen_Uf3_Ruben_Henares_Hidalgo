// Import our custom CSS
import './scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { Toolbar } from './componentes/Toolbar'
import { Home } from './vistas/Home'

document.querySelector('header').innerHTML = Toolbar.template
document.querySelector('main').innerHTML = Home.template