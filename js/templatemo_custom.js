jQuery(document).ready(function($) {
    "use strict";

    // Mobile menu toggle
    $("#mobile_menu").on("click", function(e) {
        e.preventDefault();
        $("#responsive-menu").fadeToggle(200);
    });

    // Close menu when clicking menu items
    $("#responsive-menu a").on("click", function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("#responsive-menu").fadeOut(200);
        
        setTimeout(function() {
            var offsetTop = href === "#" ? 0 : $(href).offset().top;
            $('html, body').animate({ 
                scrollTop: offsetTop
            }, 300);
        }, 200);
    });

    // Close menu when clicking outside
    $("#responsive-menu").on("click", function(e) {
        if ($(e.target).is("#responsive-menu")) {
            $(this).fadeOut(200);
        }
    });

    // Prevent menu from closing when clicking menu items
    $("#responsive-menu .menu-holder").on("click", function(e) {
        e.stopPropagation();
    });

    // Bind click handler to menu items
    $(".menu-holder a").click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop();
       
       // Get id of current scroll item
       var cur = $(".menu-holder a").map(function(){
         if ($($(this).attr("href")).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           $(".menu-holder a")
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });

    $(window).scroll(function(){
         $('.site-header').toggleClass('scrolled', $(this).scrollTop() > 1);
    });

});