/*
1- El navegador me va a pedir dos numeros en pantalla, que diga cual es el maor y si son iguales. 
2- Si no introducimos un numero nos va a seguir pidiendo.
*/

while(isNaN(numero1)|| isNaN(numero2)){
    var numero1 = parseInt(prompt('Numero 1'))
    var numero2 = parseInt(prompt('Numero2'))
}

if(numero1>numero2){
    alert(numero1 + 'Es mayor que '+ numero2)
}else if(numero1<numero2){
    alert(numero2 + 'Es mayor que ' + numero2)
}else{
    alert('Los numeros son iguales')
}

