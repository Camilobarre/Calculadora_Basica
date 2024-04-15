let numero1 = Number(prompt("Ingresa el primer número:"))
let numero2 = Number(prompt("Ingresa el segundo número:"))

const suma = numero1 + numero2
const resta = numero1 - numero2
const multiplicacion = numero1 * numero2
const division = numero1 / numero2

console.group()
console.info(suma)
console.info(resta)
console.info(multiplicacion)
console.info(division)
console.groupEnd()