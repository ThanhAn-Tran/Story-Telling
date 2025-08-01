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
    
    // Audio player functionality
    initAudioPlayer();
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
    
    // Parallax effects
    initParallaxEffects();
    
    // Enable audio autoplay after user interaction
    enableAudioAutoplay();

    // Initialize navigation highlight
    initNavigationHighlight();
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

    // Key quote animation
    gsap.fromTo('.key-quote', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.key-quote',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Highlights animation
    gsap.fromTo('.highlights', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.highlights',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Achievements animation
    gsap.fromTo('.achievements', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.achievements',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Key initiative animation
    gsap.fromTo('.key-initiative', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.key-initiative',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Impact animation
    gsap.fromTo('.impact', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.impact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Conclusion animation
    gsap.fromTo('.conclusion-section', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.conclusion-section',
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
        audio.src = '../../audio/đờn ca tài tử/6864237346381.mp3';
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
        
        audio.addEventListener('error', (e) => {
            console.log('Audio error:', e);
            // Fallback to simulated audio
            isPlaying = true;
            simulateAudioProgress();
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
    
    // Image parallax effects
    const images = document.querySelectorAll('.image-placeholder, .real-image');
    images.forEach(image => {
        gsap.to(image, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// Navigation highlight on scroll
function initNavigationHighlight() {
    const sections = document.querySelectorAll('.story-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            },
            onEnterBack: () => {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Initialize navigation highlight
initNavigationHighlight();

// Add particle effects to hero section
function addParticleEffects() {
    const heroSection = document.querySelector('.hero-section');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        
        heroSection.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particle effects
addParticleEffects();

// Handle mobile swipe gestures
function handleSwipe() {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left - next section
                navigateToNextSection();
            } else {
                // Swipe right - previous section
                navigateToPreviousSection();
            }
        }
    });
}

function navigateToNextSection() {
    const sections = document.querySelectorAll('.story-section');
    const currentSection = getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: nextSection,
                offsetY: 80
            },
            ease: 'power2.inOut'
        });
    }
}

function navigateToPreviousSection() {
    const sections = document.querySelectorAll('.story-section');
    const currentSection = getCurrentSection();
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    if (currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: prevSection,
                offsetY: 80
            },
            ease: 'power2.inOut'
        });
    }
}

function getCurrentSection() {
    const sections = document.querySelectorAll('.story-section');
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            return section;
        }
    }
    
    return sections[0];
}

// Initialize swipe handling
handleSwipe();