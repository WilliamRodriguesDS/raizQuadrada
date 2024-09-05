function Calcular(calcule){
    let numero = prompt("Digite um número")
    numero = parseFloat(numero);
    switch(calcule){
        case "criar":
            numero *= numero;
            break;
    }
    let output = document.querySelector("#output");
    output.innerHTML = numero;
}