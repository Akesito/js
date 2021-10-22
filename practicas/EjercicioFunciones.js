var edad =parseInt(prompt('Edad'))

const functionF = (numero, funcion)=>{
    if(numero >=18){
        funcion(numero)
    }
}

functionF(edad,(numero)=>{
    console.log('Eres mayor de edad por que tienes' + numero)
})