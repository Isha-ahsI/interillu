document.addEventListener("DOMContentLoaded", () => {

    // Expertise page Animation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'expertise.html') {

        // number section animation
        const numberSection = document.querySelector('#counting-section');
        // Initial hide
        if (numberSection) {
            gsap.set('#counting-section h3', { opacity: 0, y: 50 });
            gsap.set('#counting-section .counting-number, #counting-section p', { opacity: 0, scale: 0 });
        }
        // Scroll trigger
        const numbersecTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#counting-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        numbersecTl
            .to('#counting-section h3', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            })

            .to('#counting-section .counting-number,#counting-section p', {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'none'
            }, '0')

        // how we do work section animation
        const workSection = document.querySelector('#work');
        // Initial hide
        if (workSection) {
            gsap.set('#work h2', { opacity: 0, x: -100 });
            gsap.set('#work p', { opacity: 0, x: 100 });
            gsap.set('#work .video-wrapper', { opacity: 0, scale: 0.3 });
        }
        // Scroll trigger
        const workTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#work',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        workTl
            .to('#work h2', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            })

            .to('#work p', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, "0")

            .to('#work .video-wrapper', {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            })

        // Team Section Animation
        const teamSection = document.querySelector('#team');
        if (teamSection) {
            // Animate section header
            gsap.fromTo(
                '#team .badge, #team h2, #team p,#team .btn',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: '#team',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );

            // Animate team members with 3D flip effect
            const teamMembers = gsap.utils.toArray('#team .card');
            teamMembers.forEach((card, i) => {
                // Set initial state
                gsap.set(card, {
                    opacity: 0,
                    y: 50,
                    rotationY: 15,
                    transformPerspective: 1000,
                    transformOrigin: 'center center',
                });
                // Animate on scroll
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                });
            });

        }

        // Achievement section animation
        const achievementSection = document.querySelector('#achievement');
        // Initial hide
        if (achievementSection) {
            gsap.set('#achievement h2,#achievement p', { opacity: 0, y: 30 });
            gsap.set('#achievement .achievement-card', { opacity: 0 });
        }
        // Scroll trigger
        const achievementTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#achievement',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        // Initial visible
        achievementTl
            .to('#achievement h2,#achievement p', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            })

            .to('#achievement .achievement-card', {
                opacity: 1,
                duration: 0.4,
                stagger: 0.2,
                ease: 'none'
            }, '-=0.8')
    }

    // video play js
    const playButton = document.querySelector('.play-button');
    const video = document.querySelector('video');
    const playIcon = document.querySelector('.play-button i');

    if (playButton && video && playIcon) {
        playButton.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playIcon.classList.replace('fa-circle-play', 'fa-circle-pause');
                playButton.style.opacity = '0';
            } else {
                video.pause();
                playIcon.classList.replace('fa-circle-pause', 'fa-circle-play');
                playButton.style.opacity = '1';
            }
        });

        video.addEventListener('ended', function () {
            playIcon.classList.replace('fa-circle-pause', 'fa-circle-play');
            playButton.style.opacity = '1';
        });
    }
});