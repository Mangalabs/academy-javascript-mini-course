const notasJoana = [10, 8, 10];

console.log(notasJoana[0]);
console.log(notasJoana[1]);
console.log(notasJoana[2]);

notasJoana[1] = 9;
console.log(notasJoana[1]);

const quantidadeDeProvas = notasJoana.length;
console.log("Quantidade de provas", quantidadeDeProvas);

const listaDeTarefas = ["Lavar louça", "Estudar Calculo IV", "Fazer o almoço"];
console.log(listaDeTarefas);

listaDeTarefas.pop();
console.log(listaDeTarefas);

listaDeTarefas.push("Estudar quimica II");
console.log(listaDeTarefas);

listaDeTarefas.shift();
console.log(listaDeTarefas);

listaDeTarefas.unshift("Passear no Parque");
console.log(listaDeTarefas);

const matriz = [
  [1, 2, 3],
  [3, 4, 5],
  [4, 5, 6],
];

console.log(matriz);
