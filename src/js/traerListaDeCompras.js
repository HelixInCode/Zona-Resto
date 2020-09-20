const $factura = document.getElementById('pedidos')
const $listaDeCompra = $factura.children[1]
const $montoTotal = $factura.children[2]

const obtenerNombreResto = (selector) => {
  let nombreResto = Array.from(document.querySelector(selector).innerText)
  nombreResto = nombreResto.filter(item => item !== " ")
  return nombreResto = nombreResto.join('')  
}

const selector = '#factura > .factura-container > .resto-info > h6'
const nombreResto = obtenerNombreResto(selector)
const listaDeCompra = `${nombreResto}listaDeCompra`
const montoTotal = `${nombreResto}montoTotal`

$listaDeCompra.innerHTML += sessionStorage.getItem(listaDeCompra)
$montoTotal.innerHTML += sessionStorage.getItem(montoTotal)
$montoTotal.dataset.montoTotal = $montoTotal.children[1].children[0].innerText

document.forms[1].addEventListener('submit', (event) =>{
  event.preventDefault()

  let verificador = 0;
  const formulario = new FormData(document.forms[1])
  const gottenData = {}
  let inputs = Array.from(document.forms[1])

  const verificarLosTiposDeInputs = () =>{
    inputs = inputs.filter(item => {
      const INPUT_ENABLED = item.className !== 'd-none' && item.nodeName !== 'BUTTON' && item.nodeName !== 'TEXTAREA'
     
      if(INPUT_ENABLED){
        return item
      }
    })
  }
  const indicarCualesInputsEstanVacios = () =>{
    inputs.forEach(item =>{
      const INPUT_EMPTY = !item.value
  
      if(INPUT_EMPTY){
  
        verificador++
  
        item.style.border = "1px solid red";
      }
    })
  }
  const getInputs = (form) =>{
    for (const input of form.entries()) {
      if(input[1] !== null && input[1] !== ""){//Si el campo del formuario no está vacio se añade a GottenData
        // console.log(`El input ${input[0]} tiene algo ingresado: ${input[1]}`)
          gottenData[input[0]] = input[1];
      }
    }
  }

  getInputs(formulario)
  verificarLosTiposDeInputs()
  indicarCualesInputsEstanVacios()

  const ALL_INPUTS_ARE_FULL = verificador === 0;

  if (ALL_INPUTS_ARE_FULL) {
    
    const obtenerElpedido = () =>{
      const $platosDeLaLista = Array.from($listaDeCompra.getElementsByClassName('item'))
      const $precioDeLosPlatos = $montoTotal.children[1].children[0].innerText
    
      const elPedido = $platosDeLaLista.map(item => {
        let objeto = {}
    
        objeto['nombre'] = item.children[1].dataset.nombre
        objeto['cantidad'] = item.children[0].dataset.cantidad
        objeto['precio_por_unidad'] = item.children[2].dataset.precioporunidad
        objeto['precio_total'] = item.children[2].dataset.preciototal
    
        return objeto
      }) 
      
      elPedido.push({montoTotal: $precioDeLosPlatos})
      
      return elPedido
    }

    alert('GRACIAS POR SU COMPRA')
    
    const elPedido = obtenerElpedido()
    console.log(elPedido)
    console.log(gottenData)
  }else{
    alert('Faltan campos por llenar');
  }
})
document.forms[1].addEventListener('input', (event) =>{
  const EMPTY_INPUT_AND_NOT_TEXTAREA = !event.target.value && event.target.nodeName !== 'TEXTAREA'
  const NOT_TEXTAREA = event.target.nodeName !== 'TEXTAREA'

  if(EMPTY_INPUT_AND_NOT_TEXTAREA){

    event.target.style.border = "1px solid red";

  }else if(NOT_TEXTAREA){

    event.target.style.border = "1px solid green";
  }
})
