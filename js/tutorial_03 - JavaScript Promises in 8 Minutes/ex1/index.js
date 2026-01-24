const testPromise = new Promise((resolve, reject) => {
  const result = 5+1;
  if(result === 10){
    resolve("certo");
  } else{
    reject({message: 'Something went wrong'});
  }
});

testPromise.then(message => {
  console.log(message);
}).catch(message => {
  console.log(message);
});