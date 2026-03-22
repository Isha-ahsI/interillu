// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {

    // Get current page path to determine which hero animation to use
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Hero section animation - Only for index.html
    if (currentPage === 'index.html') {
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Get the elements
        const heroTitle = document.querySelector('.hero-section h1');
        const heroSubtitle = document.querySelector('.hero-section h4');
        const heroButtons = document.querySelectorAll('.hero-section .title .btn');

        // Check if elements exist before proceeding
        if (heroTitle && heroSubtitle && heroButtons.length > 0) {
            // Split text into words
            const titleText = heroTitle.textContent;
            heroTitle.innerHTML = ''; // Clear the title

            // Split into words and create word spans
            const words = titleText.split(' ');
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.style.display = 'inline-block';
                wordSpan.style.whiteSpace = 'nowrap';
                wordSpan.style.opacity = '0';
                wordSpan.style.transform = 'translateY(30px)';
                wordSpan.textContent = word;

                // Add CSS class for better control
                wordSpan.classList.add('word-animate');

                heroTitle.appendChild(wordSpan);

                // Add a space after each word except the last one
                if (wordIndex < words.length - 1) {
                    heroTitle.appendChild(document.createTextNode(' '));
                }
            });

            const wordSpans = heroTitle.querySelectorAll('.word-animate');

            // Set initial styles
            gsap.set([wordSpans, heroSubtitle, heroButtons], { opacity: 0 });
            gsap.set(heroSubtitle, { y: 20 });
            gsap.set(heroButtons, { y: 30, scale: 0.8 });

            // Create the animation sequence
            heroTimeline
                // Animate words with a smooth fade and slide up effect
                .to(wordSpans, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    stagger: {
                        amount: 1.5,
                        from: 'center',
                        ease: 'power2.inOut'
                    }
                })
                // Subtitle animation with a nice bounce
                .to(heroSubtitle, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(2)'
                }, '-=0.5')
                // Buttons animation with a pop effect
                .to(heroButtons, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'back.out(2)'
                }, '-=0.3');
        }

    }

    // Hero Section Animation with Parallax and Advanced Effects - For index2.html
    if (currentPage === 'index2.html') {
        const heroSection = document.querySelector('.herosection2');
        if (heroSection) {
            // Parallax effect for background
            gsap.to('.zoom-bg', {
                scrollTrigger: {
                    trigger: '.herosection2',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                scale: 1.1,
                ease: 'none'
            });

            // Main content animation timeline
            const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Set initial states
            gsap.set(['.herosection2 .badge', '.herosection2 h1 span'], {
                opacity: 0,
                y: 30
            });


            gsap.set('.herosection2 .btn', {
                opacity: 0,
                y: 20,
                scale: 0.9
            });

            // Animate elements with creative sequencing
            heroTL
                // Badge animation with bounce effect
                .to('.herosection2 .badge', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                })
                // Main heading with clip-path reveal
                .to('.herosection2 h1', {
                    opacity: 1,
                    y: 0,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    duration: 1.2,
                    ease: 'power3.out'
                }, '-=0.5')
                // Text highlight animation
                .to('.herosection2 h1 span', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(1.5)',
                    stagger: 0.1
                }, '-=0.8')
                // Paragraph with fade and slide
                .to('.herosection2 p', {
                    opacity: 1,
                    y: 0,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    duration: 1,
                    ease: 'power3.out'
                }, '-=0.4')
                // Buttons with staggered pop-in effect
                .to('.herosection2 .btn', {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    stagger: 0.15
                }, '-=0.6');

            // Animate gallery cards with 3D effect
            const galleryCards = gsap.utils.toArray('.herosection2 .card');
            galleryCards.forEach((card, i) => {
                gsap.set(card, {
                    opacity: 0,
                    y: 80,
                    transformOrigin: 'center bottom',
                    z: 50
                });

                // Staggered entrance animation
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: i * 0.15,
                    ease: 'back.out(1.4)'
                });
            });
        }
    }

    // Hero section animation for index3.html
    if (currentPage === 'index3.html') {
        const heroSection = document.querySelector('.hero-section3');
        if (heroSection) {
            // Create timeline for hero section 3
            const hero3TL = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Set initial states
            gsap.set(['.hero-section3 .badge', '.hero-section3 h1', '.hero-section3 p', '.hero-section3 h1 span', '.hero-section3 .btn', '.hero-section3 .col-6'], {
                opacity: 0,
                y: 30
            });

            // Animate elements with creative sequencing
            hero3TL
                // Badge animation with bounce
                .to('.hero-section3 .badge', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                })
                // Main heading with fade and slide up
                .to('.hero-section3 h1', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=0.2')
                // Highlight the span in heading
                .to('.hero-section3 h1 span', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                }, '-=0.5')
                // Paragraph fade in
                .to('.hero-section3 p', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }, '-=0.4')
                // Buttons with staggered effect
                .to('.hero-section3 .btn', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'back.out(1.7)'
                }, '-=0.4')
                // Stats counter animation
                .to('.hero-section3 .col-6', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    onStart: () => {
                        // Animate counters
                        const counters = document.querySelectorAll('.hero-section3 .display-5');
                        counters.forEach(counter => {
                            const target = +counter.textContent.replace(/\D/g, '');
                            const duration = 2000;
                            const step = target / (duration / 16);
                            let current = 0;

                            const updateCounter = () => {
                                current += step;
                                if (current < target) {
                                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('%') ? '%' : '+');
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
                                }
                            };
                            updateCounter();
                        });
                    }
                }, '-=0.4');
        }
    }

    // Hero section animation for index4.html
    if (currentPage === 'index4.html') {
        const heroCarousel = document.querySelector('.hero-section4');

        if (heroCarousel) {
            // Function to animate carousel items
            const animateCarouselItem = (item) => {
                const content = item.querySelector('.carousel-caption');
                const badge = content.querySelector('.badge');
                const heading = content.querySelector('h1');
                const paragraph = content.querySelector('p');
                const buttons = content.querySelectorAll('.btn');

                // Reset animations
                gsap.set([badge, heading, paragraph, buttons], {
                    opacity: 0,
                    y: 30
                });

                // Create animation timeline
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                // Animate elements with staggered delays
                tl
                    .to(badge, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6
                    })
                    .to(heading, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8
                    }, '-=0.3')
                    .to(paragraph, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7
                    }, '-=0.4')
                    .to(buttons, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'back.out(1.7)'
                    }, '-=0.3');

                return tl;
            };

            // Initialize first slide
            const firstSlide = heroCarousel.querySelector('.carousel-item.active');
            if (firstSlide) {
                animateCarouselItem(firstSlide);
            }

            // Handle slide change
            heroCarousel.addEventListener('slid.bs.carousel', function (e) {
                const activeItem = e.relatedTarget;
                animateCarouselItem(activeItem);
            });

            // Add parallax effect to carousel images
            gsap.to('.carousel-item img', {
                // yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section4',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });

            // Add subtle scale animation on hover for buttons
            const buttons = document.querySelectorAll('.carousel-caption .btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });
        }
    }

    // Common About Section Animation
    const aboutSection = document.querySelector('#about');
    const aboutImage = document.querySelector('#about .aboutus-img');
    const aboutContent = document.querySelector('#about .about-content-card');

    // Set initial states
    gsap.set(aboutImage, { opacity: 0, x: -100 });
    gsap.set(aboutContent, { opacity: 0, x: 100 });

    // Create scroll trigger for about section
    ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top 70%',
        onEnter: () => {
            const aboutTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

            aboutTimeline
                // Image slides in from left
                .to(aboutImage, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8
                })
                // Content slides in from right
                .to(aboutContent, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8
                }, '-=0.4');
        },
        once: true
    });

    if (aboutContent) {
        gsap.fromTo(
            '.about-content-card .badge,.about-content-card h2,.about-content-card .icon, .about-content-card p, .about-content-card h5, .about-content-card .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: aboutSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }


    // aboutShowcase animation
    const aboutShowcase = document.querySelector('#aboutShowcase');
    if (aboutShowcase) {
        // Set initial states
        gsap.set('#aboutShowcase .icon', { opacity: 0, scale: 0.3 });
        gsap.set('#aboutShowcase .aboutTitle', { opacity: 0, y: 30 });
        gsap.set('#aboutShowcase .description', { opacity: 0, y: 30 });

        // Create scroll trigger for aboutShowcase section
        ScrollTrigger.create({
            trigger: aboutShowcase,
            start: 'top 70%',
            onEnter: () => {
                const aboutShowcaseTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

                aboutShowcaseTimeline
                    .to('#aboutShowcase .icon', {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2
                    })
                    .to('#aboutShowcase .aboutTitle', {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2
                    }, '-=0.4')
                    .to('#aboutShowcase .description', {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2
                    }, '-=0.4');
            },
            once: true
        });
    }

    // Common Service Section Animation
    const serviceSection = document.querySelector('#services');
    if (serviceSection) {
        // Animate the section header
        gsap.fromTo(
            '#services .badge, #services h2, #services p, #services .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate main content
        gsap.fromTo(
            '#services .img-link,#services .service-link',
            { opacity: 0, scale: 0.3 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Common Projects Section Animation
    const projectsSection = document.querySelector('#project');
    if (projectsSection) {
        // Animate the section header
        gsap.fromTo(
            '#project .badge, #project h2, #project p, #project .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#project',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate project cards with staggered effect
        const projectCards = gsap.utils.toArray('#project .project-card');
        projectCards.forEach((card, i) => {
            // Set initial state
            gsap.set(card, { y: 50, opacity: 0 });

            // Animate on scroll
            gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // Common Blog Section Animation
    const blogSection = document.querySelector('#blog');
    if (blogSection) {
        // Animate the section header
        gsap.fromTo(
            '#blog .badge, #blog h2, #blog .content',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#blog',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );

        const cards = gsap.utils.toArray(".blog-card");
        const randomCards = gsap.utils.shuffle(cards);
        randomCards.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                scale: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '#blog',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // Common Contact Section Animation
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        // Animate section header
        gsap.fromTo(
            '#contact h2, #contact p,#contact a,#contact .input-group ,#contact .btn ,#contact h5',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate form and map
        const contactCards = gsap.utils.toArray('#contact .card');
        contactCards.forEach((card, i) => {
            // Set initial state
            gsap.set(card, {
                opacity: 0,
                y: 40,
                scale: 0.75
            });

            // Animate on scroll
            gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'back.out(1.4)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });

            // Map hover effect
            const map = card.querySelector('iframe');
            if (map) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            }
        });
    }

});