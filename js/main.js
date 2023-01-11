var start = true;
var time = 30;

$('a.showtimer').click(function() {
  $('div.timeShow').slideToggle("slow")
  $("#buttonstart").text("START");
  clearInterval(timer);
  $("#time").text("00:00")
  start = true;
});

$("#button1").click(function() {
  if($(this).hasClass("starting")) {
    clearInterval(timer);
    time = 30;
    start = true;
  }
  
  if(start) {
    $("#button1").addClass("starting")
    time = 30;
    start = false;
  
  timer = setInterval(function() {

    if(time == 0) {
      clearInterval(timer);
      start = true;
    }

    if(time < 10) {
      time = "0" + time;
    }

    $("#time").html("00:"+time);
    time--;
  }, 1000);
}
});

$("#buttonstart").click(function() {
  if($(this).hasClass("starting")) {
    clearInterval(timer);
    $("#buttonstart").text("START");
    $("#buttonstart").removeClass("starting");
    $("#time").text("00:00")
    start = true;
  }
  else if(start) {
    time = 0;
    $("#buttonstart").text("RESET");
    $("#buttonstart").addClass("starting");

    start = false;
  
  timer = setInterval(function() {

    if(time == 30) {
      clearInterval(timer);
      $("#buttonstart").text("START");
      $("#buttonstart").css("width", "80px")
      start = true;
    }

    if(time < 10) {
      time = "0" + time;
    }

    $("#time").html("00:"+time);
    time++;
  }, 1000);
}
});

$(".showset").click(function() {
  $(".sets").slideToggle();
});

$("li.set").on("click", function(event) {
  if($(this).hasClass("on")) {
    $(this).removeClass("on")
  }
  else {
    $(this).addClass("on");
  }
})
