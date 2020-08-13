
$(function () {

    /* =========================================
        COUNTDOWN 1
     ========================================= */
     $('#clock').countdown('2020/8/15').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="box2"><p><span style="color: white;">%D <br></span> Days</p></div><br>'
          + '<div class="box2"><p><span style="color: white;">%H <br></span> Hours</p></div><br>'
          + '<div class="box2"><p><span style="color: white;">%M <br></span> Minutes</p></div><br>'
          + '<div class="box2"><p><span style="color: white;">%S <br></span> Secondes</p></div><br>'
         ));
      });

 


});
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});
