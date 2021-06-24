function validate(){
    var ageValidate = parseInt(document.getElementById("form-age").value);

    if(ageValidate  <18){
        let wrong = document.querySelector('#form-wrong');
        wrong.innerHTML = `<h4 class='error'>Eres menor.No puedes Ingresar</h4>`;
    }
    else if(ageValidate > 18) {
        window.location="continue.html";
    }
    else{
    alert("Ingresa un caracter válido");
    }
}



