const autenticado = true

autenticado ? console.log("Usuario autenticado"):console.log("No autenticado");

const saldo = 500
const pagar = 700
const tarjeta = true


saldo>pagar ? console.log("Puede pagar con saldo"):tarjeta? console.log("puedes pagar con tarjeta"): console.log("No puedes pagar")