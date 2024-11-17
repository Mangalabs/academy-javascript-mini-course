//Programação imperativa
const pessoa = {
  nome: "Diogo",
  idade: 26,
};

function aniversario(pessoa) {
  pessoa.idade = pessoa.idade + 1;
}

aniversario(pessoa);

//POO
class Pessoa {

  //Método construtor
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  //Método de classe
  aniversario() {
    this.idade = this.idade + 1;
  }
}

//Instanciamento de classe
const diogo = new Pessoa("Diogo", 26);

//Chamada de método
diogo.aniversario();
console.log(diogo.idade);