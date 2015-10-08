$(document).ready(function () {
  

    $("#getDetails").click(function () {

        var response;
        var Regex = /[a - zA - Z0 - 9]/;
        var movie_name = $("#movie_name").val();
        var re = new RegExp(Regex);
        var validatestring = re.test(movie_name);
        // alert(validatestring);
        if (validatestring)
        {

        
            var url = "http://www.omdbapi.com/?t=" + $("#movie_name").val() + "&y=&plot=short&r=json";
            var temp_response;
            $.getJSON(url, function (r) {
                response = r;
            
                $("#title").val(response.Title);
                $("#year").val(response.Year);
                $("#plot").val(response.Plot);

            });

        
        }
        else {
            $("#title").val("Incorrect MovieName");
            $("#year").val("");
            $("#plot").val("");
        }
    });
    $("#clearAll").click(function () {

        $("#movie_name").val("");
        $("#title").val("");
        $("#year").val("");
        $("#plot").val("");

    });

});