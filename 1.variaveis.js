var nome = "Diogo";
let idade = 27;
const isMajor = true;

{
  var segundoNome = "Felipe"
  let aniversario = "24/01/1998"

  console.log("Aniversário:", aniversario)
}

console.log("SegundoNome:", segundoNome)
console.log(aniversario) //ReferenceError: aniversario is not defined
isMajor = false; //TypeError: Assignment to constant variable