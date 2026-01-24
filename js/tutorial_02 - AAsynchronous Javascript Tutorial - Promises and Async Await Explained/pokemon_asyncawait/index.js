const axios = require("axios");



const fetchData = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    console.log(response.data);
  } catch(err){
    console.log(err);
  } finally {
    console.log("DONE")
  }
};

fetchData();