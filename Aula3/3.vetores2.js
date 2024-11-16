const notas = [10, 8, 7, 5];

console.log("for");
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

console.log("forEach");
notas.forEach((nota) => {
  console.log(nota);
});

const conceitos = notas.map((nota) => {
  if (nota > 9) {
    return "Excelente";
  } else if (nota > 7) {
    return "Bom";
  } else if (nota > 5) {
    return "Regular";
  }

  return "Insuficiente";
});
console.log("map");
console.log(conceitos);

const notasAltas = notas.filter((nota) => {
  return nota > 7;
});
console.log("filter");
console.log(notasAltas);

const notasOrdenadas = notas.sort((a, b) => {
  return a - b;
});
console.log("sort");
console.log(notasOrdenadas);

const somaDasNotas = notas.reduce((acumulado, nota) => {
  return acumulado + nota;
}, 0);
console.log("reduce");
console.log(somaDasNotas);
