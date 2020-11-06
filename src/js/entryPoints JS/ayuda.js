// CSS code imported
import "../../css/chunks/nav-principal.css";
import "../../css/ayuda.css";
import "../../css/chunks/footer.css";

// JS code imported
import "../renderFooter.js";
import "../hideShowModals.js";
import "../ayuda_nav.js";

const FAQList = document.getElementById("FAQ-list");

FAQList.addEventListener("click", (event) => {
  if (event.target.nodeName === "H5") {

    event.path[2].children[1].classList.toggle("d-none");
    event.path[1].classList.toggle("selected");

  } else if (event.target.classList.contains("title-question")) {

    event.path[1].children[1].classList.toggle("d-none");
    event.target.classList.toggle("selected");
  }
});
