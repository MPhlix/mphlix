export function carousel() {
    $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
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
    $('.carousel-testimony').owlCarousel({
        autoplay: true,
        autoHeight: true,
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
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
    $('.carousel-team').owlCarousel({
        autoplay: true,
        autoHeight: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true, // default : true
        loop: true, // default false : loop slides through all items and ends when last item is shown, true shows items continuously.
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
};