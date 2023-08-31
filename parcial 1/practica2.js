$(document).ready(function  () {
    $("#boton1").click(function (){
        alert("evento click boton 1")
    });

    $("#div1").on("dblclick", function (){
        alert("Evento doble click")
    });

    $("#input1").focus(function (e) {
        console.log("metodo focus al dar clic en input")
    });

    $("#texto1").hover(function () {
        $("#texto1").css("background-color", "red");
    }, function (){
        $("#texto1").css("background-color", "white");
    });


});