$(document).ready(function () {

    $("#animate").click(function () {

        $("#summer").animate({
            top: '250px',
            height: '+=150px',
            width: '+=150px',  

        }).animate({
            top: '0px',
            height: '-=150px',
            width: '-=150px',

        }, function () {

            $("#winter").animate({
                top: '250px',
                height: '+=150px',
                width: '+=150px',

            }).animate({
                top: '0px',
                height: '-=150px',
                width: '-=150px',

            }, function () {

                $("#autumn").animate({
                    top: '250px',
                    height: '+=150px',
                    width: '+=150px',

                }).animate({
                    top: '0px',
                    height: '-=150px',
                    width: '-=150px',

                }, function () {


                    $("#spring").animate({
                        top: '250px',
                        height: '+=150px',
                        width: '+=150px',

                    }).animate({
                        top: '0px',
                        height: '-=150px',
                        width: '-=150px',

                    }, function () {

                        $("#monsoon").animate({
                            top: '250px',
                            height: '+=150px',
                            width: '+=150px',

                        }).animate({
                            top: '0px',
                            height: '-=150px',
                            width: '-=150px',

                        });
                    });

                });


            });


        });
            

    });


});