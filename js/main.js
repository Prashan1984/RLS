jQuery(document).ready(function($) {
    // Mobile Menu Toggle
    var $mobileMenuWrapper = $('<div class="mobile-menu-wrapper"></div>');
    var $mobileMenu = $('.main-menu').clone().removeClass('hidden-xs').addClass('mobile-menu');
    
    // Add the mobile menu to the page
    $mobileMenuWrapper.append($mobileMenu);
    $('body').append($mobileMenuWrapper);
    
    // Toggle mobile menu
    $('#mobile_menu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('mobile-menu-open');
    });
    
    // Close menu when clicking outside
    $('.mobile-menu-wrapper').on('click', function(e) {
        if ($(e.target).closest('.mobile-menu').length === 0) {
            $('body').removeClass('mobile-menu-open');
        }
    });
    
    // Close menu when clicking a menu item
    $('.mobile-menu a').on('click', function() {
        $('body').removeClass('mobile-menu-open');
    });
});
