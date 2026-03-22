document.addEventListener("DOMContentLoaded", () => {

    // testimonial swiper
    const testiSwiper = document.querySelector('.testiSwiper');
    if (testiSwiper) {
        new Swiper(".testiSwiper", {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
                clickable: true,
                renderBullet: function (index, className) {
                    const images = [
                        "./images/userimgs/client1.jpg",
                        "./images/userimgs/client2.jpg",
                        "./images/userimgs/client3.jpg",
                        "./images/userimgs/client4.jpg",
                        "./images/userimgs/client5.jpg",
                        "./images/userimgs/client6.jpg",
                        "./images/userimgs/client7.jpg",
                    ];
                    return `<span class="${className}"><img src="${images[index]}" alt="profileImg" class="user-img"></span>`;
                },
            },
        });
    }

    // clients-centric page animation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'clients.html') {

        // counting section animation
        const countingSection = document.querySelector('#counting-section');
        // Initial hide
        if (countingSection) {
            gsap.set('#counting-section h2', { opacity: 0, x: -50 });
            gsap.set('#counting-section .left-img', { opacity: 0, x: -50 });
            gsap.set('#counting-section .right-img', { opacity: 0, x: 50 });
            gsap.set('#counting-section p,#counting-section .btn', { opacity: 0, y: 30 });
            gsap.set('#counting-section .counting-number', { opacity: 0, scale: 0 });
        }
        // Scroll trigger
        const countingsecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#counting-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        countingsecTl
            .to('#counting-section h2', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            })

            .to('#counting-section .left-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.4")

            .to('#counting-section .right-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.4")

            .to('#counting-section p,#counting-section .btn', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }, "-=0.4")

            .to('#counting-section .counting-number', {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'none'
            }, "-=0.4")

        // testimonial section animation
        const testimonials = document.querySelector('#testimonials');
        // Initial hide
        if (testimonials) {
            gsap.set('#testimonials .badge,#testimonials h2,#testimonials h4,#testimonials p,#testimonials .btn', { opacity: 0, y: 30 });
            gsap.set('#testimonials .quote-icon1,#testimonials .quote-icon2,#testimonials .quote-icon3,#testimonials .quote-icon4,#testimonials .testiSwiper .swiper-pagination', { opacity: 0, scale: 0.3 });
        }
        // Scroll trigger
        const testimonialsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#testimonials',
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
        // Initial visible
        testimonialsTl
            .to('#testimonials .badge,#testimonials h2,#testimonials h4,#testimonials p,#testimonials .btn', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            })

            .to('#testimonials .quote-icon1,#testimonials .quote-icon2,#testimonials .quote-icon3,#testimonials .quote-icon4,#testimonials .testiSwiper .swiper-pagination', {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'none'
            }, '0')
    }
    
})