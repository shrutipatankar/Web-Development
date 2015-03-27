$(document).ready(function () {

    $("#next").click(function () {

        window.location.href = 'nextPage.html';
        //alert("I am here");
    });


    function disableBack() { window.history.forward() }

    window.onload = disableBack();
    window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
});