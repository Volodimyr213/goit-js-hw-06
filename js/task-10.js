function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputHtml = document.querySelector('input[type="number"]')
const btCreatHtml = document.querySelector('button[data-create]')
const btDestroyHtml = document.querySelector('button[data-destroy]')
const divBoxHtml = document.querySelector("#boxes")

inputHtml.addEventListener('input', makeBoxisQuantyti );
btCreatHtml.addEventListener('click', (evt)=>{createBoxes(qontyti)} );
btDestroyHtml.addEventListener('click',destroyBoxes )
 
let qontyti = 0

function makeBoxisQuantyti(evt){ 
  if ( 1 <= evt.currentTarget.value && evt.currentTarget.value > 100) {
    qontyti = 0
    alert("MAX - 100")
  }
  return qontyti = evt.currentTarget.value

};

function createBoxes(amount){
  let boxArr  = [];
  let boxSizeDefoult = 30;
  for (let idx = 0; idx < amount; idx += 1) {
    boxSizeDefoult += 10;
    const div = `<div 
    class = "item" 
    style = "display:block; 
             margin-right: 30px; 
             margin-bottom: 30px; 
             background-color: ${getRandomHexColor()}; 
             width: ${boxSizeDefoult}px; 
             height: ${boxSizeDefoult}px;">

        </div>`;
    boxArr.push(div)

  }
    return divBoxHtml.insertAdjacentHTML("beforeend", boxArr.join(""))
 
};

function destroyBoxes(evt ){
console.log(inputHtml.value = '')
divBoxHtml.innerHTML = ''
};




