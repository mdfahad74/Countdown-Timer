
var audio = new Audio('clock1.mp3');

$(".submit").on("click", function() {
  audio.play();
  hello();
});
$(".button").on("click", function(){
  $("#form").addClass("formno");
  $("#output").removeClass("formno");
});

function hello() {
  var monthAll = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var message = document.getElementById("message").value;
  var dayPick = document.getElementById("day").value;
  var monthPick = document.getElementById("month").value;
  var yearPick = document.getElementById("year").value;
  var hourPick = document.getElementById("hours").value;
  var minutesPick = document.getElementById("minutes").value;
  var secondsPick = document.getElementById("seconds").value;
  var finalDate = monthAll[monthPick - 1] + " " + dayPick + ", " + yearPick + " " + hourPick + ":" + minutesPick + ":" + secondsPick;
  var countDownDate = new Date(finalDate).getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".timer").html(days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ");
    if (distance < 0) {
      clearInterval(x);
      $(".timer").html(message);
    }
  }, 1000);
}
