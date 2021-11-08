const inputEl = document.querySelector('#name-input')
let spanEl = document.querySelector('#name-output')
 

 
inputEl.addEventListener('input', onInputSubmit)

function onInputSubmit(event) {
   
  if( event.currentTarget.value !== "" ){
         spanEl.textContent = event.currentTarget.value
    }
  else {
       spanEl.textContent = "Anonymous"
    }
}
 