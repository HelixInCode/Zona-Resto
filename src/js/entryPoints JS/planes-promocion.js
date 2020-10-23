// CSS code imported 
import '../../css/style.css';
import '../../css/index-results.css';
import '../../css/planes-promocion.css';

// JS code imported 
import '../renderFooter.js'; 
import '../hideShowModals.js';

const $navAyuda = document.getElementsByClassName('inner-nav')[0]
var $items = document.getElementsByClassName('panel-socios-container')
$items = Array.from($items)

$navAyuda.addEventListener('click', (event)=>{
  if(event.target.classList.contains('item')){

    const arregloNav = Array.from($navAyuda.children)
    arregloNav.forEach(button => {
      button.classList.remove('active')
    })
    event.target.classList.add('active')
      
    const toggleSections = ($items, nombre) =>{
      $items.forEach(item => {
        item.classList.add('d-none')
  
        if(item.dataset.type === nombre){
          item.classList.remove('d-none')
        }
      });
    }
  
    switch (event.target.dataset.type) {
      case "Datos": toggleSections($items, "Datos")
        break;
      case "Resto": toggleSections($items, "Resto")
        break;
      case "Finanzas": toggleSections($items, "Finanzas")
        break;
  
      default: 
        break;
    }
  }
})