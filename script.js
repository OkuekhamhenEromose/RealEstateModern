


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            
            // Optional: Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
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
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav__content') && navLinks.classList.contains('active')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        }
    });
    
    const toggleButtons = document.querySelectorAll('.form__type-toggle');
    
    // Add click event listener to each button
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to the clicked button
            this.classList.add('active');
        });
    });

    const feature = document.querySelectorAll('.feature');

    // Option 1: Trigger animation immediately on page load
    feature.forEach(feature => {
        feature.classList.add('animate-in');
    });

    // Property Data
    const properties = [
        {
            id: 1,
            title: "Modern Luxury Villa",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 3200,
            price: "$1,250,000",
            image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: true
        },
        {
            id: 2,
            title: "Downtown Condo",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1500,
            price: "$750,000",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: true,
            statusbtn: "sale"
        },
        {
            id: 3,
            title: "Suburban Family Home",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 2200,
            price: "$550,000",
            image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: true
        },
        {
            id: 4,
            title: "Beachfront Property",
            bedrooms: 5,
            bathrooms: 4,
            sqft: 3800,
            price: "$2,500,000",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: false
        },
        {
            id: 5,
            title: "Mountain Retreat",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1800,
            price: "$450,000",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: false
        },
        {
            id: 6,
            title: "Urban Loft",
            bedrooms: 1,
            bathrooms: 1,
            sqft: 900,
            price: "$350,000",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: false,
            
        }
    ];

    // Testimonial Data
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Home Buyer",
            rating: 5,
            text: "DreamHome helped us find our perfect family home. Their agents were knowledgeable and patient throughout the entire process.",
            image: "https://randomuser.me/api/portraits/women/43.jpg",
            
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Property Investor",
            rating: 5,
            text: "As an investor, I appreciate their market insights and negotiation skills. They've helped me build a profitable portfolio.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            statusbtn: "sale"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "First-time Buyer",
            rating: 4,
            text: "I was nervous about buying my first home, but my agent guided me through every step and made it stress-free.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            statusbtn: "rent"
        },
    ];

    // Render Properties
const propertyContainer = document.querySelector('.property-cards');

properties.filter(property => property.featured).forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    
    propertyCard.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}">
            <span class="property-status ${
                property.statusbtn === 'sale' ? 'status-sale' : 'status-rent'
            }">
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

    // Render Testimonials
    const testimonialContainer = document.querySelector('.testimonial-cards');
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        // Create star rating
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
            <div class="testimonial-rating">
                ${stars}
            </div>
            <div class="testimonial-text">
                <p>"${testimonial.text}"</p>
            </div>
        `;
        
        testimonialContainer.appendChild(testimonialCard);
    });

    // Smooth scrolling for navigation links
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

    // Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar').prepend(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // In a real app, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real app, you would send this to a newsletter service
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }

    // Login/Signup button functionality (placeholder)
    document.querySelector('.login-btn').addEventListener('click', function() {
        alert('Login functionality would go here in a real app.');
    });
    
    document.querySelector('.signup-btn').addEventListener('click', function() {
        alert('Signup functionality would go here in a real app.');
    });

    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    features.forEach(feature => {
        observer.observe(feature);
    });
});

document.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const hero = document.querySelector('.hero-background');
const images = [
    'assets/chproperty.jpg',
    'assets/aboutreal1.jpg',
    'assets/aboutreal2.png'
];
let current = 0;

// Set initial background
function setInitialBackground() {
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${images[current]}')`;
}

// Change background
function changeBackground() {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${images[current]}')`;
}

// Initialize background on load
document.addEventListener('DOMContentLoaded', () => {
    setInitialBackground();
    setInterval(changeBackground, 5000);
}); // Change every 5 seconds