$(document).ready(function () {

  $("#submit").click(function () {
    event.preventDefault();
    var value = $("#comment").val();
    $("#fancomments").append('<p>' + value + '</p>');
  });

  $("#bandname").hover(function () {
    $(this).animate({
      height: "toggle"
    }, 500);
  });

  $("#fade").click(function () {
    if ($("#about").is(":visible")) {
      $("#about").fadeOut(500);
    } else {
      $("#about").fadeIn(500);
    }
  });

  $("#square").click(function () {
    $("#square").addClass("spin");
  });

  $("#author-img").click(function () {
    if ($(this).hasClass("col-sm-6")) {
      $("#author-img").removeClass("col-sm-6");
      $("#author-img").addClass("col-sm-12");
      $("#author-text").hide("fast")
    } else {
      $("#author-img").removeClass("col-sm-12");
      $("#author-img").addClass("col-sm-6");
      $("#author-text").show("fast")
    }
  });
});