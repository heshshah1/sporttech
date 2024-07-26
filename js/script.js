$(document).ready(function(){

    $(".ham-burger, .nav ul li a").click(function(){
     
      $(".nav").toggleClass("open")

      $(".ham-burger").toggleClass("active");
    })      
    $(".accordian-container").click(function(){
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })

     $(".nav ul li a, .go-down").click(function(event){
       if(this.hash !== ""){

            event.preventDefault();

            var hash=this.hash; 

            $('html,body').animate({
              scrollTop:$(hash).offset().top
            },800 , function(){
               window.location.hash=hash;
            });

            // add active class in navigation
            $(".nav ul li a").removeClass("active")
            $(this).addClass("active")
       }
    })
})


/*-------text animation---*/
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach((elem, index) => {
  // Create a wrapper element for the text
  const wrapper = document.createElement('div');
  wrapper.className = 'swift-up-wrapper';
  wrapper.textContent = elem.textContent;

  // Replace the content of the original element with the wrapper
  elem.innerHTML = '';
  elem.appendChild(wrapper);

  // Set the animation delay
  wrapper.style.animationDelay = `${index * 0.2}s`;
});
/*-------scroll animation---*/
wow = new WOW(
    {
      animateClass: 'animated',
      offset:       0,
    }
  );
  wow.init();
  /*-------scroll animation---*/

  /*--------------product page*----------*/
  // scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailSlider = document.getElementById('thumbnailSlider');
    const prevButton = document.getElementById('prevThumbnail');
    const nextButton = document.getElementById('nextThumbnail');
    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.getAttribute('data-large-src');
            currentIndex = index;
        });
    });

    const updateSliderPosition = () => {
        const thumbnailWidth = thumbnails[0].offsetHeight + 10;
        thumbnailSlider.style.transform = `translateY(-${currentIndex * thumbnailWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < thumbnails.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    updateSliderPosition(); // Initialize slider position

    // Optional: Add to Cart Form submission handling
    const addToCartForm = document.getElementById('addToCartForm');
    const quantityInput = document.getElementById('quantity');
    const addToCartButton = document.getElementById('addToCartButton');

    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault();
        const quantity = quantityInput.value;
        if (quantity > 0) {
            alert(`Added ${quantity} item(s) to your cart!`);
            // Handle the form submission or cart update here
        } else {
            alert('Please select a quantity.');
        }
    });
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  centerMode: true,
  asNavFor: '.slider-nav',
  prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
  nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true, // Enable vertical mode
  verticalSwiping: true // Enable vertical swiping
});

$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: false,
  fade: true,
  dots: false,
});

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

