const event = new Promise ((resolve, reject) => {                // resolve = sucesso, reject = quando falha.
  var name = "Carlos";
  if(name == "Pedro"){
    resolve(name);
  }else{
    reject("Name was not Pedro, name was: " + name);
  }
});

event
  .then((name) =>{                  //then() if we get resolve. .catch() if we reject
    console.log(name);
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log("PROMISE FINISHED")
  })                 