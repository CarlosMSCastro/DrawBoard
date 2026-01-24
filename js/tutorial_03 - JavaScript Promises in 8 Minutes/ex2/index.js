const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=41.41&longitude=-8.52&current_weather=true'

let isLoading = true

fetch(apiUrl)
  .then(response => {
    if(!response.ok){
      throw new Error('error: ' + response.status)
    }
    return response.json()
  })
  .then(data =>{
    console.log('Temperature', data.current_weather.temperature)
  })
  .catch(error =>{
    console.log('error in catch', error)
  })
  .finally(() => {
    //Runs once the Promise is finisehd
    isLoading = false
  })

async function myFunction(){
  try{
    const response = await fetch(apiUrl)
    if(!response.ok) {
      throw new Error('error: ' + response.status)
    }
    const data = await response.json()
    console.log("Temperature: ", data.current_weather.temperature)
  } 
  catch(error){
    console.error(error)
  }
  finally{
    isLoading = false
  }  
}

myFunction();
