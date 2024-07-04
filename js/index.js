/// <reference types="../@types/jquery"/>

$(".openIcon").on("click", function () {
  $("#sideNav").animate({ width: "250px" }, 100);
  $(".home-text").animate({ marginLeft: "250px" }, 100);
});

$("#exitMark").on("click", function () {
  $("#sideNav").animate({ width: "0px" }, 500);
  $(".home-text").animate({ marginLeft: "0px" }, 500);
});

$(".text").on("click", function (e) {
  $(".pragraph").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days").html(`${days}`, "d");
  $("#time").html(hours, "H");
  $("#hours").html(minutes, "M");
  $("#seconds").html(seconds, "S");
}, 1000);
x();
