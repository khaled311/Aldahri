$(function() {
  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this)
      .find(".dropDown")
      .slideToggle();
    $(this)
      .siblings()
      .find(".dropDown")
      .slideUp();
    $(this)
      .find("i")
      .toggleClass("open");
    $(this)
      .siblings()
      .find("i")
      .removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(this).fadeOut();
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".menuTriger").fadeIn();
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
    }
  });

  // Main Slider
  $(".main-slider .owl-carousel").owlCarousel({
    autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  // products Slider
  $(".products .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 7,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function() {
    $(this).toggleClass("trans");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".collapse")
      .collapse("hide");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find("button")
      .removeClass("trans");
  });

  // Header DropDown
  $("header .btn-group").hover(
    function() {
      $(this).addClass("open");
    },
    function() {
      $(this).removeClass("open");
    }
  );

  // Search
  $("header .searchTriger").on("click", function() {
    $("header .search").addClass("open");
    $(".navover").addClass("open1");
    $("html").css("overflow-y", "hidden");
  });

  $("header .search, header .search > span, .navover").on("click", function() {
    $("header .search").removeClass("open");
    $(".navover").removeClass("open1");
    $("html").css("overflow-y", "auto");
  });

  $("header .search input, header .search button").on("click", function(e) {
    e.stopPropagation();
  });
});
