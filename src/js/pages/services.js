document.addEventListener('DOMContentLoaded', () => {
    // services hero swiper
    const thumbsE1 = document.querySelector('.services-hero .serviceHeroSwiper2');
    const mainE1 = document.querySelector('.services-hero .serviceHeroSwiper1');
    if (thumbsE1 && mainE1) {
        // thumbs img swiper
        const thumbsSwiper = new Swiper(thumbsE1, {
            loop: true,
            spaceBetween: 10,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 }
            },
        });

        // main bg img swiper
        const mainSwiper = new Swiper(mainE1, {
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            thumbs: {
                swiper: thumbsSwiper,
            },
            allowTouchMove: false,
        });
    }

    // service swiper
    const serviceSwiper = document.querySelector('.serviceSwiper');
    if (serviceSwiper) {
        new Swiper('.serviceSwiper', {
            loop: true,
            slidesPerView: 2,
            freeMode: true,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            breakpoints: {
                0: { spaceBetween: 15 },
                576: { spaceBetween: 30 },
            },
        })
    }

    // Hero section animation for services pages
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'services.html') {
        const herosection = document.querySelector('.services-hero');
        // Initial hide
        if (herosection) {
            gsap.set('.services-hero h1,.services-hero p,.services-hero .btn', { opacity: 0, x: -100 });
        }
        // Scroll trigger
        const herosecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.services-hero',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        herosecTl
            .to('.services-hero h1,.services-hero p,.services-hero .btn', {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            })


        // services page animation
        // services detail section animation
        const servicesSection = document.querySelector('#services-sec');
        // Initial hide
        if (servicesSection) {
            gsap.set('#services-sec .service-accordion,#services-sec .card', { opacity: 0, x: -50 });
            gsap.set('#services-sec .right-img', { opacity: 0, x: 50 });
            gsap.set('#services-sec p,#services-sec h3,#services-sec h2', { opacity: 0, y: 50 });
            gsap.set('#services-sec .serviceSwiper', { opacity: 0, x: 50 });
        }
        // Scroll trigger
        const servicesTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services-sec',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        servicesTl
            .to('#services-sec .service-accordion,#services-sec .card', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            })

            .to('#services-sec .right-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "0")

            .to('#services-sec p,#services-sec h3,#services-sec h2', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out'
            }, "0")

            .to('#services-sec .serviceSwiper', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "0")
    }

})