// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
            loadingScreen.style.display = 'none';
            initAnimations();
        }
    });
});

// Initialize all animations
function initAnimations() {
    // Hero section animations
    animateHero();
    
    // Story section animations
    animateStorySections();
    
    // Timeline animations
    animateTimeline();
    
    // Audio player functionality
    initAudioPlayer();
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
    
    // Parallax effects
    initParallaxEffects();
}

// Hero section animations
function animateHero() {
    const heroElements = gsap.utils.toArray('.hero-title, .hero-subtitle, .hero-scroll-indicator');
    
    gsap.fromTo(heroElements, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out'
    });
}

// Story section animations
function animateStorySections() {
    // Intro section
    gsap.fromTo('.intro-section .text-content', {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo('.intro-section .image-content', {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Chapter sections
    const chapters = gsap.utils.toArray('.chapter-section');
    chapters.forEach((chapter, index) => {
        const textContent = chapter.querySelector('.text-content');
        const imageContent = chapter.querySelector('.image-content');
        const chapterHeader = chapter.querySelector('.chapter-header');
        
        // Chapter header animation
        gsap.fromTo(chapterHeader, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: chapter,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Text content animation
        if (textContent) {
            gsap.fromTo(textContent, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: chapter,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        // Image content animation
        if (imageContent) {
            gsap.fromTo(imageContent, {
                opacity: 0,
                x: index % 2 === 0 ? 100 : -100
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: chapter,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });

    // Subsection animations
    const subsections = gsap.utils.toArray('.subsection');
    subsections.forEach((subsection, index) => {
        const textContent = subsection.querySelector('.text-content');
        const imageContent = subsection.querySelector('.image-content');
        
        if (textContent) {
            gsap.fromTo(textContent, {
                opacity: 0,
                x: -50
            }, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: subsection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        if (imageContent) {
            gsap.fromTo(imageContent, {
                opacity: 0,
                x: 50
            }, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: subsection,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });

    // Key events animation
    gsap.fromTo('.key-events', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.key-events',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Highlights animation
    const highlightItems = gsap.utils.toArray('.highlight-item');
    gsap.fromTo(highlightItems, {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.highlights',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Performance items animation
    const performanceItems = gsap.utils.toArray('.performance-item');
    gsap.fromTo(performanceItems, {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.performances',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Theme tags animation
    const themeTags = gsap.utils.toArray('.theme-tag');
    gsap.fromTo(themeTags, {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.themes',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Timeline animations
function animateTimeline() {
    const timelineItems = gsap.utils.toArray('.timeline-item');
    gsap.fromTo(timelineItems, {
        opacity: 0,
        x: -30
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Audio player functionality
function initAudioPlayer() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const progressFill = document.querySelector('.progress-fill');
    
    let isPlaying = false;
    let audio = null;
    
    // Create audio element
    function createAudio() {
        audio = new Audio();
        audio.src = '/music/background.mp3'; // This will be replaced with actual audio
        audio.loop = true;
        
        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const progress = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = progress + '%';
            }
        });
        
        audio.addEventListener('ended', () => {
            isPlaying = false;
            updatePlayButton();
        });
    }
    
    function updatePlayButton() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }
    
    playPauseBtn.addEventListener('click', () => {
        if (!audio) {
            createAudio();
        }
        
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play().then(() => {
                isPlaying = true;
            }).catch(error => {
                console.log('Audio play failed:', error);
                // Create a fake audio experience for demo
                isPlaying = true;
                simulateAudioProgress();
            });
        }
        
        updatePlayButton();
    });
    
    function simulateAudioProgress() {
        let progress = 0;
        const interval = setInterval(() => {
            if (!isPlaying) {
                clearInterval(interval);
                return;
            }
            progress += 0.5;
            if (progress > 100) progress = 0;
            progressFill.style.width = progress + '%';
        }, 1000);
    }
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Image placeholders parallax
    const imagePlaceholders = gsap.utils.toArray('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        gsap.to(placeholder, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: placeholder,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// Navigation highlight on scroll
function initNavigationHighlight() {
    const sections = gsap.utils.toArray('.story-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLinks[index]) {
                    navLinks[index].classList.add('active');
                }
            },
            onEnterBack: () => {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLinks[index]) {
                    navLinks[index].classList.add('active');
                }
            }
        });
    });
}

// Initialize navigation highlight
initNavigationHighlight();

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to image placeholders
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', () => {
            gsap.to(placeholder, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        placeholder.addEventListener('mouseleave', () => {
            gsap.to(placeholder, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Add click effects to theme tags
    const themeTags = document.querySelectorAll('.theme-tag');
    themeTags.forEach(tag => {
        tag.addEventListener('click', () => {
            gsap.to(tag, {
                scale: 0.9,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
        });
    });
    
    // Add scroll-based navbar background
    ScrollTrigger.create({
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
            const navbar = document.querySelector('.navbar');
            if (self.progress > 0.1) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        }
    });
});

// Add some particle effects to the hero section
function addParticleEffects() {
    const heroSection = document.querySelector('.hero-section');
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        heroSection.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
            y: -100,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            ease: 'none',
            delay: Math.random() * 2
        });
    }
}

// Initialize particle effects
addParticleEffects();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = document.querySelectorAll('.story-section');
    const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    const currentIndex = Array.from(sections).findIndex(section => section.contains(currentSection));
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sections[currentIndex + 1],
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIndex > 0) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sections[currentIndex - 1],
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    }
});

// Add touch/swipe support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const sections = document.querySelectorAll('.story-section');
    const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    const currentIndex = Array.from(sections).findIndex(section => section.contains(currentSection));
    
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentIndex < sections.length - 1) {
            // Swipe up - next section
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sections[currentIndex + 1],
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        } else if (swipeDistance < 0 && currentIndex > 0) {
            // Swipe down - previous section
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sections[currentIndex - 1],
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    }
}