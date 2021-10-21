$(document).ready(function(){
        $('.nav-pills .nav-link').on('shown.bs.tab', function(e) {
          var href = $(this).attr('href');
          var top_of_href = $(href).offset().top;
          var top_of_screen = $(window).scrollTop();
          if (top_of_screen > top_of_href) {
            $('html, body').animate({
            scrollTop: top_of_href - 150
          }, 80);
          }
        });

    });