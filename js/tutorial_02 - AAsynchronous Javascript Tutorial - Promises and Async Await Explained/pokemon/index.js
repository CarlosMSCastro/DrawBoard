const axios = require("axios");

const data = axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");

data
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise resolved");
  });
  