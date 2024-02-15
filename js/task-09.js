function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const divElHtml = document.querySelector(".widget");

const spanHtml = divElHtml.firstElementChild.lastChild;
const bodyHtml = divElHtml.parentElement;

divElHtml.addEventListener("click", changeColorFn);

function changeColorFn(evt){
  
  if(evt.target.classList.contains("change-color")){
    spanHtml.textContent = getRandomHexColor() 
    bodyHtml.style.background = getRandomHexColor()
  }
  return
};
