const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements 
    const mail = formElements.email.value
    const password = formElements.password.value
  
    const userData = {
        mail,
        password
    }
    console.log(userData);


    if (formElements.email.value === '' || formElements.password.value === '') {
        
        alert("Please fill in all the fields");
        
    }
   
    event.currentTarget.reset()
    
    // const formData = new FormData(event.currentTarget)
    
    // formData.forEach((name, value) => {
    //     console.log(name);
    //     console.log(value);
    // });
    
}

