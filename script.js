$(function(){
    $("header").height($(window).height());
    $("#toggler-button").on("click", function(){
        $(".btn1 i").toggleClass("fa-bars fa-window-close");
    });
});
$("header").height($(window).height());
$(function(){
    $("#pages-button").on("click", function(){
        $(".btn2 i").toggleClass("fa-plus-square fa-window-close");
    });
});




