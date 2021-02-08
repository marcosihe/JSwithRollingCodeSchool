requiredField = () => {
    console.log('Se cambió el foco');
    let input = document.getElementById('name');
    if (input.value.length == 0) {
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}