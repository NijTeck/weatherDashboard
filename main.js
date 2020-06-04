let temperature = document.querySelector('.temperature');
let cityHumidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.windspeed');
let city = document.querySelector('.city');
let cityDate = document.querySelector('.date');
let uvIndex = document.querySelector('.uvindex');


let appId = 'f16a4aeb39776d49f565a24db6f7accf';
let searchMethod;

function getSearchMethod(searchTerm) {
   if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
       searchMethod = 'zip';
   else 
       searchMethod = 'q';
}

function searchCurrentWeather(searchTerm) {
   getSearchMethod(searchTerm);
   fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}`)
       .then((response) => {
           return response.json();
       }).then((data) => {
        
           getCurrentCityWeatherReport(data);
          
   });
}


function searchForecastWeather(searchTerm) {
   getSearchMethod(searchTerm);
   fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&APPID=${appId}`)
       .then((response) => {
           return response.json();
       }).then((data) => {
     
           // getCityForecastWeatherReport(data);
          
   });
}



function getCurrentCityWeatherReport(data){
    console.log(data);
cityHumidity.innerHTML = data.main.humidity;
console.log(cityHumidity);
temperature.innerHTML = data.main.temp;
city.innerHTML = $data.name;
windSpeed.innerHTML = $data.wind.speed;


  }

//  function getCityForecastWeatherReport(weatherData){
//      const forecast = document.querySelector('.displayCityForecast');

//      const displayForecast = document.createElement('div');
//      displayForecast.innerHTML = 
//                                 '<div>${weatherData.list.dt_txt}</div>
//                                 <div><div>Temp:</div>${weatherData.list.main.temp}'</div>
//                                 <div><div>Humidity:</div>${weatherData.list.main.humidity}</div>';
//                            forecast.appendChild(displayForecast);     

//  }
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    
   let searchTerm = document.getElementById('searchInput').value;
   if(searchTerm)
   searchCurrentWeather(searchTerm);
   searchForecastWeather(searchTerm);
});

