class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  aniversario() {
    this.idade = this.idade + 1;
  }

  //Método estático
  static falar() {
    console.log("Olá");
  }
}

const diogo = new Pessoa("Diogo", 26);
diogo.aniversario();

//Chamada de método estático
Pessoa.falar();
