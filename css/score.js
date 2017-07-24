let score = 0;
$("#score").html(score);
$(".answer").click(function(){
  if ($(this).hasClass("correct") == true) {
    $(this).css("background-color", "Green");
    score++;
    $("#score").html(score);
  } else {
    $(this).css("background-color", "Red");
    score--;
    $("#score").html(score);
  }
});

function reset() {
  score = 0
  $("#score").html(score);
  $(".answer").css("background-color", "#fff");
}
