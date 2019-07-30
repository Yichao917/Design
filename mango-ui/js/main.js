$(function(){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
        $(".navbar").removeClass("sticky");
        }else{
        $(".navbar").addClass("sticky");
        }
    });
    
    
    
    //===== Mobile Icon active
    
    $('.navbar-toggler').on('click', function(event) {
        $(this).toggleClass("active");
    });
    
    
    
    //===== Scroll It active
    
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 1300,      // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -70,        // offste (in px) for fixed top navigation
    });
    
    
    
    
    //===== SLIDER PART
    
    $('.slider_part').slick({
        autoplay:true,
        autoplaySpeed:6000,
        dots:true,
        arrows:false,
        fade:true,
        pauseOnHover:false,
    });
    
    
    
    
    //====== Magnific Popup
    
    $('.Video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //====== Team Slide Slick

    $('.team_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow:'<i class="fas fa-angle-left"></i>',
        nextArrow:'<i class="fas fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //====== Client Slide Slick

    $('.client-slied').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow:'<i class="fas fa-angle-left"></i>',
        nextArrow:'<i class="fas fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //====== Brand Slied Slick

    $('.brand_slied').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Images Loaded
    
    $('.container').imagesLoaded( function() {
        //===== Isotope
        var $grid = $('.grid').isotope({
          // options
        });
        // filter items on button click
        $('.project_menu ul').on( 'click', 'li', function(event) {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project_menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    
    //===== Project Popup

    $('.project-popup').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });
    
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    
});