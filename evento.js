  // Por motivos didáticos ambos as datas de evento e a data atual coicidem. Para testar cada condição por gentileza
  //modifique as variáveis: dataEvento ou dataAtual e idade para validar a lógica de programação neste algoritmo.

let dataEvento = "30-09-2022";
let dataAtual =  "30-09-2022"; 
let quantidadeDeParticipantes = 100;
let idade = 23;

if (dataEvento == dataAtual) {

    if( idade >= 18) {
        console.log("Numero de inscrição por pessoa: \n")
        for(let contador = 1; contador <= quantidadeDeParticipantes; contador++) {
            console.log(` Numero de inscrição por  pessoa:${[contador]}`, quantidadeDeParticipantes[contador]);
    } 
        } else {
                console.log("Cadastro não permitido. Menor de idade!")
            }
            
} else {
    console.log("Não foi possível cadastrar um novo evento! A data atual é superior a data do evento.");
}

console.log("\nO cadastro não será permitido por ter excedido o limite máximo: " + quantidadeDeParticipantes + " inscritos.\n");
