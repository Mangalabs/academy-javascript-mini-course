class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  aniversario() {
    this.idade = this.idade + 1;
  }
}

class Profissional extends Pessoa {
  constructor(nome, idade, profissao) {
    super(nome, idade);
    this.profissao = profissao;
  }

  trabalhar() {
    console.log("Estou trabalhando como:", this.profissao);
  }
}

const diogo = new Profissional("Diogo", 26, "Programador");
diogo.aniversario();
diogo.trabalhar();
