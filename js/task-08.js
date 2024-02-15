
const formHtml = document.querySelector(".login-form")

formHtml.addEventListener("submit",submitFn)

function submitFn(evt){
    evt.preventDefault()
    const {email,password} = evt.currenTarget.elements
    if(email.value === "" || password.value ===""){
        return   alert("УВАГА !!! Всі поля потрібно заповнити")
      
    };

    const formData = {
        email: email.value,
        password : password.value,
    }
  evt.currenTarget.reset()

  return console.log(formData)

};
