$(function(){
    $("header").height($(window).height());
    $("#toggler-button").click(function(){
        $(".nav-item").addClass("toggle-background");
    });
});

$("#toggler-button").on("click", function(){
    $("button i").toggleClass("fa-bars fa-window-close");
});
