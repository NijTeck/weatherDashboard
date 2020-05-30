function Chicago(city){
    //console.info("Inside Chicago");
    if (city == null){
        console.info("bailing out");
        return;
       // console.log("info");
    }
    var chicagoURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=5c99d212268aebc8d4bc84ec41ff2da2";
    console.info("chicagoURL");

     return $.ajax({
        url: chicagoURL,
        method: "GET"
      })
      .then(function(response) {
        var cityDiv = $("<div class = 'container'>")
    
        //console.log(response);
        
        var city = response.name; 
       
        var date = response.dt; 
        date = new Date(date*1000);
    
        console.log("info");
    
        var dateString = `${date.getMonth()+1}/ ${date.getDate()}/${date.getFullYear()}`;
        var pCity = $("<p>").text(city + " " + dateString);
    
        cityDiv.append(pCity);
        
        var temp = response.main.temp;
        var pOne = $("<p>").text("Temperature: " + temp +" \u00B0F");
        cityDiv.append(pOne);
    
        console.log("info");
    
        var humi = response.main.humidity; 
        var pTwo = $("<p>").text("Humidity: " + humi);
        cityDiv.append(pTwo);
    
        var WS = response.wind.speed; 
        var pThree = $("<p>").text("Wind Speed: " + WS);
        cityDiv.append(pThree);
    
        console.log("info");
    
        var UV = response.sys.type; 
        var pFour = $("<p>").text("UV index: " + UV);
        cityDiv.append(pFour);
    
        $("#Forecast").empty();
       $("#Forecast").prepend(cityDiv);
       console.log("info");
       return response; 
      });
    }



    
    function Chicago(city){
        console.info("Inside Chicago");
        if (city == null){
            console.info("bailing out");
            return;
            console.log("info");
        }
        var chicagoURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=5c99d212268aebc8d4bc84ec41ff2da2";
        console.info(chicagoURL);
         return $.ajax({
            url: chicagoURL,
            method: "GET"
          })
          .then(function(response) {
            var cityDiv = $("<div class = 'container'>")
           
            var results = response.data;
        
            console.log(response);
            
            var city = response.name; 
           
            var date = response.dt; 
            date = new Date(date*1000);
        
            console.log("info");
        
            var dateString = `${date.getMonth()+1}/ ${date.getDate()}/${date.getFullYear()}`;
            var pCity = $("<p>").text(city + " " + dateString);
        
            cityDiv.append(pCity);
            
            var temp = response.main.temp;
            var pOne = $("<p>").text("Temperature: " + temp +" \u00B0F");
            cityDiv.append(pOne);
        
            console.log("info");
        
            var humi = response.main.humidity; 
            var pTwo = $("<p>").text("Humidity: " + humi);
            cityDiv.append(pTwo);
        
            var WS = response.wind.speed; 
            var pThree = $("<p>").text("Wind Speed: " + WS);
            cityDiv.append(pThree);
        
            console.log("info");
        
            var UV = response.sys.type; 
            var pFour = $("<p>").text("UV index: " + UV);
            cityDiv.append(pFour);
        
            $("#Forecast").empty();
           $("#Forecast").prepend(cityDiv);
           console.log("info");
           return response; 
          });
        }
        
    