$(document).ready(function () {

    
    $("#summer").click(function () {

        $("#summerp").show();
        $("#winterp").hide();
        $("#autumnp").hide();
        $("#springp").hide();
        $("#monsoonp").hide();
        $("#season").removeClass("winter_season autumn_season monsoon_season spring_season").addClass("summer_season");
    });


    $("#winter").click(function () {

        $("#summerp").hide();
        $("#winterp").show();
        $("#autumnp").hide();
        $("#springp").hide();
        $("#monsoonp").hide();
        $("#season").removeClass("summer_season autumn_season monsoon_season spring_season").addClass("winter_season");
    });

    $("#monsoon").click(function () {

        $("#summerp").hide();
        $("#winterp").hide();
        $("#autumnp").hide();
        $("#springp").hide();
        $("#monsoonp").show();

        $("#season").removeClass("summer_season winter_season spring_season autumn_season").addClass("monsoon_season");
    });

    $("#spring").click(function () {

        $("#summerp").hide();
        $("#winterp").hide();
        $("#autumnp").hide();
        $("#springp").show();
        $("#monsoonp").hide();
        $("#season").removeClass("summer_season winter_season monsoon_season autumn_season").addClass("spring_season");
    });

    $("#autumn").click(function () {

        $("#summerp").hide();
        $("#winterp").hide();
        $("#autumnp").show();
        $("#springp").hide();
        $("#monsoonp").hide();
        $("#season").removeClass("summer_season winter_season monsoon_season spring_season").addClass("autumn_season");
    });

});