// Whole Script Strict Mode Syntax

//preloader
window.onload = function () {
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
};

function stickyMenu() {
  var sticky = document.getElementById("sticky");
  if (window.pageYOffset > 300) {
    sticky.classList.add("stickyStyle");
  } else {
    sticky.classList.remove("stickyStyle");
  }
}
window.onscroll = function () {
  stickyMenu();
};

$(".sliderInstructors").owlCarousel({
  loop: true,
  margin: 20,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(".slideTestimonial").owlCarousel({
  loop: true,
  margin: 20,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".sliderCompanies").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  autoplay: true,
  nav: false,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

const toTop = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
