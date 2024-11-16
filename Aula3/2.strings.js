const string1 = "Essa é uma string que pode ser feita em javascript";
const string2 = 'Essta também é uma string que pode ser feita em javascript';
console.log(string1);
console.log(string2);

const stringComQuebraDeLinha = "Linha 1 \nLinha 2";
console.log(stringComQuebraDeLinha);

const nome = "Diogo";
const templateString = `Seu nome é ${nome}`;
console.log(templateString);

console.log(templateString.length);
console.log(templateString[5]);

const subString = templateString.slice(0, 5);
console.log(subString);

console.log(templateString);
