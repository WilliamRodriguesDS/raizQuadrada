function Calcular(){
    let numero = prompt("Digite um número")
    numero = parseFloat(numero);
    let resultado = Math.sqrt(numero);
    let output = document.querySelector("#output");
    output.innerHTML = "A raiz quadrada do " + numero + " = " + resultado;
}
function Limpar(){
    output.innerHTML = "";
}