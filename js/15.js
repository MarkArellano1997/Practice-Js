const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']


const nuevoArray = tecnologias.filter( e => e !== 'CSS')


const nuevoArray2 = tecnologias.map( e => {
    if (e==='HTML') {
        return 'Prueba'
    }else{
        return e
    }
})

console.log(nuevoArray);
console.log(nuevoArray2);