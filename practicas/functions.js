<<<<<<< HEAD
/*
Ejercicio 1
Crear una funcion que recibe un numero y muestra por consola el numero mayor o si son iguales en caso de que lo sean.
Extra: si no introcudes el numero que muestre una advertencia.
*/


/*
while(isNaN(numero1)||isNaN(numero2)){
    var numero1 = parseInt(prompt('Numero1'))
    var numero2 = parseInt(prompt('Numero2'))
}

numero(numero1,numero2)

function numero(numero1, numero2){
    if(numero1>numero2){
        console.log(numero1)
    }else if(numero2>numero1){
        console.log(numero2)
    }else{
        console.log('Son iguales')
    }
}*/

/*
Ejercicio2: 
Crea una funcion que reciba un numero y mediante un bucle muestre en la consola todos los numeros desde 0 hasta dicho numero.

while(isNaN(numerito)){
    var numerito = prompt('pon un numero')
}

bucle(numerito)

function bucle(numero){
    for(let i = 0;i<=numero;i++){
        console.log(i)
    }
}
*/

/* Ejercicio3:
Funcion que recibe 2 numeros y te muestra por consola todos los numeros que hay entre el primero y el segundo numero
*/


function inb(num1,num2){
    if(num1>num2){
        for(let i = num2; num1>=i ;i++){
            console.log(i)
        }
    }
    else if(num2>num1){
        for(let i = num1; num2>=i ;i++){
            console.log(i)
        }
    }else{
        console.log('Los numetos tienen el mismo valor')
    }
}

while(isNaN(val1)||isNaN(val2)){
    var val1 =  parseInt(prompt('Numero1')) 
    var val2 = parseInt(prompt('Numero2'))

}

inb(val1,val2)

=======
function operacionesBasicas(){
    console.log(2*2)
    console.log(2+2)
}
>>>>>>> main
