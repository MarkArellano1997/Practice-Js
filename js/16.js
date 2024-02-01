const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']
const numeros = [10,20,30]

let nuevoArray; 

// Filter
nuevoArray = tecnologias.filter( e => e !== 'CSS')


// Comprueba si un elemento existe en el Array
// const resultado = tecnologias.includes('HTML')


// Comprueba si almenos uno cumple con la condicion
// const resultado = numeros.some(numero => numero >15)


// Devuelve el primer elemento que cumpla con la condicion
// const resultado = numeros.find(numero => numero>15)

// Comprueba si todos los elementos cumplen con la condicion
// const resultado = numeros.every(numero => numero>15)


// Acumula los valores en una variable
// const resultado = numeros.reduce((total,numero)=>numero+total,0)

// Crea un array en base a una condicion
// const resultado = tecnologias.filter(numero => numero === 'HTML')
// const resultado = numeros.filter(numero => numero !== 10)

// tecnologias.forEach((e,index)=>console.log(index))

// Crea un nuevo array

const arrayMap = tecnologias.map(e=>e)

console.log(arrayMap);


