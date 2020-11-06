const $footer = document.getElementsByTagName('footer')[0]
const footerTemplate = ()=>{
  return `<div class="footer-container pt-4 pt-sm-0">
      
            <div class="footer-links py-0 p-sm-4">
              <ul>
                <li>
                  <a href="#?">Nosotros</a>
                </li>
                <li>
                  <a href="#?">Contacto</a>
                </li>
                <li>
                  <a href="#?">Quiero ser Parte de la Zona</a>
                </li>
                <li>
                  <a href="#?">Preguntas Frecuentes</a>
                </li>
              </ul>
            </div>

            <hr class="d-sm-none">
            
            <div class="footer-social-links py-0 py-sm-4">
              <h6>Seguínos en nuestras</h6>
              <ul>
                <li>
                  <a href="#?">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#?">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <hr class="d-sm-none">
            
            <div class="footer-phrase py-0 py-sm-4">
              <h5>"Lorem ipsum dolor sit amet."</h5>
            </div>

            <div class="footer-img">
              <img class="py-3" src="dist/img/zonaResto Blanco.png" alt="">
              <img src="dist/img/footer.svg" alt="">
            </div>

          </div>

          <div class="footer-bottom">
            © 2020 Copyright:
            <a href="#"> zonaresto.com</a>
          </div>`
}
$footer.innerHTML = footerTemplate();