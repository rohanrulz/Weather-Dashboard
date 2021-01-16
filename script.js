
var apiKey = "30a8edae3ef9a68c832063f10c7a3c92";



var citiessearched = [];



$("#citysearchbtn").on("click", function () {
    var cityname = $("#cityinput").val();
    getweatherdata(cityname);
    futureforecast(cityname);
})

function savesearchhistory(cityname) {
    citiessearched.push(cityname);
    citysearchhistoryload();
}


function citysearchhistoryload() {
    for(var i = 0; i < citiessearched.length; i++){
        $("#city-" + i).text(citiessearched[i]);
    }
}




function getweatherdata(cityname) {

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=" + apiKey;
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        $("#city-name").text(response.name + " (" + moment().format('LL') + ")");
        $("#present-temp").text("Temperature(F) - " + response.main.temp);
        $("#present-hum").text("Humidity(%) - " + response.main.humidity);
        $("#present-windspeed").text("Wind Speed(MPH) - " + response.wind.speed);
        var latvalue = response.coord.lat;
        var lonvalue = response.coord.lon;
        UVIndexDisplay(latvalue, lonvalue);
        savesearchhistory(response.name);
    })
}


function UVIndexDisplay(latvalue, lonvalue) {
        var UVindexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latvalue + "&lon=" + lonvalue + "&appid=" + apiKey;

        $.ajax({
            url: UVindexURL,
            method: "GET"            
        }).then(function (response) {
            $("#present-uvindex").text("UV Index - " + response.value);
        })   
    }
  
for (var i= 1; i<6; i++) {
    var currentdate = moment();
    currentdate.add(i, 'days' );

    $("#date" + i).text(currentdate.format('LL'));
}

function futureforecast(cityname) {

    var futureforecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=" + apiKey;

    $.ajax({
        url: futureforecastURL,
        method: "GET"
    }).then(function (response) {
        var positionofarray = 0;
        for (var i = 1; i < 6; i++) {
            $("#tempdate" + i).text("Temp(F) - " + response.list[positionofarray].main.temp);
            $("#humdate" + i).text("Humidity(%) - " + response.list[positionofarray].main.humidity);
            positionofarray = positionofarray + 8;
        }
    })
}









    


    













