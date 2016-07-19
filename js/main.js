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

} );

