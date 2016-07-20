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

  $( "#dialog" ).dialog({
    autoOpen: false,
    width: 'auto',
    maxWidth: 600,
    height: 'auto',
    modal: true,
    fluid: true, //new option
    resizable: false,
    draggable: false,
    dialogClass: "alert"
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });

  $( "#dialog i" ).on( "click", function() {
    $( "#dialog" ).dialog( "close" );
  });

  // catch dialog if opened within a viewport smaller than the dialog width
  $(document).on("dialogopen", ".ui-dialog", function (event, ui) {
    fluidDialog();
  });

  // This should make the dialog box responsive.
  function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function () {
      var $this = $(this);
      var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
      // if fluid option == true
      if (dialog.options.fluid) {
        var wWidth = $(window).width();
        // check window width against dialog width
        if (wWidth < (parseInt(dialog.options.maxWidth) + 50))  {
          // keep dialog from filling entire screen
          $this.css("max-width", "90%");
        } else {
          // fix maxWidth bug
          $this.css("max-width", dialog.options.maxWidth + "px");
        }
        //reposition dialog
        dialog.option("position", dialog.options.position);
      }
    });
  }
} );

