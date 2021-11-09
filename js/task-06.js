const inputEl = document.querySelector('#validation-input')


inputEl.addEventListener("blur", onInputBlur)



function onInputBlur(event) {
    
    if ( event.currentTarget.value.length === Number(event.currentTarget.dataset.length))  {
 
       event.currentTarget.classList.add('valid')
    }
    
    const hasClassInvalid = document.querySelector(".invalid")
    
    hasClassInvalid?.classList.remove("invalid")
  
    if(event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.add('invalid')
    }
    
}
