console.log("FOR");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("WHILE");
let valorAtual = 0;
while (valorAtual < 10) {
  valorAtual = valorAtual + 1;
  console.log(valorAtual);
}

console.log("DO... WHILE");
let valorAtualDoWhile = 0;
do {
  console.log(valorAtualDoWhile);
  valorAtualDoWhile = valorAtualDoWhile + 1;
} while (valorAtualDoWhile > 1);
