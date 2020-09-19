const $factura = document.getElementById('pedidos')

const obtenerNombreResto = (selector) => {
  let nombreResto = Array.from(document.querySelector(selector).innerText)
  nombreResto = nombreResto.filter(item => item !== " ")
  return nombreResto = nombreResto.join('')  
}

const selector = '#factura > .factura-container > .resto-info > h6'
const nombreResto = obtenerNombreResto(selector)
const listaDeCompra = `${nombreResto}listaDeCompra`
const montoTotal = `${nombreResto}montoTotal`

if(sessionStorage.getItem(listaDeCompra) && sessionStorage.getItem(montoTotal)){

  $factura.children[1].innerHTML += sessionStorage.getItem(listaDeCompra)
  $factura.children[2].innerHTML += sessionStorage.getItem(montoTotal)

}