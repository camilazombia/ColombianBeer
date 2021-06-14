// PRIMERA ENTREGA PROYECTO FINAL
// PRIMERA PANTALLA ---> SOLICITUD DE EDAD PARA INGRESAR

let edad = prompt("Ingresa tu edad")
console.log(edad);

if(edad <= 17){
    alert("No puedes ingresar")
}
else if (edad >= 18){ 
    alert("Tienes acceso")
}
else {
    alert("No es válido");
}

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
    producto.SumaIva();

console.log(productos)



//entrega clase 4 (Producto1/ calcular total)
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
