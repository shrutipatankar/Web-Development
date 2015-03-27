$(document).ready(function () {
  

    $("#getDetails").click(function () {

        var response;
        var url = "http://www.omdbapi.com/?t=" + $("#movie_name").val() + "&y=&plot=short&r=json";
        var temp_response;
        $.getJSON(url, function (r) {
            response = r;
            
            $("#title").val(response.Title);
            $("#year").val(response.Year);
            $("#plot").val(response.Plot);

        });

    });

    $("#clearAll").click(function () {

        $("#movie_name").val("");
        $("#title").val("");
        $("#year").val("");
        $("#plot").val("");

    });

});