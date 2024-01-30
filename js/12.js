// function sumar(a,b) {
//     console.log(a+b);
// }

// sumar(2,4)
// sumar(5,10)
// sumar(100,50)

function sumar(a,b) {
    return [a+b,"Hola mundo"]
}

const [resultado, holaMundo] = sumar(10,15)

console.log(resultado);
console.log(holaMundo);

console.log(sumar(20,30));