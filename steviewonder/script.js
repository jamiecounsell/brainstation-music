$(document).ready(function () {
    $("button").click(function () {
        $('#msg').after($("#comment").val());
    });

    $(".album-image").hover(
        function () {
            $(this).animate({ top: "-10" });
            $(this).css({ opacity: 0.5 });
        },
        function () {
            $(this).animate({ top: "0" });
            $(this).css({ opacity: 1 });
        }
    );

    $("button").css("background-color", "rgb(61, 66, 66)");

    $(".header h1").fadeIn(3000).removeClass('hidden');

    $(".container-fluid a[href^='http://']").attr("target", "_blank");

    $(".content a[href^='https://']").attr("target", "_blank");

    $(".content a[href^='http://']").attr("target", "_blank");
});