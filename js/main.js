window.onload = () => {
    document.querySelector('[data-target="#exampleModal"]').click();
  }

  
    class producto{
    constructor(id, nombre, tipo, grados, precio,imagen) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.grados = parseFloat(grados);
        this.precio = parseInt(precio);
        this.image = imagen;
        }
    vender() {
        this.vendido = true;
    }
    SumaIva() {
        this.vendido = parseInt(this.precio * 0.19);
    }
    Descuento() {
        this.vendido = parseInt(this.precio * 0.5);
    }
}

const productos = [];
productos.push(new producto("1", "Bogotá", "lager", "4.2", "12900", "https://via.placeholder.com/150"));
productos.push(new producto("2","Medellín", "lager", "4.2", "12900","https://via.placeholder.com/150"));
productos.push(new producto("3","Cali", "lager", "4.7", "24000", "https://via.placeholder.com/150" ));
productos.push(new producto("4","Cartagena", "lager", "5", "11800","https://via.placeholder.com/150"));
productos.push(new producto("5","Bucaramanga", "lager", "4.2", "13800", "https://via.placeholder.com/150"));
productos.push(new producto("6","Manizales", "lager", "4.5", "21000", "https://via.placeholder.com/150"));
productos.push(new producto("7","Cúcuta", "lager", "4.5", "13200","https://via.placeholder.com/150" ));
productos.push(new producto("8","Pereira", "lager", "4.5", "13200","https://via.placeholder.com/150" ));
productos.push(new producto("9","Ibagué", "lager", "4.5", "13200","https://via.placeholder.com/150" ));

for (const producto of productos) {
    let div = document.createElement("div");

    div.className='card col-sm-12 col-md-3 cardproduct my-3'

    div.innerHTML = 
    `<img class="card-img-top"src="${producto.image}">
    <h3 class="card-title"> ${producto.nombre}</h3>
     <p class="card-type">  Tipo: ${producto.tipo}</p>
     <p class="card-gre">  Grados: ${producto.grados}</p>
     <p class="card-price"> $ ${producto.precio}</p>
     <button type="button" class="card-btn${producto.id} card-btn">Comprar</button>`;
     document.body.appendChild(div);

     $(`.card-btn${producto.id}`).on('click', function () {
        console.log(`Compraste ${producto.nombre}`);
        localStorage.setItem('${producto.nombre}','${producto.id}');

    });

    const product = document.querySelector("#product")
    product.insertAdjacentElement("afterbegin", div);
}


//animaciones
$(".svg-beer__01").mouseOver("mouseover");
$(".svg-beer__01").mouseOut("mouseout");

function mouseOver() {
$(".svg-beer__01").style.color = "red";
}

function mouseOut() {
$(".svg-beer__01").style.color = "black";
}

document.querySelectorAll(".svg-beer__01").addEventListener("mouseover", mouseOver);
document.querySelectorAll(".svg-beer__01").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelectorAll(".svg-beer__01").style.color = "red";
}

function mouseOut() {
  document.querySelectorAll(".svg-beer__01").style.color = "black";
}


