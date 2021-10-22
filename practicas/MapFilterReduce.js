function convertirAMayus (texto){
    return texto.toUpperCase()
}

const frutas = ['naranja', 'pera', 'manzanas']

const frutasMayus = frutas.map(convertirAMayus)

console.log(frutas)
console.log(frutasMayus)