$(function () {
    $('.ban-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover :false,
      });
    $('.about-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover :false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
        ]
      });
    $('.comment-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".left",
        nextArrow: ".right",
        pauseOnHover :false,
      });
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover :false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
        ]
      });
      $('.counting').counterUp({
        delay: 10,
        time: 2500
    });

    $(window).scroll(function(){
      var nav = $(this).scrollTop()
      if(nav > 300){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(nav > 300){
        $(".back-to-top").fadeIn(400)
      }
      else{
        $(".back-to-top").fadeOut(400)
      }
    })

    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })

    new VenoBox({
      selector: '.my-video-links',
      selector: '.my-image-links',
  });

  //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 50;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
    
})