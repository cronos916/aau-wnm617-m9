$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$( function() {
  $( ".dismiss" ).on( "click", function() {
    $( ".warning" ).addClass( "hidden", 10);
  });

  $( ".light" ).on( "click", function(){
    $( "#content" ).addClass( "lightmode" );
    $( "#content" ).removeClass( "darkmode" );
    $( "#content" ).removeClass( "sepiamode" );
  });

  $( ".dark" ).on( "click", function(){
    $( "#content" ).addClass( "darkmode" );
    $( "#content" ).removeClass( "lightmode" );
    $( "#content" ).removeClass( "sepiamode" );
  });

  $( ".sepia" ).on( "click", function(){
    $( "#content" ).addClass( "sepiamode" );
    $( "#content" ).removeClass( "lightmode" );
    $( "#content" ).removeClass( "darkmode" );
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


} );

