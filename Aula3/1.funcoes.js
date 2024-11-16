function imprimeOlaMundo() {
  console.log("Olá Mundo!");
}

imprimeOlaMundo();
imprimeOlaMundo();
imprimeOlaMundo();

function soma(a, b) {
  console.log(a + b);
}

soma(1, 2);

function subtrai(a, b) {
  const resultado = a - b;
  return resultado;
}

const resultadoSubtracao = subtrai(2, 1);
console.log(resultadoSubtracao);

function imprimeMensagem(mensagem = "Ola mundo") {
  console.log("Sua mensagem:", mensagem);
}

imprimeMensagem();
imprimeMensagem("Está é minha mensagem");

const arrowFunction = (parametro) => {
  return parametro + 1;
}

console.log(arrowFunction(2))