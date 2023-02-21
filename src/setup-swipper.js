/**
 * 
 */
function mainSwiperCreate(id = 0) {
    let swiper = new Swiper(`.mySwiper${id}`, {
        lazyPreloaderClass: `swiper${id}-lazy-preloader`,
        navigation: {
            nextEl: `.swiper${id}-button-next`,
            prevEl: `.swiper${id}-button-prev`,
        },
        freeMode: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 12,
                navigation: {
                    enabled: false,
                }
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 12,
                navigation: {
                    enabled: false,
                }
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
                navigation: {
                    enabled: true,
                }
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 12,
                navigation: {
                    enabled: true,
                }
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 12,
                navigation: {
                    enabled: true,
                }
            }
        }
    });

    return swiper
}

/**
 * 
 */
function hideNavigationsButtons(swipper_instance) {
    // I will place this here, to hidde the left navigration button at the beginning
    swipper_instance.navigation.$prevEl.css('display', 'none');

    // Show/hide navigation buttons on slide change
    swipper_instance.on('slideChange', function () {
        if (swipper_instance.isEnd) {
            swipper_instance.navigation.$nextEl.css('display', 'none');
        } else {
            swipper_instance.navigation.$nextEl.css('display', 'block');
        }
        if (swipper_instance.isBeginning) {
            swipper_instance.navigation.$prevEl.css('display', 'none');
        } else {
            swipper_instance.navigation.$prevEl.css('display', 'block');
        }
    });
}