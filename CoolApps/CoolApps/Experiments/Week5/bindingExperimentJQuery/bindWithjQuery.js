$(document).ready(function () {

    // This is the function which gets binded to the id #myimage when clicked on bind button 
    function clickeffect() {
        $("#myimage").fadeOut(1000).fadeIn(1000);
    }


    $("#bind").click(function () {

        $("body").on("click", "#myimage", clickeffect)

    });

    $("#unbind").click(function () {

        $("body").off("click", "#myimage", clickeffect)

    });
});