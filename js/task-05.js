let inputHtml = document.querySelector("#name-input");
const spanHtml = document.querySelector("#name-output");
console.log(spanHtml.textContent);

inputHtml.addEventListener( "input", evt => {
    if(evt.target.value === ""){
    spanHtml.textContent = "Anonimus"    
    }
    else{spanHtml.textContent = evt.target.value}
return;
}
);