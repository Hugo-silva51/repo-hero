// Função criada para simular as partidas
function simularPartidas(totalPartidas) {
    let vitorias = 0;
    let derrotas = 0;

// ALaços de repetições que simula cada partida
    for (let i = 1; i <= totalPartidas; i++) {
        let resultado = Math.random() < 0.7 ? "V" : "D";
    // Um Math.random gera um resultado aleatório


    // Estrutura de decisão
        if (resultado === "V") {
            vitorias++
        }
        else {
            derrotas++
        }
    }
    return { vitorias, derrotas }
}

// Função para calcular  o rank
function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let totalPartidas = vitorias + derrotas;


    console.log(" ===== RESULTADO FINAL =====");
    console.log(`Total de Partidas: ${totalPartidas}`);
    console.log(`Vitórias: ${vitorias}`);
    console.log(`Derrotas: ${derrotas}`);
    console.log(`Saldo: ${saldo}`)

    // Estrutura de decisão para definir o rank
    if (vitorias <= 10) {
        console.log("Rank: Ferro");
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        console.log("Rank: Bronze");
    }
    else if (vitorias >= 21 && vitorias <= 30) {
        console.log("Rank: Prata");

    }
    else if (vitorias >= 31 && vitorias <= 40) {
        console.log("Rank: Ouro");
    }

    else if (vitorias >= 41 && vitorias <= 50) {
        console.log("Rank: Platina");
    }
    else if (vitorias >= 51 && vitorias <= 60) {
        console.log("Rank: Diamante");
    }

    else if(vitorias >= 61 && vitorias <= 70) {
        console.log("Rank: Mestre")
    }
    else if(vitorias <= 71 && vitorias <= 80) {
        console.log("Rank: Grão-Mestre")
    }
    else{
        console.log("Rank: Lendário");
    }
}

// Variável com o total de partidas
const totalPartidas = 100;

//Chamando a função de simulação
let resultado = simularPartidas(totalPartidas);


//Chamando a função de rank com os dados obtidos
calcularRank(resultado.vitorias, resultado.derrotas)








