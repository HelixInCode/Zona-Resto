const $publicaciones = document.querySelector('#menu > .specific-container')
const $factura = document.getElementById('pedidos')
const facturaItemTemplate = (nombre, cantidad, precio) =>{
  return `<div class="item">
            <span class="cantidad-plato" data-cantidad="${cantidad}">${cantidad}</span>
            <span class="nombre-plato" data-nombre="${nombre}">${nombre}</span>
            <span class="precio-plato" data-precioTotal="${cantidad * precio}" data-precioPorUnidad="${precio}">
              <span>$</span>
              <span>${cantidad * precio}</span>
            </span>
          </div>`
}

const addItemFactura = (nombre, cantidad, precio)=>{
  $factura.children[1].innerHTML += facturaItemTemplate(nombre, cantidad, precio)
}

$publicaciones.addEventListener('click', (event)=>{
  
  const SI_ES_UN_BUTTON = event.target.nodeName === 'BUTTON' && (event.target.id === 'increase' || event.target.id === 'decrease')
  const SI_EL_BUTTON_ES_INCREASE = event.target.id === 'increase'
  const SI_EL_BUTTON_ES_DECREASE = event.target.id === 'decrease'

  let numero;

  if (SI_ES_UN_BUTTON) {
    numero = parseInt(event.path[1].children[1].innerHTML)
    // console.log(event)
    
    if (SI_EL_BUTTON_ES_INCREASE) {

      if(numero < 99){
        numero++

        if (event.path[1].children[0].disabled) {
          event.path[1].children[0].removeAttribute('disabled')
        }
      }

    }else if(SI_EL_BUTTON_ES_DECREASE){
      
      
      if(numero > 0){
        if(numero === 1){
          event.target.setAttribute('disabled', '')
        }

        numero--

      }else{
        event.target.setAttribute('disabled', '')
      }
    }

    event.path[1].children[1].innerHTML = numero

    let nombre = event.path[2].children[1].children[0].children[0].innerHTML
    let precio = parseInt(event.path[2].children[1].children[1].children[1].innerHTML)
    let cantidad = parseInt(event.path[2].children[2].children[1].innerHTML)

    console.log(nombre)
    console.log(cantidad)
    console.log(precio)

    // debugger

    let platosAdded = Array.from($factura.children[1].getElementsByClassName('nombre-plato'))

    let itemEncontrado = platosAdded.find(item =>{
      return item.dataset.nombre === nombre
    })

    if(itemEncontrado){
      if(cantidad === 0){
        // debugger
        $factura.children[1].removeChild(itemEncontrado.parentNode)
      }else{

        itemEncontrado.parentNode.children[0].innerHTML = cantidad
        itemEncontrado.parentNode.children[0].dataset.cantidad = cantidad
        
        itemEncontrado.parentNode.children[2].innerHTML = `<span>$</span><span>${precio * cantidad}</span>`
        itemEncontrado.parentNode.children[2].dataset.precioporunidad = precio
        itemEncontrado.parentNode.children[2].dataset.preciototal = precio * cantidad
      }
    }else{
      addItemFactura(nombre, parseInt(cantidad), parseInt(precio))
    }

    let precios = Array.from($factura.children[1].getElementsByClassName('precio-plato'))
    let precioTotal = 0;

    precios.forEach(item =>{
      precioTotal += parseInt(item.dataset.preciototal)
    })

    $factura.children[2].children[1].innerHTML = `$${precioTotal}`
    $factura.children[2].dataset.montoTotal = precioTotal

    if(precioTotal === 0){
      $factura.children[1].classList.add('d-none')
      $factura.children[2].classList.add('d-none')
      $factura.children[3].classList.remove('d-none')
    }else if($factura.children[2].classList.contains('d-none')){
      
      $factura.children[1].classList.remove('d-none')
      $factura.children[2].classList.remove('d-none')
      $factura.children[3].classList.add('d-none')
    }
  }
})