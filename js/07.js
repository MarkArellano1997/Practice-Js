const producto = {
    nombre: "table",
    precio:200,
    disponible: true
}

const cliente = {
    nombre: "juan",
    premiun: true
}

// const nuevoObjeto = Object.assign(producto,cliente) une los objetos pero modifica el primer objeto
// const nuevoObjeto2 = {...producto,...cliente} une los objetos pero no modifica el primer objeto
const nuevoObjeto3={
    producto:{producto},
    cliente:{cliente}
}
console.log(nuevoObjeto3);
console.log(producto);
console.log(cliente);