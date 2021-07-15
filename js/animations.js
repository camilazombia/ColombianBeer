
$(".svg-beer__01").on( "mouseover", function() {
    $(".svg-beer__01").css({ 
        "fill": "red", 
        "stroke": "#231F20", 
        "stroke-miterlimit": "10",})
  });

  $(".svg-beer__01").on( "mouseout", function() {
    $(".svg-beer__01").css({ 
        "fill": "#FA88C3", 
        "stroke": "#231F20", 
        "stroke-miterlimit": "10",})
  });



$(".sello").animate({   width:'300px'   },
                        "slow",)
        .slideUp(4000)
        .delay(2000)
        .slideDown(2000);
        

