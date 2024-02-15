const iputHtml = document.querySelector("#font-size-control");
const textHtml = document.querySelector("#text");


iputHtml.addEventListener("change", changeText)

function changeText(evt ){
    textHtml.style.fontSize = `${evt.target.value}px`
};
