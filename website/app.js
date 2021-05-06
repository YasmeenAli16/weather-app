/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// create base url using zip code and personal API key for OpenWeatherMap
const apiKey = "&appid=107cc37f2d8b88b0a640991055d1dca5&units=metric";
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// get weather data from openWeatherMap through an API key for a given zip code.
const weatherData = async (baseUrl, zip, apiKey)=>{
  const response = await fetch(`${baseUrl}${zip}${apiKey}`)
  try{
    const data = await response.json();
    return data;
  }catch(error) {
    // handle error with get weather data
    console.log('error with get data', error);
  }
}

/* Function to POST data */
// fetch route url
const postInfo = async ( url ='', info = {})=>{
  console.log(info)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(info)  
  });

  //convert json info
    try {
      const newInfo = await response.json();
      console.log(newInfo);
      return newInfo;
    }catch(error) {
      // handle error with add info
    console.log("error with post info", error);
    }
}
// get info user write in input & textarea
function getInfo(elem){
  // get value of info (zip code & feelings)
  const zip= document.getElementById('zip').value;
  const feelings= document.getElementById('feelings').value;
  weatherData(baseUrl, zip, apiKey)
  .then(function(info){
    console.log(info);
    // add info to POST request
    postInfo('/post', {date:newDate, temp:info.main.temp, content:feelings})
  })
  // alert message if zip code is empty
  if(!zip){
    alert("you must enter zip code");
  }
};

// event listener handler for the "generate" button which call function getInfo
document.getElementById('generate').addEventListener('click', getInfo);



