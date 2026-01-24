const name = "Carlos";
const age = 29;

const person = {
  name, //fica com o nome da variavel acima.
  age,
  isMarried: false,
};

const isMarried = person.isMarried
console.log(`${person.name}, ${person.age} anos, ${isMarried ? "Casado" : "Solteiro"}`);