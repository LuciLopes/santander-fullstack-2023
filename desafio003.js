//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseFloat(gets());
const valorSaque = parseFloat(gets());


if (saldoTotal >= valorSaque) {
  print(`Saque realizado com sucesso. Novo saldo: ${saldoTotal - valorSaque}`)
} else {
  print("Saldo insuficiente. Saque nao realizado!")
}

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.