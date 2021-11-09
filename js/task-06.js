const inputEl = document.querySelector('#validation-input')


inputEl.addEventListener("blur", onInputBlur)



function onInputBlur(event) {

    //    const hasClassValid = document.querySelector(".valid")
    
    // hasClassValid?.classList.remove("valid")
    
    if ( event.currentTarget.value.length === Number(event.currentTarget.dataset.length))  {
 
       classAdd('valid')
       classRemove("invalid")
    }
    
    // const hasClassInvalid = document.querySelector(".invalid")
    
    // hasClassInvalid?.classList.remove("invalid")
    
    // if(event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
    //     classAdd("invalid")
    // }
    else {
         classAdd('invalid')
    }
    
  
}

function classAdd(newclass) {
    inputEl.classList.add(newclass)
}

 function classRemove(oldclass) {
    inputEl.classList.remove(oldclass)
}
