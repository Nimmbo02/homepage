$(document).ready(function(){
    // Initialize the first carousel
    $("#title-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: true, 
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1 
            }
        }
    });

    // Initialize the second carousel
    $("#ticker-carousel").owlCarousel({
        loop: true, 
        margin: 10, 
        nav: true, 
        rtl: true, 
        autoplay: true, 
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        smartSpeed: 800,
        autoplaySpeed: 1000, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },            
            1300: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });
});
