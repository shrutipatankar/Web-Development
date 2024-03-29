﻿$(document).ready(function () {

    // on button click of forecast, I get the data in xml format and then 
    // format the same to get the required information
    $("#forecast").click(function () {

        
        var Regex = /[a - zA - Z0 - 9]/;
        var cityname = $("#cityname").val();
        var re = new RegExp(Regex);
        var validatestring = re.test(cityname);
        alert(validatestring)
        if (validatestring)
         {
        
            $("#temp").empty();
            $("#unit").empty();
            $("#city").empty();
            $("#country").empty();
            $("#weather").empty();

        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&mode=xml",
            dataType: "xml",
            success: parseXml
        });

        function parseXml(xml) {

            var temperature = $(xml).find("temperature");
            var city = $(xml).find("city");
            var weather = $(xml).find("weather");
            // alert(temperature.attr("unit"));
            $("#temp").append("Temperature: "+temperature.attr("value"));
            $("#unit").append("Unit: "+temperature.attr("unit"));
            $("#city").append("City: "+city.attr("name"));
            $("#country").append("Country: "+city.find("country").text());
            $("#weather").append("Weather: "+weather.attr("value"));
       
        }
        }
        else {
            alert("Enter a valid city name");
        }
    });
});