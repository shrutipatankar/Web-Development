/*
       AUTHOR:     SHRUTI SANJAY PATANKAR
       FILE TYPE:  JAVASCRIPT (EXTERNAL JS FILE, OROGINALLY USED IN: SearchPlaces.html)
       DISCLAIMER: THIS CODE HAS BEEN DONE AS A PART OF WEB DEVELOPMENT LEARNING COURSE
       TERM:       SPRING 2015
       PROFESSOR:  RICHARD RASALA
       UNIVERSITY: NORTHEASTERN UNIVERSITY, BOSTON

       APIs used: 
       Google Places API: for discovering restaurants, cafes and places worth visiting
       Open Weather API: For fethcing current climate data
*/

$(document).ready(function () {

   

    // This shows food tab by default when the page loads

    $("#history").hide();
    $("#placesWorthVisting").hide();
    $("#climate").hide();
    $("#food").show();

    $("#mainbody_thispage").hide();

    //Photo URL is needed in order to store the url of photos to be accessed from Google Places API
    var photoURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=250&photoreference="


    /* latitude and longitude specifically are used to store the latitude and longitude of the
       user's current location as required by Open Weather API*/
    var latitude;
    var longitude;

    /*tab stores which tab is currently displayed to the user*/
    var tab;


    /*URL to fetch data about nearby places using Google Places API */
    var url;

    /*Variable to collect the json parsed data object after parsing the response from the API */
    var response;

    /*Variable holds the url to the service that fetched the key of the Google Places API */
    var mykey_url = "../getkey.aspx?mykey";

    /* Variable to collect the key obtained from ajax call to mykey_url */
    var key_googleplacesapi;

    /*to hold my current location */
    var mylocation;

    // Ajax call to get the key
    var getmy_key_result = $.ajax(mykey_url);

    // These functions are to handle the ajax call result either success or failure
    getmy_key_result.fail(ErrorGettingKey);
    getmy_key_result.done(getkey);

    /*
    Function: getkey : Object (result) -> Call to getGeoLocation
    After Ajax call successfully fetches the key that key is set to the key_googleplacesapi 
    Further we detect the location of the user by calling the function getGeoLocation()
    */
    function getkey(result) {
        key_googleplacesapi = result;
        tab = "foodTab";
        getGeoLocation();

    }

    /*
    Function: ErrorGettingKey : -> Alert
    In case the ajax call to fetch the key fails, we simply alert the user
    This function was mostly used for debugging purpose
    */
    function ErrorGettingKey() {
        alet("Error getting API key!")
    }

   

    /*THIS FUNCTION HAS BEEN ADDED TO WORK OUT THE FUNCTIONALITY BASED ON LATITUDE AND LONGITUDE
    RATHER THAN GEOLOCATION*/
    function getLocationBasedData(lat, lon) {

        //alert("in get location based data")

        latitude = lat;
        longitude = lon;
        mylocation = lat + "," + lon;
        //alert("paosition=" + mylocation);
        /*Based on which tab is displayed to the user currently, only that data is fetched to the user*/
        if (tab == "foodTab") {

            var radius = "500";
            var type_of_place = $('#food_filter input[type="radio"]:checked').val();
            buildURL(type_of_place, radius);
        }

        else if (tab == "placesWorthVistingTab") {

            var radius = "700";
            var type_of_place = "museum|amusement_park|aquarium|art_gallery|zoo|shopping_mall";
            buildURL(type_of_place, radius);
        }

        else if (tab == "historyTab") {
            populateClimateData();
        }

        else if (tab == "climateTab") {
            populateClimateData();
        }


        else {
            // Do nothing
        }


    }

    /*  Function: buildURL : Type_of_place(String) Radius(Number) -> Call to getDatafromGooglePlacesAPI
       buildURL function builds the url required by Google Places depending on what the user is selecting.
       For following two cases buildURL function will be called:
       1. When user selects food tab
       2. When user selects places worth visting tab

    */
    function buildURL(type_of_place, radius) {

      //  alert("In build URL");
        url = "simpleproxy.aspx?url=%https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + mylocation
            + "&radius=" + radius
            + "&types=" + type_of_place
            + "&key=" + key_googleplacesapi + "%";

        getDatafromGooglePlacesAPI();

    }

    /*
    Function onError: -> Alert
    This function is called on failure to detect user's current location*/
    function onError() {

        alert("Sorry Could not locate you!");
    }

    /*
    Function: getDatafromGooglePlacesAPI: Calls relevent function based on tab
    This either populates restaurant table or populates places Worth visting table
    Called only if the data required is to be fetched from Google Places API*/
    function getDatafromGooglePlacesAPI() {

    //    alert("In getDatafromGooglePlacesAPI");
        // Ajax call to fetch the data
        var data = $.ajax(url);

        // on successful ajax call to Google Places API
        data.done(function (result) {

            if (tab == "foodTab") {
                populateTable(result);
            }

            else if (tab == "placesWorthVistingTab") {

                populateWorthVisitingTable(result);
            }
            else {
                // do nothing

            }
        });
        // on unsucessful ajax call to Google Places API
        data.fail(function () {
            alert("Error getting details from API! Sorry!");
        });
    }



    /*
       Function: populateTable : (Object) result -> Nothing 
       This function populates the table on page SearchPlaces.html with the data it fetched from the
       Google Places API
    */
    function populateTable(result) {

      // alert("In  populateTable");
        //flushing all the data from the image frame before adding new
        $("#frame").empty().append('<img src="images/traveller.jpg" class="active"/>');
        // flushing all data if existing in the table
        $("#myRestaurant_table").find("tr:gt(0)").remove();

        var flag_isFirstImage = false;
        //alert(result)
        response = jQuery.parseJSON(result);

        var rating = "NA";
        var open_status = "No Idea!";

        // alert(response.results[0].name);
        /* Not all objects of results from Google Places API have contain attributes like
           rating and open hours etc. This code puts a user friendly value in absence of this data
        */
        for (var i = 0; i < response.results.length; i++) {

            if ((typeof response.results[i].rating) == "undefined") {

                rating = "NA";

            }
            else {
                rating = response.results[i].rating;
            }

            if ((typeof response.results[i].opening_hours) == "undefined") {

                open_status = "No Idea!";

            }
            else if ((typeof response.results[i].opening_hours.open_now) == "undefined") {
                open_status = "No Idea!";

            }
            else {
                if (response.results[i].opening_hours.open_now == true) {

                    open_status = "Yes";
                }
                else if (response.results[i].opening_hours.open_now == false) {
                    open_status = "No";

                }
                else {
                    open_status = "No Idea!";
                }


            }

            var photo;
            if (typeof response.results[i].photos != "undefined") {

                for (j = 0; j < response.results[i].photos.length; j++) {
                    photo = photoURL + response.results[i].photos[j].photo_reference + "&key=" + key_googleplacesapi;

                    $("#frame").append('<img src="' + photo + '" />');


                }
            }


            /*Populating one row of  the output table on the foods tab with info like name of restaurant etc*/
            var output = "<tr><td>" + response.results[i].name + "</td><td>"
                                    + '<a  href="https://www.google.com/maps/dir/Current+Location/' + response.results[i].vicinity + '" target="_blank">' + response.results[i].vicinity + "</a>" + "</td><td>"
                                    + rating + "</td><td>"
                                    + open_status + "</td></tr>";

            // Append the row to the relevent table
            $("#myRestaurant_table").append(output);

            //alert(response.results[i].photos[j].height)
        }

    }

    /*
    Function: populateClimateData: -> AjaxCall to OpenWeatherAPI and sets the data to climate div
    This function is called on click of climate tab by the user*/
    function populateClimateData() {
        //alert("In populateClimateData");
        // climate URL
        var climate_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&mode=xml";

        var data = $.ajax(climate_url);

        // on successful call to Open Weather API
        data.done(function (result_xml) {

            // flush old data
            $("#temp").empty();
            $("#unit").empty();
            $("#city").empty();
            $("#country").empty();
            $("#weather").empty();
            $("#humidity").empty();
            $("#windspeed").empty();

            // collect data from XML 
            var temperature = $(result_xml).find("temperature");
            var city = $(result_xml).find("city");
            var weather = $(result_xml).find("weather");
            var humidity = $(result_xml).find("humidity");
            var windspeed = $(result_xml).find("wind");

            var kelvin_tep = temperature.attr("value");

            //conversion from Kelvin to Fahrenheit
            var faran_temp = ((1.8 * (kelvin_tep - 273)) + 32).toFixed(2);

            // Append enecessary data to the values on the html page
            $("#temp").append("Temperature: " + faran_temp + " " + "Fahrenheit");
            $("#city").append("City: " + city.attr("name"));
            $("#country").append("Country: " + city.find("country").text());
            $("#weather").append("Weather: " + weather.attr("value"));
            $("#humidity").append("Humidity: " + humidity.attr("value") + " %");
            $("#windspeed").append("WindSpeed: " + windspeed.find("speed").attr("value"));

        });

        // On failure to call the open Weather API
        data.fail(function () {

            $("#climate").innerHTML = "Sorry could not find weather data for you!";

        });
    }

    /*Function populateWorthVisitingTable: (Object) Result from Google PlacesAPI (JSON) 
    -> Sets data to the places Worth visting tab
    
    */
    function populateWorthVisitingTable(result) {

        //alert("In populateWorthVisitingTable");
        //flushing all the images before adding new ones
        $("#frame").empty().append('<img src="images/traveller.jpg" class="active"/>');

        $("#my_placesWorthVistingTable").find("tr:gt(0)").remove();
        response = jQuery.parseJSON(result);

        var type_of_place = "";
        var open_status = "";
        var flag = false;

        for (var i = 0; i < response.results.length; i++) {
            flag = false;

            if ((typeof response.results[i].opening_hours) == "undefined") {

                open_status = "No Idea!";

            }
            else if ((typeof response.results[i].opening_hours.open_now) == "undefined") {
                open_status = "No Idea!";

            }
            else {
                if (response.results[i].opening_hours.open_now == true) {

                    open_status = "Yes";
                }
                else if (response.results[i].opening_hours.open_now == false) {
                    open_status = "No";

                }
                else {
                    open_status = "No Idea!";
                }

            }

            if ((typeof response.results[i].types) == "undefined") {

                type_of_place = "NA";
            }
            else {

                type_of_place = "";
                for (var j = 0; j < response.results[i].types.length; j++) {
                    if (j == 1) {
                        flag = true;
                    }
                    // type=establishment does not provide any useful info thats why I am filtering it!
                    if (response.results[i].types[j] != "establishment" && flag == true) {

                        type_of_place = type_of_place + ", " + response.results[i].types[j];
                    }
                    else if (response.results[i].types[j] != "establishment" && flag == false) {

                        type_of_place = type_of_place + response.results[i].types[j];
                    }


                }

            }
            var latln = response.results[i].geometry.location.lat + "," + response.results[i].geometry.location.lng;

            var output = "<tr><td>" + response.results[i].name + "</td><td>"
                                    + '<a  href="https://www.google.com/maps?q=' + response.results[i].vicinity + '" target="_blank">' + response.results[i].vicinity + "</a>" + "</td><td>"
                                    + type_of_place + "</td><td>"
                                    + open_status + "</td></tr>";


            $("#my_placesWorthVistingTable").append(output);

            // append relevent photos to the frame
            var photo;
            if (typeof response.results[i].photos != "undefined") {

                for (j = 0; j < response.results[i].photos.length; j++) {
                    photo = photoURL + response.results[i].photos[j].photo_reference + "&key=" + key_googleplacesapi;

                    $("#frame").append('<img src="' + photo + '" />');


                }
            }
            //alert(response.results[i].photos[j].height)
        }

    }

    /*THIS FUNCTION VALIDATES THE LATITUDE AND LONGITUDE ENTERED BY THE USER ON TEST SEARCH PAGE*/
    function getLatitudeandLongitude() {

       // alert("in getLatitudeandLongitude");
        var temp_lat = parseFloat($("#latitude_searchpage").val());
       // alert("lat: "+temp_lat);
        var temp_lng = parseFloat($("#longitude_searchpage").val());
       // alert("lng: " + temp_lng);

        if (temp_lat=="" ||temp_lng =="")
        {
            alert("Please enter latitude and longitude of the location that you want to search");
        }

        else {

            var parsed_lat = parseFloat(temp_lat);
            var parsed_lng = parseFloat(temp_lng);

            if ((-90 <= parsed_lat) && (parsed_lat <= 90)) {
                if ((-180 <= parsed_lng) && (parsed_lng <= 180)) {

                    getLocationBasedData(parsed_lat, parsed_lng);
                }
            }

            else {

                alert("Please enter a valid value for latitude and longitude");
            }
        }

             
    }

    /*Hiding and showing the tabs clicked by the user! */


    $("#foodTab").click(function () {


        $("#history").hide();
        $("#placesWorthVisting").hide();
        $("#climate").hide();
        $("#food").fadeIn('slow');
        tab = "foodTab";
        getLatitudeandLongitude();



    });

    $("#historyTab").click(function () {


        $("#history").fadeIn('slow');
        $("#placesWorthVisting").hide();
        $("#climate").hide();
        $("#food").hide();
        tab = "historyTab";
        getLatitudeandLongitude();

    });

    $("#placesWorthVistingTab").click(function () {


        $("#history").hide();
        $("#placesWorthVisting").fadeIn('slow');
        $("#climate").hide();
        $("#food").hide();
        tab = "placesWorthVistingTab";
        getLatitudeandLongitude();

    });

    $("#climateTab").click(function () {


        $("#history").hide();
        $("#placesWorthVisting").hide();
        $("#climate").fadeIn('slow');
        $("#food").hide();
        tab = "climateTab";
        getLatitudeandLongitude();

    });


    $("#food_filter").change(function () {

        getLatitudeandLongitude();
    });

    $("#fetchData_latlon").click(function ()
    {
        getLatitudeandLongitude();
        $("#mainbody_thispage").show();
    })

});
