
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function exercicio1() {
    rl.question("Digite sua idade: ", (idade) => {
        idade = Number(idade);

        if (idade >= 18) {
            console.log("Acesso concedido.");
        } else {
            console.log("Acesso negado. Idade mínima 18 anos.");
        }
        exercicio2();
    });
}


function exercicio2() {
    rl.question("Digite seu saldo: ", (saldo) => {
        saldo = Number(saldo);

        if (saldo > 0) {
            console.log("Seu saldo está positivo.");
        } else {
            console.log("Seu saldo está negativo.");
        }
        exercicio3();
    });
}


function exercicio3() {
    let statusPedido = "processando";

    if (statusPedido === "enviado") {
        console.log("Seu pedido está a caminho.");
    } else {
        console.log("Seu pedido ainda está sendo processado.");
    }
    exercicio4();
}


function exercicio4() {
    rl.question("Digite o valor da compra: ", (valor) => {
        valor = Number(valor);

        if (valor >= 100) {
            console.log("Você recebeu 10% de desconto!");
        } else {
            console.log("Valor mínimo para desconto não atingido.");
        }
        exercicio5();
    });
}


function exercicio5() {
    const senhaCorreta = "senai123";

    rl.question("Digite a senha: ", (senha) => {
        if (senha === senhaCorreta) {
            console.log("Login bem-sucedido.");
        } else {
            console.log("Senha incorreta.");
        }
        exercicio6();
    });
}


function exercicio6() {
    rl.question("Digite a temperatura em Celsius: ", (temp) => {
        temp = Number(temp);

        if (temp > 30) {
            console.log("Está quente!");
        } else {
            console.log("Temperatura agradável.");
        }
        exercicio7();
    });
}


function exercicio7() {
    let corSinal = "verde";

    if (corSinal === "verde") {
        console.log("Pode passar.");
    } else if (corSinal === "vermelho") {
        console.log("Pare.");
    } else {
        console.log("Cor inválida do sinal.");
    }

    rl.close(); 
}


exercicio1();
