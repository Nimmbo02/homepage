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
                items: 1 // Show 1 item on small screens
            },
            600: {
                items: 1 // Show 1 item on medium screens
            },
            1000: {
                items: 1 // Show 1 item on large screens
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
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
