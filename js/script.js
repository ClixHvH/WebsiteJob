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

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// BEFORE/AFTER SLIDER
// ============================================

class BeforeAfterSlider {
    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        if (!this.slider) return;

        this.handle = this.slider.querySelector('.slider-handle');
        this.beforeContainer = this.slider.querySelector('.slider-before-container');
        this.isDragging = false;

        // Events
        this.slider.addEventListener('mousedown', (e) => this.startDrag(e));
        this.slider.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
        
        window.addEventListener('mousemove', (e) => this.drag(e));
        window.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
        
        window.addEventListener('mouseup', () => this.stopDrag());
        window.addEventListener('touchend', () => this.stopDrag());
        
        // Initial state
        this.updateSlider(this.slider.offsetWidth / 2, this.slider.offsetWidth);
    }

    startDrag(e) {
        this.isDragging = true;
        this.slider.classList.add('dragging');
        this.drag(e);
    }

    stopDrag() {
        this.isDragging = false;
        this.slider.classList.remove('dragging');
    }

    drag(e) {
        if (!this.isDragging) return;
        
        // Prevent default behavior for touch to avoid scrolling
        if (e.type === 'touchmove' || e.type === 'touchstart') {
            e.preventDefault();
        }

        const rect = this.slider.getBoundingClientRect();
        let x;

        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
        } else {
            x = e.clientX - rect.left;
        }

        this.updateSlider(x, rect.width);
    }

    updateSlider(x, width) {
        x = Math.max(0, Math.min(x, width));
        const percentage = (x / width) * 100;
        
        if (this.beforeContainer) this.beforeContainer.style.width = percentage + '%';
        if (this.handle) this.handle.style.left = percentage + '%';
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sliders
    const sliders = ['slider1', 'slider2', 'slider3', 'slider4', 'slider5'];
    sliders.forEach(id => {
        if (document.getElementById(id)) {
            new BeforeAfterSlider(id);
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// DYNAMIC FORMSPREE SUBJECT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('emailSubject');

    if (contactForm && nameInput && phoneInput && subjectInput) {
        const updateSubject = () => {
            const name = nameInput.value || 'Novo Pedido';
            const phone = phoneInput.value || '';
            subjectInput.value = `${name} - ${phone}`;
        };

        nameInput.addEventListener('input', updateSubject);
        phoneInput.addEventListener('input', updateSubject);
    }
});
