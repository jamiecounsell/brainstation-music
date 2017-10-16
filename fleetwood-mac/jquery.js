$(function(){
    $(".add").click(function() {
         var input = $('.comment-box').val();
         $('.comments').append('<li>' + input + '</li>').css({
             "margin-left":"10%",
             "margin-right":"10%",
             "margin-bottom":"2%"});
    });
    $("#main_pic").hover(function(){
        $(this).css("width","97vw");
        }, function(){
        $(this).css("width","90vw");
    });

    $(".events").hover(function(){
        $(this).css("font-size","6em");
    },function(){
        $(this).css("font-size","5em");
    });
});