
document.addEventListener('DOMContentLoaded', function() {

     ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });
      ScrollReveal().reveal('nav', { delay: 500, origin: 'top' });
      ScrollReveal().reveal('span', { delay: 700, origin: 'left' });
      ScrollReveal().reveal('.home_description', { delay: 900, origin: 'left' });
      ScrollReveal().reveal('.home_form', { delay: 1200, origin: 'left' });
      ScrollReveal().reveal('.about-image', { delay: 500, origin: 'left' });
      ScrollReveal().reveal('.about-content', { delay: 500, origin: 'right' });
      ScrollReveal().reveal('.about-content .btn', { delay: 500, origin: 'bottom' });
      ScrollReveal().reveal('.services .section-title, .services .section-subtitle', { delay: 500, origin: 'top' });
      ScrollReveal().reveal('.service-cards .service-card', { delay: 500, origin: 'bottom', interval: 300 });
      ScrollReveal().reveal('.service-card .btn', { delay: 500, origin: 'bottom', interval: 300 });
      ScrollReveal().reveal('.properties .section-title, .properties .section-subtitle', { delay: 500, origin: 'top'});
      ScrollReveal().reveal('.property-cards', { delay: 500, origin: 'bottom',});
      ScrollReveal().reveal('.testimonials .section-title, .testimonials .section-subtitle', { delay: 500, origin: 'top',});
      ScrollReveal().reveal('.testimonial-cards', { delay: 500, origin: 'bottom',});
      ScrollReveal().reveal('.footer-section', { delay: 500, origin: 'bottom', interval: 300});     



    // ===== Mobile Navigation =====
    const navToggle = document.querySelector('.nav-toggle-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (navToggle && navLinks) {
        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav__content') && navLinks.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        });
    }

    if (navLinksItems.length > 0) {
        // Close menu when a link is clicked
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                }

                // Smooth scroll to section
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // ===== Form Toggle Buttons =====
    const toggleButtons = document.querySelectorAll('.form__type-toggle');
    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // ===== Property Cards Rendering =====
    const propertyContainer = document.querySelector('.property-cards');
    
const properties = [
    {
        id: 1,
        featured: true,
        title: "Modern Apartment",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1200,
        price: "$350,000",
        statusbtn: "sale",
        image: "assets/aboutreal3.jpg"
    },
    {
        id: 2,
        featured: true,
        title: "Luxury Villa",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 3200,
        price: "$1,200,000",
        statusbtn: "sale",
        image: "assets/chrealestate2.jpg"
    },
    {
        id: 3,
        featured: true,
        title: "Cozy Studio",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 600,
        price: "$1,200/month",
        statusbtn: "rent",
        image: "assets/project-img.jpeg"
    }
];

    if (propertyContainer) {
        properties.filter(property => property.featured).forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                    <span class="property-status ${property.statusbtn === 'sale' ? 'status-sale' : 'status-rent'}">
                        ${property.statusbtn === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                    </span>
                </div>
                <div class="property-details">
                    <h3>${property.title}</h3>
                    <div class="property-info">
                        <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                        <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                        <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span>
                    </div>
                    <div class="property-price">${property.price}</div>
                    <a href="#" class="btn property-btn">View Details</a>
                </div>
            `;
            propertyContainer.appendChild(propertyCard);
        });
    }

    // ===== Testimonial Cards Rendering =====
    const testimonialContainer = document.querySelector('.testimonial-cards');
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Home Buyer",
        rating: 5,
        text: "The team made my home buying experience seamless and stress-free. Highly recommend their services!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Property Investor",
        rating: 4,
        text: "Professional service with great attention to detail. Found me the perfect investment property.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "First-time Buyer",
        rating: 5,
        text: "As a first-time buyer, I was nervous, but they guided me through every step of the process.",
        image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
];

    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            let stars = '';
            for (let i = 0; i < testimonial.rating; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            testimonialCard.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-image">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                    </div>
                    <div class="testimonial-author">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <div class="testimonial-rating">${stars}</div>
                <div class="testimonial-text"><p>"${testimonial.text}"</p></div>
            `;
            testimonialContainer.appendChild(testimonialCard);
        });
    }

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Form Handling =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }

    // ===== Login/Signup Buttons =====
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    if (loginBtn) loginBtn.addEventListener('click', () => alert('Login functionality would go here.'));
    if (signupBtn) signupBtn.addEventListener('click', () => alert('Signup functionality would go here.'));

    // ===== Intersection Observer for Animations =====
    const features = document.querySelectorAll('.feature');
    if (features.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        features.forEach(feature => observer.observe(feature));
    }

    // ===== Scroll-Based Navbar Effect =====
    document.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // ===== Hero Background Slider =====
    const hero = document.querySelector('.hero-background');
    if (hero) {
        const images = [
            'assets/chproperty.jpg',
            'assets/aboutreal1.jpg',
            'assets/home-image.webp'
        ];
        let current = 0;

        function setInitialBackground() {
            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${images[current]}')`;
        }

        function changeBackground() {
            current = (current + 1) % images.length;
            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${images[current]}')`;
        }

        setInitialBackground();
        setInterval(changeBackground, 5000);
    }
});