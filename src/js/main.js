/* 
    Company Name:Mantraksh Devs
    Description: IT Services and Solutions
    Author: Mantraksh Devs
    Email: mantrakshdevs@gmail.com
*/

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//number incresing js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll(".counting-number");
    let hasAnimated = false;

    const animateAllCounters = () => {
        const duration = 3000;
        const frameRate = 20;
        const totalSteps = duration / frameRate;

        let currentStep = 0;

        const counterData = Array.from(counters).map(counter => {
            const target = +counter.getAttribute("data-bs-target");
            const suffix = counter.getAttribute("data-suffix") || "";
            return { el: counter, target, suffix };
        });

        const updateCounters = () => {
            currentStep++;

            counterData.forEach(({ el, target, suffix }) => {
                const value = Math.round((target / totalSteps) * currentStep);
                el.innerText = (value >= target ? target : value) + suffix;
            });

            if (currentStep < totalSteps) {
                setTimeout(updateCounters, frameRate);
            } else {
                // Ensure final values are exact
                counterData.forEach(({ el, target, suffix }) => {
                    el.innerText = target + suffix;
                });
            }
        };

        updateCounters();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateAllCounters();
            }
        });
    }, {
        threshold: 0.5
    });

    const section = document.getElementById("counting-section");
    if (section) observer.observe(section);
})


// GSAP Animations
// Function to set active nav link
function setActiveNavLink() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentLink = document.querySelector(`.navbar-nav .nav-link[data-section="#${sectionId}"]`) || document.querySelector(`.navbar-nav .nav-link[data-section="#home"]`);
                if (currentLink) {
                    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    currentLink.classList.add('active');
                }
            }
        });
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPage = document.body.getAttribute('data-page');

    if (currentPage && currentPage !== 'home') {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === `#${currentPage}`) {
                link.classList.add('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Animation
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const socialIcons = document.querySelectorAll('.social-media a');

    // Set initial active nav link
    setActiveNavLink();

    // Initial state
    gsap.set(navbar, { y: -100, opacity: 0 });
    gsap.set(navLinks, { y: 20, opacity: 0 });
    gsap.set(socialIcons, { scale: 0.5, opacity: 0 });

    // Animate navbar in
    gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: 'power3.out',
        delay: 0.5
    });

    // Stagger nav links
    gsap.to(navLinks, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.8
    });

    // Stagger social icons
    gsap.to(socialIcons, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        delay: 1.2
    });

    // Hover effect for social icons
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.2,
                ease: 'elastic.out(1, 0.5)'
            });
        });

        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });

    // Common smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Get current page path to determine which hero animation to use
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Hero section animation for aboutus pages
    if (currentPage === 'ourvision.html' || currentPage === 'expertise.html' || currentPage === 'clients.html') {
        const herosection = document.querySelector('.hero-about');
        // Initial hide
        if (herosection) {
            gsap.set('.hero-about .hero-img', { opacity: 0, x: 100 });
            gsap.set('.hero-about .overlay', { opacity: 0 });
            gsap.set('.hero-about .hero-content h1 ,.hero-about .hero-content h3, .hero-about .hero-content p ', { opacity: 0, y: 30 });
            gsap.set('.hero-about .left-img', { opacity: 0, x: -50 });
            gsap.set('.hero-about .right-img', { opacity: 0, x: 50 });
        }
        // Scroll trigger
        const herosecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-about',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        herosecTl
            .to('.hero-about .hero-img', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })

            .to('.hero-about .overlay', {
                opacity: 1,
                duration: 0.8,
                ease: 'none',
            }, '-=0.3')

            .to('.hero-about .hero-content h1 ,.hero-about .hero-content h3, .hero-about .hero-content p ', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            }, '-=0.4')
            .to('.hero-about .left-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4')
            .to('.hero-about .right-img', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.4')
    }

    // why choose us section animation
    if (currentPage === 'services.html' || currentPage === 'expertise.html') {
        const feturesSection = document.querySelector('#fetures');
        // Initial hide
        if (feturesSection) {
            gsap.set('#fetures .header-content h2,#fetures .header-content p', { opacity: 0, y: 30 });
            gsap.set('#fetures .fetures-card .feture-icon ,#fetures .fetures-card h4,#fetures .fetures-card p', { opacity: 0, y: 30 });
        }
        // Scroll trigger
        const feturesTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#fetures',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        feturesTl
            .to('#fetures .header-content h2,#fetures .header-content p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            })

            .to('#fetures .fetures-card .feture-icon,#fetures .fetures-card h4,#fetures .fetures-card p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            })
    }

    // Common Masonry Gallery Animation
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        // Animate the section heading
        gsap.fromTo(
            '.gallery-section .badge,.gallery-section h2,.gallery-section .title, .gallery-section p,.gallery-section .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.gallery-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate masonry items with staggered effect
        const masonryItems = gsap.utils.toArray('.gallery-masonry .masonry-item');

        // Initialize ScrollTrigger for each item
        ScrollTrigger.batch(masonryItems, {
            start: 'top 85%',
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out',
                    overwrite: true
                });
            },
            once: true
        });

        // Add hover effect
        masonryItems.forEach(item => {
            const img = item.querySelector('.gallery-masonry img');
            const overlay = item.querySelector('.gallery-masonry .masonry-overlay');

            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: -10,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                gsap.to(img, {
                    scale: 1.08,
                    duration: 0.6,
                    ease: 'power2.out'
                });

                gsap.to(overlay, {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                gsap.to(img, {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                });

                gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Common Process Section Animation
    const processSection = document.querySelector('#process');
    if (processSection) {
        // Animate the section header
        gsap.fromTo(
            '#process img',
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '#process',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate main content
        gsap.fromTo(
            '#process .badge, #process h2,#process .process-num,#process h4, #process p, #process .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#process',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Common Newsletter Section Animation
    const newsletterSection = document.querySelector('#newsletter');
    if (newsletterSection) {
        // Animate the section header
        gsap.fromTo(
            '#newsletter h2, #newsletter p,#newsletter .form-control,#newsletter .btn',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#newsletter',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate img
        gsap.fromTo(
            '#newsletter img',
            { opacity: 0, scale: 0.2 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '#newsletter',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Common Footer Animation
    const footer = document.querySelector('footer');
    if (footer) {
        // Animate footer columns with staggered effect
        const footerColumns = gsap.utils.toArray('footer .col-lg-4, footer .col-lg-3, footer .col-md-4, footer .col-6');

        // Set initial state for all columns
        gsap.set(footerColumns, {
            opacity: 0,
            y: 40
        });

        // Animate columns on scroll
        footerColumns.forEach((col, i) => {
            gsap.to(col, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        });


        // Gallery images hover effect
        const galleryImages = gsap.utils.toArray('footer .hover-scale');
        galleryImages.forEach(img => {
            img.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    scale: 1.1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            img.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }

});
