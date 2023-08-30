$(document).ready(function () {
    //alert("funciona jquery");
    $("#boton1").on("click", function(){
       $("#texto1").html("LUIS")
    });

    $("#texto1").hover(function  (){
        $(this).css("background-color", "red");
        $(this).css("fomt-size", "50px");
    }, function  (){
        $(this).css("background-color", "white");
        $(this).css("fomt-size", "20px");
    }
    );
});

