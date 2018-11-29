function buttonPressTemporaryStyle(id) {
  var button = $("#" + id);
  $(button).addClass("active");
  setTimeout(
    function() {
      $(button).removeClass("active");
    }, 500);
}

function updateButtonColor(id, color) {
  var button = $("#" + id);
  $(button).children().css({
    "background-color": color
  });
}