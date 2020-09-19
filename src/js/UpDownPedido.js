const $publicaciones = document.querySelector('#menu > .specific-container')
const $factura = document.getElementById('pedidos')
const $realizarPedido = document.getElementById('realizarPedido')

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
const obtenerNombreResto = (selector) => {
  let nombreResto = Array.from(document.querySelector(selector).innerText)
  nombreResto = nombreResto.filter(item => item !== " ")
  return nombreResto = nombreResto.join('')  
}

const selector = '#publicacion > .publicacion-container > .description-container > .title-rank-container > h1'
const nombreResto = obtenerNombreResto(selector)
const listaDeCompra = `${nombreResto}listaDeCompra`
const montoTotal = `${nombreResto}montoTotal`

if(sessionStorage.getItem(listaDeCompra) && sessionStorage.getItem(montoTotal)){

  $factura.children[1].innerHTML += sessionStorage.getItem(listaDeCompra)
  $factura.children[2].innerHTML += sessionStorage.getItem(montoTotal)

  $factura.children[1].classList.remove('d-none') //Container con los items de la factura
  $factura.children[2].classList.remove('d-none') //Container con el monto total de la factura
  $factura.children[3].classList.add('d-none') //Container con el monto total de la factura

  let platosMenu = Array.from(document.getElementsByClassName('item-container'))
  let platosIngresados = JSON.parse(sessionStorage.getItem('platosIngresados'))

  platosMenu.forEach(plato =>{
    let platoEncontrado = platosIngresados.find(platoIngresado =>{
      
      return platoIngresado.nombre === plato.children[1].children[0].innerText
    })
    if(platoEncontrado){
      if(platoEncontrado.cantidad > 0){
        plato.children[2].children[0].removeAttribute('disabled')
      }
      plato.children[2].children[1].innerText = platoEncontrado.cantidad
    }
  })
  // document.getElementsByClassName('item-container')[0].children[2].children[1].innerText
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

    let nombre = event.path[2].children[1].children[0].children[0].innerHTML
    let precio = parseInt(event.path[2].children[1].children[1].children[1].innerHTML)
    let cantidad = parseInt(event.path[2].children[2].children[1].innerHTML)

    // console.log(nombre)
    // console.log(cantidad)
    // console.log(precio)

    let platosAdded = Array.from($factura.children[1].getElementsByClassName('nombre-plato'))

    let itemEncontrado = platosAdded.find(item =>{
      return item.dataset.nombre === nombre
    })

    if(itemEncontrado){
      if(cantidad === 0){
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

    //Container con el monto total de la factura
    $factura.children[2].innerHTML = `<span>Monto Total:</span>
                                      <span>
                                        <span>$</span>
                                        <span>${precioTotal}</span>
                                      </span>`
    $factura.children[2].dataset.montototal = precioTotal

    if(precioTotal === 0){
      $factura.children[1].classList.add('d-none') //Container con los items de la factura
      $factura.children[2].classList.add('d-none') //Container con el monto total de la factura
      $factura.children[3].classList.remove('d-none') //Imagen de cubiertos

    }else if($factura.children[2].classList.contains('d-none')){
      
      $factura.children[1].classList.remove('d-none') //Container con los items de la factura
      $factura.children[2].classList.remove('d-none') //Container con el monto total de la factura
      $factura.children[3].classList.add('d-none') //Imagen de cubiertos
    }
  }
})

$realizarPedido.addEventListener('click', () =>{

  let arreglo = Array.from($factura.children[1].getElementsByClassName('item'))

  if(arreglo.length){

    let cantidadDeLosPlatos = arreglo.map(item => {
      let objeto = {}
  
      objeto['nombre'] = item.children[1].dataset.nombre
      objeto['cantidad'] = item.children[0].dataset.cantidad
  
      return objeto
    })

    sessionStorage.setItem(listaDeCompra, $factura.children[1].innerHTML)
    sessionStorage.setItem(montoTotal, $factura.children[2].innerHTML)
    sessionStorage.setItem('platosIngresados', JSON.stringify(cantidadDeLosPlatos))

    window.location = 'pedido-apunto.html'
  }else{
    alert('no ha elegido ningun producto')
  }
  // console.log(arreglo)
  
  


  // let arregloObjetosPlatos = arreglo.map(item => {
  //   let objeto = {}

  //   objeto['nombre'] = item.children[1].dataset.nombre
  //   objeto['cantidad'] = item.children[0].dataset.cantidad
  //   objeto['precio_por_unidad'] = item.children[2].dataset.precioporunidad
  //   objeto['precio_total'] = item.children[2].dataset.preciototal

  //   return objeto
  // })
  // console.log(arregloObjetos)
})