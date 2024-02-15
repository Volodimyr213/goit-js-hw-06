const inputHtml = document.querySelector("#validation-input")



inputHtml.addEventListener( "blur", blurFn );

function blurFn(evt){
    const inputLength = parseInt(evt.target.dataset.length);
    let valueLength = evt.target.value.length;
    

    if( inputLength === valueLength){
        
     inputHtml.classList.add("valid")

       if(inputHtml.classList.contains("invalid")){
          inputHtml.classList.remove("invalid")
       }
    }
    else{ inputHtml.classList.add("invalid")}
    return ;
};