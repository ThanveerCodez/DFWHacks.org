// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 64; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Days until event countdown
    function updateDaysCountdown() {
        const eventStartDate = new Date('September 27, 2025 10:00:00').getTime();
        const now = new Date().getTime();
        const distance = eventStartDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const daysElement = document.getElementById('days-until-event');
        
        if (daysElement) {
            if (distance < 0) {
                daysElement.textContent = '0';
            } else {
                daysElement.textContent = days;
            }
        }
    }

    // Update countdown every day
    updateDaysCountdown();
    setInterval(updateDaysCountdown, 24 * 60 * 60 * 1000); // Update every 24 hours

    // Counter animation for stats
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

    // Note: Removed counter animation for participants - they now display as static text

    // Add hover effects to prize cards
    const prizeCards = document.querySelectorAll('#prizes .border-2');
    prizeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Form validation for registration (if form is added later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add click handlers for buttons
    const registerButtons = document.querySelectorAll('button');
    registerButtons.forEach(button => {
        if (button.textContent.includes('Register')) {
            button.addEventListener('click', function() {
                // Scroll to registration section
                const registerSection = document.querySelector('#register');
                if (registerSection) {
                    registerSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#home');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add typing effect to hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Animated typing effects for hero section
    function animateHeroElements() {
        const heroTitle = document.getElementById('hero-title');
        const missionStatement = document.getElementById('mission-statement');

        // Start title and mission statement at the same time
        if (heroTitle) {
            typeWriter(heroTitle, 'DFWhacks', 150);
        }

        if (missionStatement) {
            // Make mission statement visible and start typing
            missionStatement.style.opacity = '1';
            typeWriter(missionStatement, 'Our mission is to empower the next generation of builders and make technology accessible, inclusive, and fun for students across the DFW area.', 30);
        }
    }

    // Initialize typing effects when page loads
    setTimeout(() => {
        animateHeroElements();
    }, 500);


});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .hero-gradient {
        background-attachment: fixed;
    }
    
    @media (max-width: 768px) {
        .hero-gradient {
            background-attachment: scroll;
        }
    }
`;
document.head.appendChild(style);

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2025-09-27T10:00:00');
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
    }
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);