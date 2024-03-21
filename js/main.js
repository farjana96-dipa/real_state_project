// SCROLLUP BUTTON 

const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300){
    scrollUp.classList.add('active');
  }
  else{
    scrollUp.classList.remove('active');
  }
});

// TESTIMONIAL CAROUSEL

$(document).ready(function(){
$('.slider2 .owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });
});


$(document).ready(function(){
$('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:3,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1500,
          responsiveClass:true,
            responsiveRefreshRate:true,
            responsive:{
              0:{
                items:1
              },
              576:{
                items:1
              },
              768:{
                items:2
              },
              876:{
                items:2
              },
              1000:{
                items:3
              },
              1200:{
                items:4
              },
              1920:{
                items:4
              },
            }
    });
});


// wow 
new WOW().init();


// HUMBERGER MENU
function openMenu(){
  document.getElementById('navbar1').style.height = "100%";
}
function closeMenu(){
  document.getElementById('navbar1').style.height = "0%";
}

// SEARCH MENU DESIGN

function saveMenu(){
  document.getElementById('search-menu1').style.height = "100%";
}
function deleteMenu(){
  document.getElementById('search-menu1').style.height = "0%";
} 

// PROPERTY MIXITUP
var mixer = mixitup('.property-filter');

