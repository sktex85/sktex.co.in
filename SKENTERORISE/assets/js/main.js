// Bootstrap 5 Scrollspy auto-highlights active nav-link
// Ensure nav-link.active gets gold color
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('focus', function () {
            this.classList.add('active');
        });
        link.addEventListener('blur', function () {
            this.classList.remove('active');
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
// Back to Top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Contact form validation and feedback
(function () {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    const success = document.getElementById('contactSuccess');
    if (form && name && email && message && success) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;
            // Name validation
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                valid = false;
            } else {
                name.classList.remove('is-invalid');
            }
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
                email.classList.add('is-invalid');
                valid = false;
            } else {
                email.classList.remove('is-invalid');
            }
            // Message validation
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                valid = false;
            } else {
                message.classList.remove('is-invalid');
            }
            if (valid) {
                // Simulate successful submission
                form.reset();
                success.classList.remove('d-none');
                setTimeout(() => success.classList.add('d-none'), 4000);
            }
        });
        // Real-time validation
        [name, email, message].forEach(input => {
            input.addEventListener('input', function () {
                this.classList.remove('is-invalid');
            });
        });
    }
})();
// Set dynamic copyright year
(function () {
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})(); 