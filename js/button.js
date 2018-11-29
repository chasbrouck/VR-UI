function buttonPress(item) {

  var id = $(item).attr("id");

  //make whatever socket call we need to
  console.log(id);

  //temporary button styling
  $(item).addClass("active");
  setTimeout(
    function() {
      $(item).removeClass("active");
    }, 500);
}