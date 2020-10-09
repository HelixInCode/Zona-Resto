const $navAyuda = document.getElementsByClassName('inner-nav')[0]
var $items = document.getElementsByClassName('help-container')
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
      case "Nosotros": toggleSections($items, "Nosotros")
        break;
      case "FAQ": toggleSections($items, "FAQ")
        break;
      case "Comentarios": toggleSections($items, "Comentarios")
        break;
      case "Privacidad": toggleSections($items, "Privacidad")
        break;
      case "Condiciones": toggleSections($items, "Condiciones")
        break;
  
      default:
        break;
    }
  }
})

