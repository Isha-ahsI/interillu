document.addEventListener('DOMContentLoaded', () => {
    const carouselEl = document.querySelector('.hero-portfolio .carousel.portfolio-carousel');
    const outsideIndicators = document.querySelectorAll('.hero-portfolio .carousel-indicators .carousel-btn');
    if (carouselEl) {
        //  Listen for slide change
        carouselEl.addEventListener('slide.bs.carousel', (e) => {
            outsideIndicators.forEach(btn => btn.classList.remove('active'));
            outsideIndicators[e.to].classList.add('active');
        });
    }
})


// gsap animation
document.addEventListener('DOMContentLoaded', () => {

    // upcoming project swiper
    const swiperUpcoming = document.querySelector('.latestSwiper');
    if (swiperUpcoming) {
        new Swiper('.latestSwiper', {
            spaceBetween: 30,
            loop: true,
            speed: 5000,
            grabCursor: true,
            centeredSlides: true,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        })
    }


    // Hero section animation for portfolio pages
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'portfolio.html') {
        const herosection = document.querySelector('.hero-portfolio');
        // Initial hide
        if (herosection) {
            gsap.set('.hero-portfolio .badge,.hero-portfolio h1,.hero-portfolio p,.hero-portfolio .hero-content img,.hero-portfolio h2 ,.hero-portfolio .btn', { opacity: 0, x: -100 });
            gsap.set('.hero-portfolio .carousel.portfolio-carousel,.hero-portfolio .carousel-indicators .carousel-btn', { opacity: 0, x: 100 })
        }
        // Scroll trigger
        const herosecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-portfolio',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        herosecTl
            .to('.hero-portfolio .badge,.hero-portfolio h1,.hero-portfolio p,.hero-portfolio img,.hero-portfolio h2,.hero-portfolio .btn', {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            })
            .to('.hero-portfolio .carousel.portfolio-carousel,.hero-portfolio .carousel-indicators .carousel-btn', {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            }, "0")


        // intro section animation
        const introSection = document.querySelector('#projectintro');
        // Initial hide
        if (introSection) {
            gsap.set('#projectintro h2,#projectintro .project-img .left-img,#projectintro .project-img .glass-effect', { opacity: 0, x: -100 });
            gsap.set('#projectintro p', { opacity: 0, x: 100 });
            gsap.set('#projectintro .project-img .right-img', { opacity: 0, x: 100 });
            gsap.set('#projectintro .bookmark-icon', { opacity: 0, scale: 0.5 });
        }
        // Scroll trigger
        const portfolioTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#projectintro',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        portfolioTl
            .to('#projectintro h2,#projectintro .project-img .left-img,#projectintro .project-img .glass-effect', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            })

            .to('#projectintro p', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "0")

            .to('#projectintro .project-img .right-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }, "0")

            .to('#projectintro .bookmark-icon', {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'none'
            }, "-=0.6")


        // upcoming project section animation
        const upcomingSection = document.querySelector('#latest');
        // Initial hide
        if (upcomingSection) {
            gsap.set('#latest h2,#latest p', { opacity: 0, x: 50 });
            gsap.set('#latest .latestSwiper', { opacity: 0, x: -50 });
        }
        // Scroll trigger
        const upcomingTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#latest',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        upcomingTl
            .to('#latest h2,#latest p', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            })

            .to('#latest .latestSwiper', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.4")
    }
})