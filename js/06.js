// Destructuring con 2 o mas objetos

const producto = {
    nombre: "table",
    precio:200,
    disponible: true
}

const cliente = {
    nombre: "juan",
    premiun: true
}

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, premiun} = cliente

console.log(nombre);
console.log(nombreCliente);