const inicio = new Date('2022-3-12')
var anoAtual = new Date().getFullYear()
var mesAtual = new Date().getMonth()
var diaAtual = new Date().getDate()
var atual = new Date()
var atual_manipulado = `${anoAtual}-${mesAtual}-${diaAtual}`

const aniversario = '2023-2-12' // 12 - Março - 2023

const const_senha = '5332'

//Calculo da diferença//
let diffInMs = new Date(atual) - new Date(inicio)
let diasJuntos = ((diffInMs) / (1000*60*60*24))
//console.log(`Estamos a: ${diasJuntos} dias`)

var c = window.document.querySelector('div#coracao')
var i = 1

while(i <= diasJuntos){
    c.innerHTML += `❤️`
    i++
}

console.log(`${inicio} Inicio`)
console.log(`${atual} dia Atual`)
console.log(`${atual_manipulado} Mani`)
console.log(`${diasJuntos} diasJuntos`)

function surpresa(){
    var senha = document.getElementById('senha').value
    if(atual_manipulado == aniversario && senha == const_senha){
        //alert(`oi`)
        let a = document.querySelector('a#link_S')
        link_S.href = 'surpresa.html'
    }else if (senha == const_senha && atual_manipulado != aniversario){
        alert(`Volte outro dia para ver sua surpresa :-) ❤️`)
    }else if(senha != const_senha){
        alert(`Sua senha está incorreta. Pense mais um pouquinho 😉`)
    }
}