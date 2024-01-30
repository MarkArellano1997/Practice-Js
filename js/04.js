//objetos

const producto = {
    nombre: "table",
    precio:200,
    disponible: true
}

console.log(producto);
console.table(producto);
console.log(producto.nombre);

//destructuring

const {nombre,precio,disponible}=producto

console.log(nombre);
console.log(precio);
console.log(disponible);

//object literal enhacement

const autenticado = true
const usuario = "marcos"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto);