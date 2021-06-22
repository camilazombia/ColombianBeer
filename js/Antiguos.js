//entrega clase 5
class producto{
    constructor(nombre, clase, grados, precio) {
        this.nombre = nombre;
        this.clase = clase;
        this.grados = grados;
        this.precio = parseInt(precio);
        this.vendido = false;
        this.sumaIva = parseInt(this.precio * 0.19);
        this.Descuento = parseInt(this.precio * 0.5);
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new producto("Candelaria", "lager", "5%", "3500");
const producto2 = new producto("Monserrate", "ale", "6%", "5200");
const producto3 = new producto("Centro", "lambic", "7%", "7400");

console.log(producto1);
console.log(producto2);
console.log(producto3);


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





//CLASE 6 
class producto{
    constructor(nombre, clase, grados, precio) {
        this.nombre = nombre;
        this.clase = clase;
        this.grados = parseFloat(grados);
        this.precio = parseInt(precio);
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
productos.push(new producto("Cerveza Andina", "lager", "4.2", "12900"));
productos.push(new producto("Miller Lite", "lager", "4.2", "12900"));
productos.push(new producto("Miller Genuine Draft", "lager", "4.7", "24000"));
productos.push(new producto("Heineken", "lager", "5", "11800"));
productos.push(new producto("Coors Ligth", "lager", "4.2", "13800"));
productos.push(new producto("Sol", "lager", "4.5", "21000"));
productos.push(new producto("Tecate", "lager", "4.5", "13200"));

for (const producto of productos)
    producto.SumaIva()

console.log(productos)

}



