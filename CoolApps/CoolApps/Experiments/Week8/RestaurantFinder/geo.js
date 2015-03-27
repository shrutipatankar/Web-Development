$(document).ready(function () {

    // on button click of forecast, I get the data in xml format and then 
    // format the same to get the required information
    $("#forecast").click(function () {

        var geolocation = navigator.geolocation;
        var location = geolocation.getCurrentPosition(showLocation);


        function showLocation(location) {
            var latitude = location.coords.latitude;
            var longitude = location.coords.longitude;

       //     alert(latitude);
      //      alert(longitude);


            $("#temp").empty();
            $("#unit").empty();
            $("#city").empty();
            $("#country").empty();
            $("#weather").empty();



            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&mode=xml",
                dataType: "xml",
                success: parseXml
            });

            function parseXml(xml) {
               // alert("success");
                var temperature = $(xml).find("temperature");
                var city = $(xml).find("city");
                var weather = $(xml).find("weather");
               // alert(temperature.attr("value"));
                $("#temp").append("Temperature: " + temperature.attr("value"));
                $("#unit").append("Unit: " + temperature.attr("unit"));
                $("#city").append("City: " + city.attr("name"));
                $("#country").append("Country: " + city.find("country").text());
                $("#weather").append("Weather: " + weather.attr("value"));

            }
        }
    });
});