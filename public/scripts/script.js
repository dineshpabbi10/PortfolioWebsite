
$(function(){
    $('#left-sidebar-toggle').on("click",function(){
        $('.menu.sidebar').sidebar("toggle");
        
    })});

$(function(){
    window.load = function(){
        $(".content h1").transition("pulse");
    }
});

$(function(){
    $("#a1").on("click",function(e){
        var element = $("#about");
        element.scrollIntoView({behavious:"smooth"});
    })
});

$(function(){
    $(".placeholer").on("click",function(e){
        e.preventDefault();
    })
})


$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/10;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    });
});

//windows10
  

// Slider
$(document).ready(function(){
      $('.demo').slick({
        infinite: false,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" style="color:#072a4d" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" style="color:#072a4d" data-role="none" class="slick-next">Next</button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
      });
    });