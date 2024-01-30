//Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

//añadir elementos al array
// tecnologias.push('GraphQL')
// tecnologias.unshift('GraphQL')
// const nuevoArreglo = [...tecnologias, 'GraphQL']
// const nuevoArreglo = ['GraphQL', ...tecnologias]

//eliminar elementos del array
// tecnologias.pop() eliminar el final
// tecnologias.shift() eliminar el inicio
// tecnologias.splice(2,1) eliminar una posicion en especifica (posicion,cantidad)
// const nuevoArray = tecnologias.filter((e) => {
//     return e !== 'CSS'
// })

// const nuevoArray = tecnologias.filter((e) => {
//     return e === 'CSS'
// })

//reemplazar elementos del array

const nuevoArray = tecnologias.map((e)=>{
    if (e==='HTML') {
        return 'Prueba'
    }else{
        return e
    }
})

console.table(tecnologias)
console.log(nuevoArray);
// console.log(nuevoArreglo);