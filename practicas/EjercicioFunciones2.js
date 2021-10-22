const ejercicio2 = (numero,fn2) =>{
    for(let i = 0; i<=numero;i++){
        fn2(i)
    }
}

const bucle1 = numero => console.log(numero)

ejercicio2(10,bucle1)