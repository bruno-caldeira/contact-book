$( document ).ready(function() {

  //control dropdown
  $(".dropdown-select").click( function() {
      // show/hide All Options
      $(this).children(".dropdown-items").toggle();
      $(".dropdown-init").toggleClass("is-open");
  });

  $(".dropdown-select").on("click", "li:not(.dropdown-init)", function() {
      $(".dropdown-select").children(".dropdown-init").html($(this).html());
      
      //check which dropdown item is selected
      $(this).siblings().removeClass("selected");
      $(this).addClass("selected");
  });

  // change content pressing button (show phone or email columns)
  $("#btn-phone").click( function() {
    $(".contact-item").removeClass("item-active");
    $(".contact-phone").addClass("item-active");

  });
  $("#btn-email").click( function() {
    $(".contact-item").removeClass("item-active");
    $(".contact-email").addClass("item-active");
  });

  // show all info control
  $(".contact-row").click( function() {
    $(this).toggleClass("selected");
    $(this).siblings().removeClass("selected");
    $(".overlay").toggleClass("active");
  })
  $(".overlay").click( function() {
    $(".contact-row").removeClass("selected");
    $(".overlay").toggleClass("active");
  })
  
});


