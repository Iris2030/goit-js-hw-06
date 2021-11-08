const inputEl = document.querySelector('#validation-input')
const style = document.querySelector("style")
 

 

inputEl.addEventListener("blur",onInputBlur)
function onInputBlur(event) {
    
 
 
    if ( event.currentTarget.value.length === Number(event.currentTarget.dataset.length))  {
 
       event.currentTarget.classList.add('valid')
    }
    else {
    event.currentTarget.classList.add('invalid')
    }
  
}
