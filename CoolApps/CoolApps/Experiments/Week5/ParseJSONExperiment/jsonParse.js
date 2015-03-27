$(document).ready(function () {
    
  


    var data = {
        "employees":
    [
        {
            "firstname": "Ingrid",
            "lastname": "Atkinson",
            "phone": "1-995-607-8527",
            "birthdate": "01/12/2016"
        },
        {
            "firstname": "Bianca",
            "lastname": "Lancaster",
            "phone": "1-815-596-1200",
            "birthdate": "10/21/2015"
        },
        {
            "firstname": "Idona",
            "lastname": "Juarez",
            "phone": "1-915-218-6611",
            "birthdate": "11/21/2015"
        },
        {
            "firstname": "Leah",
            "lastname": "Richmond",
            "phone": "1-692-889-6018",
            "birthdate": "10/08/2015"
        },
        {
            "firstname": "Idona",
            "lastname": "Juarez",
            "phone": "1-915-218-6611",
            "birthdate": "11/21/2015"
        },
	{
	    "firstname": "Leah",
	    "lastname": "Richmond",
	    "phone": "1-692-889-6018",
	    "birthdate": "10/08/2015"
	},
	{
	    "firstname": "Stephanie",
	    "lastname": "Crawford",
	    "phone": "1-148-690-6324",
	    "birthdate": "04/28/2015"
	},
	{
	    "firstname": "Imelda",
	    "lastname": "Dyer",
	    "phone": "1-604-121-1495",
	    "birthdate": "06/21/2015"
	}]
    }




        $(data.employees).each(function () {
            var output = "<tr><td>" + this.firstname + "</td><td> " + this.lastname + "</td><td>"+ this.phone +"</td><td>" + this.birthdate +"</td></tr>" ;
            $('#myemp_table').append(output);

        });

        $("#search").click(function () {
            
            $("#output").empty();
            $(data.employees).each(function () {
                if (this.firstname == $("#searchString").val()) {
                    var output = "<ul><li>" + this.firstname + "</li><li> " + this.lastname + "</li><li>" + this.phone + "</li><li>" + this.birthdate + "</li></li>";
                    $('#output').append(output);
                }

            });
        });

});