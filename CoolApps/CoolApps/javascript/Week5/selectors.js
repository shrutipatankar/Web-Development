$(document).ready(function () {

    $("#hideall").click(function () {
        $(".elements > *").fadeOut();
    });

    $("#showall").click(function () {
        $(".elements > *").show();
    });

    $("#hideme").click(function () {
        $(this).hide();
    });

    $("#appendParaGraph").click(function () {
        $(".elements > p").append("This is appended text! ");
    });

    $("#hideHref").click(function () {
        $(".elements > [href]").fadeOut();
    });

    $("#changeOddChildren").click(function () {
        $(".elements tr:odd").css("background-color", "#FFCC99");
    });

    $("#changeEvenChildren").click(function () {
        $(".elements tr:even").css("background-color", "#997A5C");
    });

});