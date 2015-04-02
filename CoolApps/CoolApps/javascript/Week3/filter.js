$(document).ready(function () {

    $("#classical_button").click(function () {
        $(".text_content").html(
        $("div").filter(".classical").html());
    });

    $("#latin_button").click(function () {
        $(".text_content").html(
        $("div").filter(".latin").html());
    });

    $("#italian_button").click(function () {
        $(".text_content").html(
        $("div").filter(".italian").html());
    });

    $("#greek_button").click(function () {
        $(".text_content").html(
        $("div").filter(".greek").html());
    });

    $("#modern_button").click(function () {
        $(".text_content").html(
        $("div").filter(".modern").html());
    });





});