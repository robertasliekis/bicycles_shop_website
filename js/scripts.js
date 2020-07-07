if (window.innerWidth <= 1024) {
  $(".overlay-menu").height(window.innerHeight);
}

window.addEventListener("resize", () => {
  $(".overlay-menu").height(window.innerHeight);
});

$(document).ready(function () {
  setTimeout(function () {
    $(this).scrollTop(0);
  }, 50);
});

//Sticky nav bar start
var navBar = document.getElementById("navbar");
$(window).scroll(function () {
  if (!navBar.classList.contains("background-transparent")) {
    if ($(window).scrollTop() > 1) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  }
});
//Sticky nav bar end

//Burger menu control start
const burgerMenu = document.querySelector(".burger-menu");
var scrollTop1 = 0;
var scrollTop2 = 0;

burgerMenu.addEventListener("click", function () {
  var scrollTop1 = $(window).scrollTop();
  if ($(burgerMenu).hasClass("burger-active")) {
    $(burgerMenu).removeClass("burger-menu-animation burger-active");
    $(".menu-item").addClass("animation-reverse");
    $(".overlay-menu").addClass("overlay-menu-invisible").removeClass("overlay-menu-visible");
    $(".overlay-menu-footer").removeClass("visible");
    setTimeout(function () {
      if ($(window).scrollTop() < 1) {
        $(".navbar").removeClass("navbar-scrolled");
      }
      $(".navbar").removeClass("background-transparent");
    }, 1000);
    $(".website-wrapper").removeClass("scroll-disabled");
    document.getElementById("empty-section").style.marginTop = "0px";
    window.scrollTo(0, scrollTop2);
  } else {
    $(burgerMenu).addClass("burger-menu-animation burger-active");
    $(".menu-item").removeClass("animation-reverse").addClass("menu-item-display");
    $(".overlay-menu").removeClass("overlay-menu-invisible keyframes-reverse").addClass("overlay-menu-visible keyframes-forward");
    $(".overlay-menu-footer").addClass("visible");
    $(".navbar").addClass("navbar-scrolled background-transparent");
    window.setTimeout(function () {
      document.getElementById("empty-section").style.marginTop = `${-scrollTop1}px`;
      $(".website-wrapper").addClass("scroll-disabled");
    }, 1000);
  }
  scrollTop2 = scrollTop1;
});
//Burger menu control end
