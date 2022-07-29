const respuesta1 = document.querySelector('#respuesta1')
const decimal = document.querySelector('#decimal1')
const binario2 = document.querySelector('#binario2')
const respuesta2 = document.querySelector('#respuesta2')

/* eventos */
iniciarApp()
function iniciarApp(){
    decimal.addEventListener('keyup', convertidor)
    binario2.addEventListener('keyup', convertidor2)
}
/* funciones */
function isNumber(e){
    return /^\d+$/.test(e)
}
function isBinary(e){
    return /\b[01]+\b/.test(e)
}
function convertidor(){
    let valor = decimal.value
    if(isNumber(valor)){
        let binario = '';
        let resto;
        while (Math.floor(valor) !=0){
            resto = valor - Math.floor(valor/2) *2
            binario = resto + binario
            valor = Math.floor(valor/2)
        } 
        return MostrarMensaje1(binario)
    }else{
        alert('inserte un numero valido')
    }
}
function MostrarMensaje1(e){
    respuesta1.innerHTML=''
    let text = document.createTextNode(e);
    respuesta1.appendChild(text)
}
function MostrarMensaje2(e){
    respuesta2.innerHTML=''
    let text = document.createTextNode(e);
    respuesta2.appendChild(text)
   }
/* parte 2 */
function convertidor2(){

    let valor = binario2.value
    if(isBinary(valor)){
        let resul = parseInt(valor,2)
        return MostrarMensaje2(resul);
        }else{
            alert('inserte solo digitos 1 y 0')
        }


    } 
