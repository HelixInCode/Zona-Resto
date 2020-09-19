const $inputContainer = document.querySelector('#factura > .factura-container > .input-container');
const $inputForms = document.querySelector('#info-cliente > .info-cliente-container > .formulario');

const cambiarForm = ()=>{
  $inputForms.classList.toggle('delivery')
  $inputForms.children[2].classList.toggle('d-none')
  $inputForms.children[3].classList.toggle('d-none')
}

$inputContainer.addEventListener('click', (event)=>{
  
  if(event.target.id === 'delivery'){
   
    cambiarForm()

  }else if(event.target.id === 'retiro'){
    
    cambiarForm()
  }
})