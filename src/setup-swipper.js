var swiper = new Swiper(".mySwiper", {
    //slidesPerView: 5,
    //spaceBetween: 30,
    //pagination: {
    //    el: ".swiper-pagination",
    //clickable: true,
    //},
    lazyPreloaderClass: "swiper-lazy-preloader",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 24,
            navigation: {
                enabled: false,
            }
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
            spaceBetween: 24,
            navigation: {
                enabled: false,
            }
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
                enabled: true,
            }
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                enabled: true,
            }
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
            navigation: {
                enabled: true,
            }
        }
    }
});

// I will place this here, to hidde the left navigration button at the beginning
swiper.navigation.$prevEl.css('display', 'none');

// Show/hide navigation buttons on slide change
swiper.on('slideChange', function () {
    if (swiper.isEnd) {
        swiper.navigation.$nextEl.css('display', 'none');
    } else {
        swiper.navigation.$nextEl.css('display', 'block');
    }
    if (swiper.isBeginning) {
        swiper.navigation.$prevEl.css('display', 'none');
    } else {
        swiper.navigation.$prevEl.css('display', 'block');
    }
});