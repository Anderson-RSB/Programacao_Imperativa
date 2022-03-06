// Turma: 01 - Full Time
// Grupo: 09
// Nome: Anderson Ribeiro Sena Borges

console.log(`
Escolha um prato:

1. Pipoca
2. Macarrão
3. Carne 
4. Feijão
5. Brigadeiro
`);

const escolha = 1;
var tempo = 10;
var tempPadrao = 0;

function selecao(tempo, tempPadrao) {
    if (tempo == tempPadrao || (tempo > tempPadrao && tempo < 2 * tempPadrao)) {
        return 'Prato pronto';
    } else if (tempo < tempPadrao) {
        return 'Tempo insuficiente';
    } else if (tempo >= 2 * tempPadrao && tempo < 3 * tempPadrao) {
        return 'Prato queimou';
    } else if (tempo >= 3 * tempPadrao) {
        return 'KABUMM';
    }
}

switch (escolha) {
    case 1:
        tempPadrao = 10;
        console.log(selecao(tempo, tempPadrao));
        break;
    case 2:
        tempPadrao = 8;
        console.log(selecao(tempo, tempPadrao));
        break;
    case 3:
        tempPadrao = 15;
        console.log(selecao(tempo, tempPadrao));
        break;
    case 4:
        tempPadrao = 12;
        console.log(selecao(tempo, tempPadrao));
        break;
    case 5:
        tempPadrao = 8;
        console.log(selecao(tempo, tempPadrao));
        break;
    default:
        console.log("Prato inexistente");
}