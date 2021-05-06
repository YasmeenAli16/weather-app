/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// create base url using zip code and personal API key for OpenWeatherMap
const apiKey = "&appid=107cc37f2d8b88b0a640991055d1dca5&units=metric";
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';


