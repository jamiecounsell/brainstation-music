$(document).ready(function () {
    $('#comment-submit').click(submitComment);
    $('.imgHover').hover(imageHover);

    $('.banner').hover(
        function () {
            $(this).css('background-color', 'red')
            $(this).css('border-color', 'red')
        }, function () {
            $(this).css('background-color', '')
            $(this).css('border-color', '')
        });

    $('#noelle').click(function () {
        $('#noelle').animate({ opacity: 0.0 }, 750, function () {
            $('#noelle').animate({ opacity: 1.0 }, 750)
        })
    });

    function submitComment() {
        $('#comments').append('<div class="comment">' + $('#userinput').val() + '</div>');
        $('#userinput').val('').focus();
    }

    function imageHover() {
        $('.imgHover').attr("src", "images/thehip2.jpg");
    }


});
