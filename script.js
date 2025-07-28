// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize animations
    initScrollAnimations();
    initCountdownTimer();
    initParticleEffect();
    initTypingEffect();
});

// Enhanced scroll animations with slide-up effect
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('slide-up-title') || entry.target.classList.contains('slide-up-card')) {
                    entry.target.style.animation = 'slideUpFade 0.8s ease-out forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    // Observe all elements with slide-up classes
    const elements = document.querySelectorAll('.slide-up-title, .slide-up-card');
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Countdown timer to event
function initCountdownTimer() {
    const eventDate = new Date('2025-09-27T10:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">Days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">Hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">Minutes</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-label">Seconds</span>
                    </div>
                `;
            }
        } else {
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = '<div class="event-live">Event is Live! 🚀</div>';
            }
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Particle effect
function initParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    let particleCount = 0;
    const maxParticles = 15;
    
    function createParticle() {
        if (particleCount >= maxParticles) return;
        
        particleCount++;
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(251, 146, 60, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat 12s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                particleCount--;
            }
        }, 12000);
    }
    
    setInterval(createParticle, 800);
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (!subtitle) return;
    
    const text = "Build AI-Powered Solutions That Matter";
    let i = 0;
    subtitle.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Prize card sparkle effect
document.addEventListener('DOMContentLoaded', function() {
    const prizeCards = document.querySelectorAll('.prize-card');
    
    prizeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createSparkles(this);
        });
    });
});

function createSparkles(element) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #fbbf24;
                border-radius: 50%;
                pointer-events: none;
                animation: sparkleAnimation 0.8s ease-out forwards;
            `;
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = Math.random() * rect.width + 'px';
            sparkle.style.top = Math.random() * rect.height + 'px';
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 800);
        }, i * 150);
    }
}

// Scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #fb923c, #fdba74);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollButton);
    
    let ticking = false;
    function updateScrollButton() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'scale(1)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'scale(0.8)';
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    });
});

// Loading screen
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #020617 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <h2 style="font-family: 'Segoe UI', sans-serif;">Loading DFWHacks...</h2>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loader);
            }, 500);
        }, 1000);
    });
});

// Confetti burst on CTA button hover
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function(e) {
            createConfettiBurst(e.target);
        });
    }
});

function createConfettiBurst(button) {
    const rect = button.getBoundingClientRect();
    const confettiColors = ['#fb923c', '#fdba74', '#fbbf24', '#fff', '#ffd700', '#ea580c'];
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = (rect.left + rect.width / 2) + 'px';
        confetti.style.top = (rect.top + rect.height / 2) + 'px';
        confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.opacity = 0;
            confetti.style.transform += ` translate(${(Math.random()-0.5)*150}px, ${-Math.random()*100}px) scale(${0.5 + Math.random()})`;
        }, 10);

        setTimeout(() => {
            confetti.remove();
        }, 1200);
    }
}