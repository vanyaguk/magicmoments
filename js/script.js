
 (function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.remove('hidden');
        element.classList.add('hidden2');

      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidd');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.remove('hidd');
        element.classList.add('hidd2');

      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
  loop: true,
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 1
    }
  }

});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdl4me8nYPAqD68AjzscA6Fl0eLsBnIUXGfhh0pt_kove807g/formResponse',
        type: 'post',
        data:$('form').serialize(),
        complete: function(){
          $('#formbut').hide();
          $('#formdone').show();
                return false;
        }
    });
    return false;
});



// Tut animnashki

$('#banner').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;

  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.222;


  $(this).css({
    transform: 'translate3d('+ deltaX * 0.15 +'px, '+ deltaY * 0.15 +'px, 0px)'
  });
});


$('#banner').on('mouseleave', function(e) {
  const bounds = this.getBoundingClientRect();


  $(this).css({
    transform: 'translate3d(0px, 0px, 0px)'
  });

  });
$('#submenu').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;

  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.222;


  $(this).css({
    transform: 'translate3d('+ deltaX * -0.05 +'px, '+ deltaY * 1.5 +'px, 0px)'
  });
});


$('#submenu').on('mouseleave', function(e) {
  const bounds = this.getBoundingClientRect();


  $(this).css({
    transform: 'translate3d(0px, 0px, 0px)'
  });

  });

  $('.hidden2').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;

  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.222;


  $(this).css({
    transform: 'translate3d('+ deltaX * 0.2 +'px, '+ deltaY * 1 +'px, 0px)'
  });
});


$('.hidden2').on('mouseleave', function(e) {
  const bounds = this.getBoundingClientRect();


  $(this).css({
    transform: 'translate3d(0px, 0px, 0px)'
  });

  });

$('.card').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;

  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.222;


  $(this).css({
    transform: 'translate3d('+ deltaX * 0.2 +'px, '+ deltaY * 0.2 +'px, 0px)'
  });
});


$('.card').on('mouseleave', function(e) {
  const bounds = this.getBoundingClientRect();


  $(this).css({
    transform: 'translate3d(0px, 0px, 0px)'
  });

  });

$('.cityname').on('mousemove', function(e) {
  const bounds = this.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height;

  const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
  const deltaY = Math.floor((centerY - e.clientY)) * 0.333;


  $(this).css({
    transform: 'translate3d('+ deltaX * -0.5 +'px, '+ deltaY * -0.5 +'px, 0px)'
  });
});


$('.cityname').on('mouseleave', function(e) {
  const bounds = this.getBoundingClientRect();


  $(this).css({
    transform: 'translate3d(0px, 0px, 0px)'
  });

  });

$(document).keydown(function(event) {
   if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
      event.preventDefault();
   }
   // 107 Num Key  +
   // 109 Num Key  -
   // 173 Min Key  hyphen/underscore key
   // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function(event) {
   if (event.ctrlKey == true) {
      event.preventDefault();
   }
});
