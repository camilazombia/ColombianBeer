function validate(){
    var ageValidate = parseInt(document.getElementById("form-age").value);

    if(ageValidate  <18){
        let wrong = document.querySelector('#form-wrong');
        wrong.innerHTML = `<h4 class='form-wrong__text'>*Eres menor.No puedes Ingresar*</h4>`;
    }
    else if(ageValidate > 18) {
        window.location="continue.html";
    }
    else{
        let wrong = document.getElementById("form-wrong");
        wrong.innerHTML = `<h4 class='form-wrong__text'>*Ingresa un carácter válido*</h4>`;
    }
}

document.querySelector(".form-btn").addEventListener("click", validate);

function ValidateBtn() {
  document.querySelector(".form-btn");
}


