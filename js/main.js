
class producto{
    constructor(nombre, clase, grados, precio) {
        this.nombre = nombre;
        this.clase = clase;
        this.grados = grados;
        this.precio = parseInt(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.19;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new producto("Candelaria", "lager", "5%", "3500");
const producto2 = new producto("Monserrate", "ale", "5%", "5200");
const producto3 = new producto("Centro", "lambic", "5%", "7400");

console.log(producto1);
console.log(producto2);
console.log(producto3);




