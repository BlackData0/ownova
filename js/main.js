document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS and existing animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.from(".hero-content h2", { y: 100, opacity: 0, duration: 1 })
          .from(".hero-content p", { y: 50, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
          .from(".hero-image", { x: 100, opacity: 0, duration: 1 }, "-=0.8")
          .from(".stat-card", { 
              y: 30, 
              opacity: 0, 
              duration: 0.6, 
              stagger: 0.2 
          }, "-=0.4");

    // Animate service cards on scroll
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Features animation
    gsap.utils.toArray('.feature').forEach((feature, i) => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.15
        });
    });

    // Leader profile animation
    gsap.from(".leader-profile", {
        scrollTrigger: {
            trigger: ".leader-profile",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    // Mobile Navigation Toggle with animation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const spans = menuToggle.querySelectorAll('span');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        if (navLinks.classList.contains('active')) {
            gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, x: -20, duration: 0.3 });
            gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, x: 0, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });

    // Smooth Scrolling with GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // Animated counter for stats
    const statsSection = document.querySelector('.hero-cards');
    let animated = false;

    function animateValue(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const value = Math.floor(start + (progress * range));
            element.textContent = value + (end === 99 ? '%' : 'x');
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                document.querySelectorAll('.stat-number').forEach((stat, index) => {
                    const finalValue = index === 0 ? 99 : 10;
                    const startValue = 0;
                    animateValue(stat, startValue, finalValue, 2000);
                });
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        observer.observe(statsSection);
    }

    // Enhanced Form Validation and Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            gsap.to(submitButton, {
                scale: 0.95,
                duration: 0.2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            });

            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Show success popup with animation
                    const popup = document.getElementById('popup-message');
                    popup.style.display = 'block';
                    gsap.from(popup, {
                        scale: 0.5,
                        opacity: 0,
                        duration: 0.5,
                        ease: "back.out(1.7)"
                    });
                    
                    contactForm.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }
        });
    }

    // Custom Cursor Effect
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
        
        gsap.to(cursorDot, {
            x: posX,
            y: posY,
            duration: 0.1
        });
        
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15
        });
    });

    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, {
                scale: 1.5,
                duration: 0.3
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, {
                scale: 1,
                duration: 0.3
            });
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalScroll) * 100;
        scrollProgress.style.width = `${progress}%`;
    });

    // Image Lazy Loading with Animation
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.addEventListener('load', () => {
                    gsap.to(img, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Skeleton Loading for Service Cards
    const servicesGrid = document.querySelector('.services-grid');
    const skeletonTemplate = document.getElementById('skeleton-card');
    
    function showSkeletonLoaders() {
        const cards = servicesGrid.children;
        Array.from(cards).forEach(card => {
            card.style.opacity = '0';
        });

        for (let i = 0; i < 6; i++) {
            const skeleton = skeletonTemplate.content.cloneNode(true);
            servicesGrid.appendChild(skeleton);
        }
    }

    function removeSkeletonLoaders() {
        const skeletons = document.querySelectorAll('.skeleton-loader');
        skeletons.forEach(skeleton => {
            skeleton.remove();
        });

        const cards = servicesGrid.children;
        Array.from(cards).forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1
            });
        });
    }

    // Simulate loading delay
    showSkeletonLoaders();
    setTimeout(removeSkeletonLoaders, 1500);

    // Parallax Effect for Hero Section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(heroContent, {
            x: -mouseX,
            y: -mouseY,
            duration: 1,
            ease: "power2.out"
        });

        gsap.to(heroImage, {
            x: mouseX,
            y: mouseY,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Header scroll effect with GSAP
    const header = document.querySelector('.header');
    let lastScroll = 0;

    ScrollTrigger.create({
        start: 100,
        end: "max",
        onUpdate: (self) => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                gsap.to(header, {
                    yPercent: -100,
                    duration: 0.3,
                    ease: "power3.inOut"
                });
            } else {
                gsap.to(header, {
                    yPercent: 0,
                    duration: 0.3,
                    ease: "power3.inOut"
                });
            }
            
            lastScroll = currentScroll;
        }
    });
});