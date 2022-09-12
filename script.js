var a = window.document.getElementById('button');
a.addEventListener('click',clicar);
var pag_01 = window.document.querySelector('h1#pagina_01')
//var div = window.document.getElementById('senhaid')
let nome_ = 'LUANA GIOVANNA BARROS COSTA';
let senha_ = '5332';
function clicar(){
    var nome = window.document.querySelector('input#txt1').value;
    nome = nome.toUpperCase();
    console.log(nome)
    let senha = window.document.getElementById('senha1').value
    let log = window.document.querySelector('a#log');
    if(nome == nome_ && senha == senha_){
        getUserPage(log);
    }else{
        senhaid.innerHTML = (`Você errou.`);
    }
}
function getUserPage(log){
    log.href = 'namoro6m.html';
}