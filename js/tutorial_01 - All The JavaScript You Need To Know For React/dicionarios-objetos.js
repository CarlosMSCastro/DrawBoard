const person = {
  name : "Carlos",
  age : 20,
  isMarried: false,
}


//const nome = person.nome;
//const age = person.age;
//const isMarried = person.isMarried;

//Faz o mesmo que as 3 consts
const { name, age, isMarried } = person;
console.log(`${person.name}, ${person.age} anos, ${isMarried ? "Casado" : "Solteiro"}`);


