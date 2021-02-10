requiredField = (input) => {
    console.log('Se cambió el foco');
    //let input = document.getElementById('name');
    if (input.value.trim() === '') { //input.value.lenght === '' //Es otra opción compara con la cadena vacía
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}

//marcos@gmail.com
validateEmail = (email) => {
    let expression = /\w+@\w+\.[a-z]{2,}$/;
    if(email.value.trim() != '' && expression.test(email.value)){
        email.className = 'form-control is-valid';
    }else {
        email.className = 'form-control is-invalid';
    }
}

//validar número de teléfono
validateNumber = (number) => {
    if (number.value.trim() != '' && !isNaN(number.value)) {
        number.className = 'form-control is-valid';
    }else{
        number.className = 'form-control is-invalid';
    }
}