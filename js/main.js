class producto{
    constructor(nombre, tipo, grados, precio,imagen) {
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
productos.push(new producto("Cerveza Andina", "lager", "4.2", "12900", "https://via.placeholder.com/150"));
productos.push(new producto("Miller Lite", "lager", "4.2", "12900","https://via.placeholder.com/150"));
productos.push(new producto("Miller Genuine Draft", "lager", "4.7", "24000", "https://via.placeholder.com/150" ));
productos.push(new producto("Heineken", "lager", "5", "11800","https://via.placeholder.com/150"));
productos.push(new producto("Coors Ligth", "lager", "4.2", "13800", "https://via.placeholder.com/150"));
productos.push(new producto("Sol", "lager", "4.5", "21000", "https://via.placeholder.com/150"));
productos.push(new producto("Tecate", "lager", "4.5", "13200","https://via.placeholder.com/150" ));


for (const producto of productos) {
    let div = document.createElement("div");

    div.className='card col-3'

    div.innerHTML = 
    `<img class="card-img-top"src=${producto.image}>
    <h3 class="card-title"> ${producto.nombre}</h3>
     <p class="card-type">  Tipo: ${producto.tipo}</p>
     <p class="card-gre">  Grados: ${producto.grados}</p>
     <b class="card-price"> $ ${producto.precio}</b>
     <button type="button" class="card-btn">Comprar</button>`;
     document.body.appendChild(div);

    let button = document.createElement("input");
    button.innerHTML = "Comprar";

    const product = document.querySelector("#product")

    product.insertAdjacentElement("afterbegin", div);
}


//entrega clase 4 (Producto1/ calcular total)
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

let PrecioBase  = producto1.precio; 
let PrecioIva  = producto1.sumaIva; 
let PrecioDescuento = producto1.Descuento;

console.log(PrecioBase)
console.log(PrecioIva)
console.log(PrecioDescuento)

let ValorTotal = resta(suma( PrecioBase, (PrecioIva)), PrecioDescuento); 
console.log(ValorTotal)

  