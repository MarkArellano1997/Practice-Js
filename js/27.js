// Eventos del Dom - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e=>{
    e.preventDefault()

    const nombre = document.querySelector('.nombre')
    const password = document.querySelector('.password')

    const alertaPrevia = document.querySelector('.alerta')

    if (alertaPrevia) {
        alertaPrevia.remove()
    }

    const alerta = document.createElement('DIV')

    alerta.classList.add('alerta')
    
    console.log(alerta);

    if (nombre.value === '' || password.value === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent= 'Todo ok....'
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)

})