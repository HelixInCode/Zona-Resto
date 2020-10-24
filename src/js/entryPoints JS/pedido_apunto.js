// CSS code imported 
import '../../css/chunks/nav-principal.css';
import '../../css/pedido-apunto.css';
import '../../css/chunks/footer.css';

// JS code imported 
import '../renderFooter.js';
import '../hideShowModals.js';
import '../hamburger.js';
import '../delivery.js';
import '../traerListaDeCompras.js';

// IMG code imported 
import marco from '../../../dist/img/marco.png';

const imgResto = document.querySelector('#factura > .factura-container > .logo-container > .img-container');
imgResto.style.backgroundImage = `url(${marco})`