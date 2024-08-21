
$(document).ready(function(){
    // Initialize the first carousel
    $("#carousel1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Initialize the second carousel
    $("#carousel2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 2
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
