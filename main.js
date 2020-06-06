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
            console.log(data);
            getCurrentCityWeatherReport(data);
           
    });
}


function searchForecastWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&APPID=${appId}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
             getCityForecastWeatherReport(data);
           
    });
}


 function getCurrentCityWeatherReport(data){
     cityHumidity.innerHTML = data.main.humidity;
     temperature.innerHTML = data.main.temp;

     city.innerHTML = data.name;
     windSpeed.innerHTML = data.wind.speed;


 }

  function getCityForecastWeatherReport(data){
    //  for (i = 0; i < data.length; i++){

    // var greenDiv = $("<div class = '.displayCityForecast'");
    // var redDiv = $("<div class = 'displayCityForecast'");
// var greenDiv = tempera;
// greenDiv1 =  date_txt,
// greenDiv2 = humidity,
// greenDiv3 = icon;


    

    //const displayForecast = document.createElement('div');
   //console.log(displayForecast = data.main.temperature);
// //                                 '<div>${weatherData.list.dt_txt}</div>
// //                                 <div><div>Temp:</div>${weatherData.list.main.temp}'</div>
// //                         //         <div><div>Humidity:</div>${weatherData.list.main.humidity}</div>';
//                      forecast.appendChild(displayForecast);     
const displayForecast = document.querySelector(".displayCityForecast");
for (const key in data) {
    if (data.hasOwnProperty(key)) {
    displayForecast.innerHTML= data[key];
//    var tempera =  displayForecast.main.temp;
   console.log(tempera);

   var dt_txt = data.list[0].weather[0].description;
   console.log(dt_txt);
   var humidity =  data.list[0].main.humidity;
   var icon =  data.list[0].weather[0].icon;

console.log(tempera)
console.log(dt_txt)
console.log(humidity)
console.log(icon)

        displayForecast = tempera+ "<br>"; 
        displayForecast = date_txt;
        displayForecast = humidity;
        displayForecast = icon;

      var tempera = $("<p>").text("tempera");
      var date_txt = $(".date_txt"); 
      var humidity = $(".humidity"); 
      var icon = $(".icon");

        tempera.append(tempera);
        date_txt.append(date_txt);
        humidity.append(humidity);
        icon.append(icon);
       
 
    }
}
  }

 document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchCurrentWeather(searchTerm);
    searchForecastWeather(searchTerm);
});
