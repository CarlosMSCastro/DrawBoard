const names = ["Carlos","Karol","João"];
console.log("Nomes Originais :");
names.map((name) => {console.log(name);});

console.log("");

const namesCastro = names.map(name => name !== "Karol" ? name + " Castro" : name);
console.log("Nomes com Castro :");
namesCastro.map((name)=> {console.log(name)});
