// Initialize AOS
AOS.init({
    duration: 800,
    once: false,
    mirror: true
});

// Typed.js initialization
const typed = new Typed('#typed-text', {
    strings: [
        "Développeur C#",
        "Développeur Web",
        "Créateur d'Applications",
        "Expert en Solutions Numériques"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Navbar scroll effect
const navbar = document.querySelector('#mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.');
        this.reset();
    });
}

// Portfolio filter functionality
const portfolioFilters = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        // Remove active class from all filters
        portfolioFilters.forEach(f => f.classList.remove('active'));
        // Add active class to clicked filter
        this.classList.add('active');
        
        const category = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});