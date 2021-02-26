requiredField = (input) => {
    if (input.value.trim() === '') { //input.value.length === '' //Es otra opción compara con la cadena vacía
        input.className = 'form-control is-invalid';
        return false;
    }else{
        input.className = 'form-control is-valid';
        return true;
    }
}

//marcos@gmail.com
validateEmail = (email) => {
    let expression = /\w+@\w+\.[a-z]{2,}$/;
    if(email.value.trim() != '' && expression.test(email.value)){
        email.className = 'form-control is-valid';
        return true;
    }else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

//validar número de teléfono
validateNumber = (number) => {
    if (number.value.trim() != '' && !isNaN(number.value)) {
        number.className = 'form-control is-valid';
        return true;
    }else{
        number.className = 'form-control is-invalid';
        return false;
    }
}

//validar consulta
validateConsult = text => {
    if (text.value.trim() != '' && text.value.length >= 10) {
        text.className = 'form-control is-valid';
        return true;
    }else{
        text.className = 'form-control is-invalid';
        return false;
    }
}

//validar check-términos y condiciones
validateTerms = () => {
    if (checkTerms.checked) {
        checkTerms.className = 'form-check-input is-valid';
        return true;
    }else{
        checkTerms.className = 'form-check-input is-invalid';
        return false;
    }
}
let checkTerms = document.querySelector('#terms');
checkTerms.addEventListener('change', validateTerms);

//Validación general - submit button
let sendEmail = () => {
    emailjs.send("service_m4vl49a","template_tny4kwn",{
        from_name: document.querySelector('#name').value,
        to_name: "Administrador",
        consult: document.querySelector('#consult').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value 
        }).then(function (response){
            //Esta función se ejecuta cuando se cumplió la promesa
            console.log(response);
            alert('Mensaje enviado');
        }, function (error){
            console.log(error);
            alert('Ocurrió un error. Intente más tarde.');
        })
}

generalValidation = e => { //el parámetro e hace referencia al 'event' 
    e.preventDefault();    //en html se usa literalmente la palabra 'event' pues hace referencia al objeto de ese nombre
    //console.log(e);
    if (requiredField(document.querySelector('#name')) &&
    validateEmail(document.querySelector('#email')) &&
    validateNumber(document.querySelector('#phone')) &&
    validateConsult(document.querySelector('#consult')) &&
    validateTerms()) {
        //En este punto se debe envia el mail
        //alert('Datos correctos');
        sendEmail();
    }else{
        //alert('Datos incorrectos');
    }
}
