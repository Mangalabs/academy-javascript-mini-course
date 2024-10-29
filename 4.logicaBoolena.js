const a = 2;
const b = 2;
const c = "2";
const d = 3;
const e = false;

const iguadadeAmpla = a == c;
console.log("igualdadeAmpla", iguadadeAmpla);

const igualdadeEstritaAB = a === b;
const igualdadeEstritaAC = a === c;
console.log("igualdadeEstritaAB", igualdadeEstritaAB);
console.log("igualdadeEstritaAC", igualdadeEstritaAC);

const desigualdade = a != d;
console.log("desigualdade", desigualdade);

const negacao = !e
console.log("negacao", negacao)

const disjuncao = a === d || a === b;
console.log("disjuncao", disjuncao)

const conjuncao = a === d && a === b;
console.log("conjuncao", conjuncao)

