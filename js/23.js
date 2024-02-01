// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')

heading.textContent = 'Un nuevo heading'

console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Valor por default'
console.log(inputNombre);

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent="Nuevo enlace")