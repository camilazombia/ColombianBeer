function validate(){
    var ageValidate = parseInt(document.querySelector('#form-age').value);
    var name = document.querySelector('.form-name')

    if(ageValidate  <18){
        let wrong = document.querySelector('#form-wrong')
        wrong.innerHTML = `<h4 class=form-wrong__text>*Eres menor.No puedes Ingresar*</h4>`;
    }
    else if(ageValidate > 18) {
        window.location="continue.html";
    }
    else{
        let wrong = document.querySelector('#form-wrong');
        wrong.innerHTML = `<h4 class='form-wrong__text'>*Ingresa un carácter válido*</h4>`;
    }
}

document.querySelector(".form-btn").addEventListener("click", validate);

function ValidateBtn() {
    document.querySelector(".form-btn");
}

//animaciones

document.querySelector(".svg-beer__01").addEventListener("mouseover", mouseOver);
document.querySelector(".svg-beer__01").addEventListener("mouseout", mouseOut);

function mouseOver() {
    $(".svg-beer__01").css({ 
    "fill": "red", 
    "stroke": "#231F20", 
    "stroke-miterlimit": "10",
});
}

function mouseOut() {
    $(".svg-beer__01").css({ 
    "fill": "#FA88C3", 
    "stroke": "#231F20", 
    "stroke-miterlimit": "10",
});
}

$(".sello").animate({   width:'300px'   },
                        "slow",);
