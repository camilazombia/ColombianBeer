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
        this.vendido = parseInt(this.precio * 0.19);;
    }
    Descuento() {
        this.vendido = parseInt(this.precio * 0.5);;
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
    let div = document.createElement("producto");

    div.className='card col-2'


    div.innerHTML = 
    `<img class="img-flid center" src=${producto.image}>
    <h3> ${producto.nombre}</h3>
     <p>  Tipo: ${producto.tipo}</p>
     <p>  Grados: ${producto.grados}</p>
     <b> $ ${producto.precio}</b>`;
    document.body.appendChild(div);
}




