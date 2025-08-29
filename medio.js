
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function exercicio1() {
    const usuarioCorreto = "aluno01";
    const senhaCorreta = "1234";
    const nivelAcesso = "instrutor"; 

    rl.question("Digite o usuário: ", (usuario) => {
        rl.question("Digite a senha: ", (senha) => {
            if (usuario === usuarioCorreto && senha === senhaCorreta) {
                if (nivelAcesso === "coordenador") {
                    console.log("Acesso total.");
                } else if (nivelAcesso === "instrutor") {
                    console.log("Acesso de instrutor.");
                } else if (nivelAcesso === "aluno") {
                    console.log("Acesso de aluno.");
                }
            } else {
                console.log("Senha inválida.");
            }
            exercicio2();
        });
    });
}


function exercicio2() {
    rl.question("Digite a primeira nota: ", (n1) => {
        rl.question("Digite a segunda nota: ", (n2) => {
            rl.question("Digite a terceira nota: ", (n3) => {
                let media = (Number(n1) + Number(n2) + Number(n3)) / 3;

                if (media >= 7.0) {
                    console.log("Aprovado");
                } else if (media >= 5.0) {
                    console.log("Em recuperação");
                } else {
                    console.log("Reprovado");
                }
                exercicio3();
            });
        });
    });
}


function exercicio3() {
    rl.question("Digite o preço do produto: ", (preco) => {
        preco = Number(preco);

        if (preco > 1000) {
            console.log("Categoria Premium");
        } else if (preco >= 500) {
            console.log("Categoria Intermediária");
        } else {
            console.log("Categoria Básica");
        }
        exercicio4();
    });
}


function exercicio4() {
    rl.question("Digite um número: ", (num) => {
        num = Number(num);

        if (num === 0) {
            console.log("Zero");
        } else if (num > 0 && num % 2 === 0) {
            console.log("Número positivo e par.");
        } else if (num < 0 && num % 2 !== 0) {
            console.log("Número negativo e ímpar.");
        } else {
            console.log("Número não se encaixa em nenhuma condição específica.");
        }
        exercicio5();
    });
}


function exercicio5() {
    rl.question("Digite o nome: ", (nome) => {
        rl.question("Digite o e-mail: ", (email) => {
            if (nome && email) {
                console.log("Dados enviados com sucesso.");
            } else if (!nome && !email) {
                console.log("Por favor, preencha o nome e o e-mail.");
            } else if (!nome) {
                console.log("Por favor, preencha o nome.");
            } else if (!email) {
                console.log("Por favor, preencha o e-mail.");
            }
            exercicio6();
        });
    });
}


function exercicio6() {
    rl.question("Digite o primeiro número: ", (n1) => {
        rl.question("Digite o segundo número: ", (n2) => {
            rl.question("Digite o terceiro número: ", (n3) => {
                n1 = Number(n1);
                n2 = Number(n2);
                n3 = Number(n3);

                if (n1 >= n2 && n1 >= n3) {
                    console.log("O maior número é: " + n1);
                } else if (n2 >= n1 && n2 >= n3) {
                    console.log("O maior número é: " + n2);
                } else {
                    console.log("O maior número é: " + n3);
                }
                exercicio7();
            });
        });
    });
}


function exercicio7() {
    rl.question("Digite o dia do seu nascimento: ", (dia) => {
        rl.question("Digite o mês do seu nascimento: ", (mes) => {
            rl.question("Digite o dia atual: ", (diaAtual) => {
                rl.question("Digite o mês atual: ", (mesAtual) => {
                    if (Number(dia) === Number(diaAtual) && Number(mes) === Number(mesAtual)) {
                        console.log("Parabéns! Você ganhou 15% de desconto!");
                    } else {
                        console.log("Ainda não é seu aniversário.");
                    }
                    rl.close();
                });
            });
        });
    });
}


exercicio1();
