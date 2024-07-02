/// <reference types="../@types/jquery"/>

$(".openIcon").on("click", function () {
  $("#sideNav").animate({ width: "250px" }, 100);
  $(".home-text").animate({ marginLeft: "250px" }, 100);
});

$("#exitMark").on("click", function () {
  $("#sideNav").animate({ width: "0px" }, 500);
  $(".home-text").animate({ marginLeft: "0px" }, 500);
});
