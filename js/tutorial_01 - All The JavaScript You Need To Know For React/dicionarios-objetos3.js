const person = {
  name : "Carlos",
  age : 29,
  isMarried: false,
};

const person2 = {...person, name: "Manuel"};

console.log(`${person.name}, ${person.age} anos, ${person.isMarried ? "Casado" : "Solteiro"}`);
console.log(`${person2.name}, ${person2.age} anos, ${person2.isMarried ? "Casado" : "Solteiro"}`);

const names = ["Carlos","Karol","João"];
const names2 = [...names,"Karen"];

console.log(names)
console.log(names2)
