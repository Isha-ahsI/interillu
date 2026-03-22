document.addEventListener('DOMContentLoaded', () => {
    
    //  showcase swiper
    const swiperContainer = document.querySelector('.showCaseSwiper');
    if (swiperContainer) {
        new Swiper('.showCaseSwiper', {
            spaceBetween: 10,
            loop: true,
            speed: 800,
            grabCursor: true,
            breakpoints: {
                576: { slidesPerView: 2, centeredSlides: true },
                768: { centeredSlides: true },
                992: { slidesPerView: 3, centeredSlides: false },
            },
            navigation: {
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
            },
        })
    }

    // Our Vision page Animation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'ourvision.html') {

        // Our Vision Section Animation
        const visionSection = document.querySelector('#vision');
        // Initial hide
        if (visionSection) {
            gsap.set('#vision .vision-img-left', { opacity: 0, x: -100 });
            gsap.set('#vision .vision-img-right', { opacity: 0, x: 100 });
            gsap.set('#vision .sec-content h2,#vision .sec-content p', { opacity: 0, y: 30 });
        }
        // Scroll trigger
        const visionsecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vision',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        visionsecTl
            .to('#vision .vision-img-left', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            })

            .to('#vision .vision-img-right', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4')

            .to('#vision .sec-content h2,#vision .sec-content p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            }, '-=0.3')

        // Philosophy Section Animation
        const philosophySection = document.querySelector('#philosophy');
        // Initial hide
        if (philosophySection) {
            gsap.set('#philosophy h2 ,#philosophy p,#philosophy h5 ,#philosophy li', { opacity: 0, y: 30 });
            gsap.set('#philosophy img', { opacity: 0, x: 100 });
        }
        // Scroll trigger
        const philosophysecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#philosophy',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        philosophysecTl
            .to('#philosophy h2,#philosophy p,#philosophy h5,#philosophy ul li', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            })

            .to('#philosophy img', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            }, '0')

        // Innovative Section Animation
        const innovativeSection = document.querySelector('#innovative');
        // Initial hide
        if (innovativeSection) {
            gsap.set('#innovative h2 ,#innovative p', { opacity: 0, y: 30 });
            gsap.set('#innovative .swiper-nav', { opacity: 0, scale: 0 });
            gsap.set('#innovative .img-card', { x: 200 });
        }
        // Scroll trigger
        const innovativeTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#innovative',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        innovativeTl
            .to('#innovative h2,#innovative p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            })

            .to('#innovative .swiper-nav', {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            }, '0')

            .to('#innovative .img-card', {
                x: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'none'
            }, '0')
    }
})