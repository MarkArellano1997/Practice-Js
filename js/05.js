const producto = {
    nombre: "table",
    precio:200,
    disponible: true
}

// No te permite eliminar, añadir, ni reescribir ningun valor del objeto
// Object.freeze(producto)

// No te permite eliminar ni añadir pero si reescribir un valor del objeto
Object.seal(producto)


//para reescribir un valor
producto.nombre = "monitor curvo"


//si no existe, lo agrega
producto.imagen= "imagen.jpg"

delete producto.disponible

console.log(producto);