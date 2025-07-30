// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Animated Counter for Statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
            
            // Fade in animations
            if (entry.target.classList.contains('fade-in')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
            
            // Project cards hover effects
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Observe stat numbers
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(el);
    });
    
    // Add fade-in class to elements that should fade in
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Project Card Interactive Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add subtle glow effect
        this.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.15)';
        
        // Animate project icon
        const icon = this.querySelector('.project-icon > div');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        
        const icon = this.querySelector('.project-icon > div');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Enhanced Grid Animation
function enhanceGridAnimation() {
    const gridAnimation = document.querySelector('.grid-animation');
    if (!gridAnimation) return;
    
    // Create additional animated elements
    for (let i = 0; i < 5; i++) {
        const pulse = document.createElement('div');
        pulse.className = 'energy-pulse';
        pulse.style.animationDelay = `${i * 0.6}s`;
        pulse.style.animationDuration = `${3 + i * 0.5}s`;
        gridAnimation.appendChild(pulse);
    }
}

// Tech Animation Enhancement
function enhanceTechAnimation() {
    const techAnimation = document.querySelector('.tech-animation');
    if (!techAnimation) return;
    
    // Add floating data points
    for (let i = 0; i < 8; i++) {
        const dataPoint = document.createElement('div');
        dataPoint.className = 'floating-data-point';
        dataPoint.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 50%;
            opacity: 0.6;
            animation: floatRandom ${4 + Math.random() * 4}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        techAnimation.appendChild(dataPoint);
    }
}

// Add CSS for floating animation
const floatingKeyframes = `
    @keyframes floatRandom {
        0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
        }
        25% { 
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.2);
            opacity: 1;
        }
        50% { 
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(0.8);
            opacity: 0.4;
        }
        75% { 
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.1);
            opacity: 0.8;
        }
    }
`;

// Add keyframes to stylesheet
const styleSheet = document.createElement('style');
styleSheet.textContent = floatingKeyframes;
document.head.appendChild(styleSheet);

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        enhanceGridAnimation();
        enhanceTechAnimation();
    }, 1000);
});

// Button Ripple Effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Add ripple CSS
const rippleCSS = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleCSS;
document.head.appendChild(rippleStyleSheet);

// Loading Animation
function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <h2>TransnetBW</h2>
            </div>
            <div class="loader-animation">
                <div class="loader-line"></div>
                <div class="loader-line"></div>
                <div class="loader-line"></div>
            </div>
        </div>
    `;
    
    const loaderCSS = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .loader-logo h2 {
            color: var(--primary-color);
            font-size: 2rem;
            margin-bottom: 2rem;
            animation: pulse 2s infinite;
        }
        
        .loader-animation {
            display: flex;
            gap: 5px;
        }
        
        .loader-line {
            width: 4px;
            height: 30px;
            background: var(--primary-color);
            animation: loaderPulse 1.2s infinite ease-in-out;
        }
        
        .loader-line:nth-child(2) {
            animation-delay: 0.1s;
        }
        
        .loader-line:nth-child(3) {
            animation-delay: 0.2s;
        }
        
        @keyframes loaderPulse {
            0%, 40%, 100% {
                transform: scaleY(0.4);
                opacity: 0.5;
            }
            20% {
                transform: scaleY(1);
                opacity: 1;
            }
        }
    `;
    
    const loaderStyleSheet = document.createElement('style');
    loaderStyleSheet.textContent = loaderCSS;
    document.head.appendChild(loaderStyleSheet);
    
    document.body.appendChild(loader);
    
    // Hide loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loader);
            }, 500);
        }, 1000);
    });
}

// Initialize loader
showLoader();

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Navbar background
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}, 16);

window.addEventListener('scroll', throttledScrollHandler);