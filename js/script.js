/* ============================================
   JORGE PEIXOTO - REMODELAÇÕES & CONSTRUÇÃO
   JavaScript - Interactive Features
   ============================================ */

// ============================================
// NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// BEFORE/AFTER SLIDER
// ============================================

class BeforeAfterSlider {
    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        this.handle = this.slider.querySelector('.slider-handle');
        this.beforeContainer = this.slider.querySelector('.slider-before-container');
        this.isDragging = false;

        this.handle.addEventListener('mousedown', () => this.startDrag());
        this.handle.addEventListener('touchstart', () => this.startDrag());
        document.addEventListener('mouseup', () => this.stopDrag());
        document.addEventListener('touchend', () => this.stopDrag());
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('touchmove', (e) => this.drag(e));
        
        this.slider.addEventListener('click', (e) => this.handleClick(e));
    }

    startDrag() {
        this.isDragging = true;
        this.handle.style.cursor = 'grabbing';
    }

    stopDrag() {
        this.isDragging = false;
        this.handle.style.cursor = 'grab';
    }

    drag(e) {
        if (!this.isDragging) return;

        const rect = this.slider.getBoundingClientRect();
        let x = e.clientX - rect.left;

        // Handle touch events
        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
        }

        this.updateSlider(x, rect.width);
    }

    handleClick(e) {
        const rect = this.slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        this.updateSlider(x, rect.width);
    }

    updateSlider(x, width) {
        // Constrain x within bounds
        x = Math.max(0, Math.min(x, width));
        
        const percentage = (x / width) * 100;
        
        this.beforeContainer.style.width = percentage + '%';
        this.handle.style.left = percentage + '%';
    }
}

// Initialize sliders
const slider1 = new BeforeAfterSlider('slider1');
const slider2 = new BeforeAfterSlider('slider2');
const slider3 = new BeforeAfterSlider('slider3');

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Simple validation
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Show success message
        alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contacto em breve.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Add any responsive behavior here
}, 250));

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Jorge Peixoto - Remodelações & Construção');
    console.log('Site carregado com sucesso!');
});
