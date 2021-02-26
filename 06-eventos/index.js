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
            let alert = document.querySelector('#alert');
            alert.className = 'alert alert-success text-center mt-3';
            alert.innerHTML = '¡Datos enviados exitosamente';
            resetForm();
        }, function (error){
            //Esta función se ejecuta cuando NO se cumple la promesa
            let alert = document.querySelector('#alert');
            alert.className = 'alert alert-danger text-center mt-3';
            alert.innerHTML = 'Error en el envío de datos. Intente nuevamente más tarde.';
            resetForm();
        })
}

generalValidation = e => { //el parámetro e hace referencia al 'event' 
    e.preventDefault();    //en html se usa literalmente la palabra 'event' pues hace referencia al objeto de ese nombre
    if (requiredField(document.querySelector('#name')) &&
    validateEmail(document.querySelector('#email')) &&
    validateNumber(document.querySelector('#phone')) &&
    validateConsult(document.querySelector('#consult')) &&
    validateTerms()) {
        sendEmail();
    }else{
        let alert = document.querySelector('#alert');
        alert.className = 'alert alert-warning text-center mt-3';
        alert.innerHTML = 'Debe completar todos los campos';
    }
}

let resetForm = () => {
    document.querySelector('#suscriptionForm').reset();
    document.querySelector('#name').className = 'form-control';
    document.querySelector('#email').className = 'form-control';
    document.querySelector('#phone').className = 'form-control';
    document.querySelector('#consult').className = 'form-control';
    document.querySelector('#terms').className = 'form-check-input'; 
    //En el caso de tener más campos, podría trabajar con un bucle para limpiar los 'hijos' con el concepto de nodos
}

let clearAlertStyles = () => {
    let alert = document.querySelector('#alert');
    alert.className = '';
    alert.innerHTML = '';
}