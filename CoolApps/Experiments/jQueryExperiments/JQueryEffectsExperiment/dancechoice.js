$(document).ready(function () {

    /* Fade Out effect */
    $(".ballet").mousedown(function () {
        $(".ballet").fadeOut('slow');

    });

    /* Toggle Effect */
    $(".bharatnatyam").mousedown(function () {
        $(".bharatnatyam").toggle('slow');

    });

    /* Slide Up effect */
    $(".hiphop").mousedown(function () {

        $(".hiphop").slideUp('slow');

    });

    /*This is to study the chaining effects that jquery can have*/
    $(".salsa").mousedown(function () {


        $(".salsa").slideUp('slow').slideDown('slow').slideUp('slow');



    });

    /*This is to study the chaining effects that jquery can have*/
    $(".flamenco").mousedown(function () {
        $(".flamenco").fadeOut('slow').fadeIn('slow').fadeOut('slow');

    });

});
