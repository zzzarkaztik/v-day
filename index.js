$(document).ready(function () {
  $(".valentines")
    .mouseenter(function () {
      $(this).find(".card").stop().animate({ top: "-90px" }, "slow");
    })
    .mouseleave(function () {
      $(this).find(".card").stop().animate({ top: 0 }, "slow");
    })
    .click(function () {
      $(".letter").fadeIn(); // Fade in the letter
      $(".overlay").fadeIn(); // Fade in the overlay
    });

  // When the overlay is clicked:
  $(".overlay").click(function () {
    $(".letter").fadeOut(); // Fade out the letter
    $(".overlay").fadeOut(); // Fade out the overlay
  });
});
