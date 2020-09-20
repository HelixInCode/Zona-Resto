const $publicaciones = document.querySelector('#menu > .specific-container')
const $factura = document.getElementById('pedidos')
const $realizarPedido = document.getElementById('realizarPedido')

const $listaDeCompra = $factura.children[1]
const $montoTotal = $factura.children[2]
const $imgFactura = $factura.children[3]

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
  $listaDeCompra.innerHTML += facturaItemTemplate(nombre, cantidad, precio)
}
const obtenerNombreResto = (selector) => {
  let nombreResto = Array.from(document.querySelector(selector).innerText)
  nombreResto = nombreResto.filter(item => item !== " ")
  return nombreResto = nombreResto.join('')  
}
const cambiarEstadoDeLaFactura = ()=>{
  $listaDeCompra.classList.toggle('d-none') //Container con los items de la factura
  $montoTotal.classList.toggle('d-none') //Container con el monto total de la factura
  $imgFactura.classList.toggle('d-none') //Container con el monto total de la factura
}

const selector = '#publicacion > .publicacion-container > .description-container > .title-rank-container > h1'
const nombreResto = obtenerNombreResto(selector)
const listaDeCompra = `${nombreResto}listaDeCompra`
const montoTotal = `${nombreResto}montoTotal`

const THERES_THIS_RESTO_ITEMS = sessionStorage.getItem(listaDeCompra) && sessionStorage.getItem(montoTotal)

if(THERES_THIS_RESTO_ITEMS){
  const sincronizarSelectoresDeLosPlatos = () =>{
    const platosMenu = Array.from(document.getElementsByClassName('item-container'))
    const platosIngresados = JSON.parse(sessionStorage.getItem('platosIngresados'))
  
    platosMenu.forEach(plato =>{
      const platoEncontrado = platosIngresados.find(platoIngresado =>{
        
        return platoIngresado.nombre === plato.children[1].children[0].innerText
      })

      if(platoEncontrado){
        if(platoEncontrado.cantidad > 0){
          plato.children[2].children[0].removeAttribute('disabled')
        }
        plato.children[2].children[1].innerText = platoEncontrado.cantidad
      }
    })
  }

  $listaDeCompra.innerHTML += sessionStorage.getItem(listaDeCompra)
  $montoTotal.innerHTML += sessionStorage.getItem(montoTotal)
  $montoTotal.dataset.montoTotal = $montoTotal.children[1].children[0].innerText

  cambiarEstadoDeLaFactura()
  sincronizarSelectoresDeLosPlatos()
}

$publicaciones.addEventListener('click', (event)=>{
  
  const SI_ES_UN_BUTTON = event.target.nodeName === 'BUTTON' && (event.target.id === 'increase' || event.target.id === 'decrease')
  const SI_EL_BUTTON_ES_INCREASE = event.target.id === 'increase'
  const SI_EL_BUTTON_ES_DECREASE = event.target.id === 'decrease'

  let numero;

  if (SI_ES_UN_BUTTON) {
    numero = parseInt(event.path[1].children[1].innerHTML)
    
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

    let nombre = event.path[2].getElementsByTagName('h4')[0].innerText
    let precio = parseInt(event.path[2].getElementsByTagName('span')[0].innerText)
    let cantidad = parseInt(event.path[2].getElementsByTagName('span')[1].innerText)

    const addedDishes = Array.from($listaDeCompra.getElementsByClassName('nombre-plato'))
    const FOUND_DISH_NAME = addedDishes.find(dish =>{
      return dish.dataset.nombre === nombre
    })
    
    if(FOUND_DISH_NAME){
      const foundDish = FOUND_DISH_NAME.parentNode
      const QUANTITY_ITEM_TURNS_ZERO = cantidad === 0
      const QUANTITY_ITEM_CHANGES = cantidad !== 0 && cantidad > 0

      if(QUANTITY_ITEM_TURNS_ZERO){

        $listaDeCompra.removeChild(foundDish)

      }else if(QUANTITY_ITEM_CHANGES){

        foundDish.children[0].innerHTML = cantidad
        foundDish.children[0].dataset.cantidad = cantidad
        
        foundDish.children[2].innerHTML = `<span>${precio * cantidad}</span><span>$</span>`
        foundDish.children[2].dataset.precioporunidad = precio
        foundDish.children[2].dataset.preciototal = precio * cantidad
      }
    }else{
      addItemFactura(nombre, parseInt(cantidad), parseInt(precio))
    }

    const precios = Array.from($listaDeCompra.getElementsByClassName('precio-plato'))
    let precioTotal = 0;

    precios.forEach(item =>{
      precioTotal += parseInt(item.dataset.preciototal)
    })

    //Container con el monto total de la factura
    $montoTotal.innerHTML = `<span>Monto Total:</span>
                                      <span>
                                        <span>${precioTotal}</span>
                                        <span>$</span>
                                      </span>`
                                      
    $montoTotal.dataset.montototal = precioTotal

    if(precioTotal === 0){

      cambiarEstadoDeLaFactura()

    }else if($montoTotal.classList.contains('d-none')){
      
      cambiarEstadoDeLaFactura()
    }
  }
})

$realizarPedido.addEventListener('click', () =>{

  let arreglo = Array.from($listaDeCompra.getElementsByClassName('item'))

  if(arreglo.length){

    let cantidadDeLosPlatos = arreglo.map(item => {
      let objeto = {}
  
      objeto['nombre'] = item.children[1].dataset.nombre
      objeto['cantidad'] = item.children[0].dataset.cantidad
  
      return objeto
    })

    sessionStorage.setItem(listaDeCompra, $listaDeCompra.innerHTML)
    sessionStorage.setItem(montoTotal, $montoTotal.innerHTML)
    sessionStorage.setItem('platosIngresados', JSON.stringify(cantidadDeLosPlatos))

    window.location = 'pedido-apunto.html'
  }else{
    alert('no ha elegido ningun producto')
  }
})