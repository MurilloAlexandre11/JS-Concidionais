
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function exercicio1() {
    let pontos = 100;
    let passouDeFase = true;
    let coletouItemRaro = true;
    let perdeuVida = true;

    if (passouDeFase) pontos += 50;
    if (coletouItemRaro && pontos > 100) pontos += 20;
    if (perdeuVida && pontos < 120) pontos -= 30;

    console.log("Pontuação final:", pontos);

    if (pontos > 150) {
        console.log("Bom desempenho");
    } else if (pontos >= 100) {
        console.log("Desempenho regular");
    } else {
        console.log("Precisa melhorar");
    }
    exercicio2();
}


function exercicio2() {
    rl.question("Digite o peso do pacote (kg): ", (peso) => {
        rl.question("Digite a distância (km): ", (distancia) => {
            peso = Number(peso);
            distancia = Number(distancia);

            let frete = 10;
            if (peso > 10) frete += 5;
            if (distancia > 200) frete += 8;
            if (peso > 10 && distancia > 200) frete -= 3;

            console.log("Valor do frete: R$" + frete.toFixed(2));
            exercicio3();
        });
    });
}


function exercicio3() {
    let tipoVeiculo = "carro"; 
    let temVaga = true;
    let saldoCreditos = 15;

    if (!temVaga) {
        console.log("Estacionamento lotado.");
    } else {
        if (tipoVeiculo === "moto" && saldoCreditos >= 5) {
            console.log("Acesso liberado para moto.");
        } else if (tipoVeiculo === "carro" && saldoCreditos >= 10) {
            console.log("Acesso liberado para carro.");
        } else if (tipoVeiculo === "caminhao" && saldoCreditos >= 20) {
            console.log("Acesso liberado para caminhão.");
        } else if (["moto", "carro", "caminhao"].includes(tipoVeiculo)) {
            console.log("Créditos insuficientes.");
        } else {
            console.log("Tipo de veículo não reconhecido.");
        }
    }
    exercicio4();
}


function exercicio4() {
    rl.question("Digite o valor do empréstimo: ", (valorEmprestimo) => {
        rl.question("Digite sua renda mensal: ", (rendaMensal) => {
            rl.question("Possui bom histórico de crédito? (s/n): ", (hist) => {
                valorEmprestimo = Number(valorEmprestimo);
                rendaMensal = Number(rendaMensal);
                let historicoCredito = hist.toLowerCase() === "s";

                let taxa = 0.05; // 5%
                if (rendaMensal > 5000) {
                    taxa = 0.03;
                }
                if (historicoCredito && rendaMensal > 3000) {
                    taxa = 0.02;
                }

                let total = valorEmprestimo * (1 + taxa);
                console.log("Valor total a ser pago: R$" + total.toFixed(2));
                exercicio5();
            });
        });
    });
}


function exercicio5() {
    rl.question("Qual seu humor (feliz, triste, animado): ", (humor) => {
        rl.question("Está acompanhado? (s/n): ", (acomp) => {
            let acompanhado = acomp.toLowerCase() === "s";

            if (humor === "feliz" && acompanhado) {
                console.log("Recomendação: Comédia romântica");
            } else if (humor === "feliz" && !acompanhado) {
                console.log("Recomendação: Aventura");
            } else if (humor === "triste") {
                console.log("Recomendação: Drama");
            } else if (humor === "animado") {
                console.log("Recomendação: Ação");
            } else {
                console.log("Não temos uma recomendação para este humor.");
            }
            exercicio6();
        });
    });
}
 
function exercicio6() {
    rl.question("Digite o dia: ", (dia) => {
        rl.question("Digite o mês: ", (mes) => {
            rl.question("Digite o ano: ", (ano) => {
                dia = Number(dia);
                mes = Number(mes);
                ano = Number(ano);

                let diasNoMes;

                if (mes < 1 || mes > 12) {
                    console.log("Data inválida! Mês deve estar entre 1 e 12.");
                    return exercicio7();
                }

                if (mes === 2) {
                    let bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
                    diasNoMes = bissexto ? 29 : 28;
                } else if ([4, 6, 9, 11].includes(mes)) {
                    diasNoMes = 30;
                } else {
                    diasNoMes = 31;
                }

                if (dia < 1 || dia > diasNoMes) {
                    console.log("Data inválida! Dia não corresponde ao mês/ano.");
                } else {
                    console.log("Data válida!");
                }
                exercicio7();
            });
        });
    });
}


function exercicio7() {
    rl.question("Digite a pontuação (0 a 100): ", (p) => {
        rl.question("Teve assiduidade? (s/n): ", (assid) => {
            rl.question("Participou de projetos? (s/n): ", (part) => {
                let pontuacao = Number(p);
                let assiduidade = assid.toLowerCase() === "s";
                let participacaoProjetos = part.toLowerCase() === "s";

                if (assiduidade) pontuacao += 10;
                if (participacaoProjetos) pontuacao += 15;

                if (pontuacao > 110) {
                    console.log("Promovido");
                } else if (pontuacao >= 80) {
                    console.log("Mantido");
                } else {
                    console.log("Precisa de acompanhamento");
                }
                rl.close();
            });
        });
    });
}


exercicio1();
