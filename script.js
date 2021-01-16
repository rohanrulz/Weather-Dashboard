
var apiKey = "30a8edae3ef9a68c832063f10c7a3c92";


var cityname = "";
var lat = 0;
var lon = 0;

// Array to save search history
var searchedItems = [];

// Function to get current weather
function getweatherdata(cityname) {

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=" + apiKey;
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        $("#city-name").text(response.name + " (" + moment().format('LL') + ")");
        $("#present-temp").text("Temperature(F) - " + response.main.temp);
        $("#present-hum").text("Humidity % - " + response.main.humidity);
        $("#present-windspeed").text("Wind Speed(MPH) - " + response.wind.speed);
        lat = response.coord.lat;
        lon = response.coord.lon;
        getUVIndex(lat, lon);
        saveSearch(response.name);
    })
}


function UVIndexDisplay(lat, lon) {
        var UVindexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

        $.ajax({
            url: UVindexURL,
            method: "GET"            
        }).then(function (response) {
            $("#present-uvindex").text("UV Index - " + response.value);
        })   
    }
  
for (var i= 1; i<6; i++) {
    var currentdate = moment();
    currentdate.add(i, 'days' )

    $("#date" + i).text(date.format('LL'));
}

function futureforecast(cityname) {

    var futureforecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=" + apiKey;

    $.ajax({
        url: futureforecastURL,
        method: "GET"
    }).then(function)


    })




}








