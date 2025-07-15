document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your form validation and submission logic here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Scroll-triggered Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    });

    document.querySelectorAll('.about-us-preview, .products-showcase, .why-choose-us, .testimonials, .latest-updates, .contact-section').forEach(section => {
        observer.observe(section);
    });
});
