// Carousel Generator for S.K.Enterprise
// This script generates sliding window carousels from data arrays

// Product Data - Add/Edit products here only
const productsData = [
    {
        image: "assets/img/1 Cotton Hank.webp",
        alt: "Cotton Hank - S.K.Enterprise",
        title: "Cotton Hank",
        description: "Premium quality cotton hank for various textile applications.",
        link: "products.html"
    },
    {
        image: "assets/img/2 Cotton Fabric 1040.webp",
        alt: "Cotton Fabric 1040 - S.K.Enterprise",
        title: "Cotton Fabric For Dying & Print",
        description: "High-quality cotton fabric with excellent durability and comfort.",
        link: "products.html"
    },
    {
        image: "assets/img/3 Cotton Fabric (Print) 1030.webp",
        alt: "Cotton Fabric Print 1030 - S.K.Enterprise",
        title: "Cotton Fabric For Print",
        description: "Beautifully printed cotton fabric with vibrant designs and patterns.",
        link: "products.html"
    },
    {
        image: "assets/img/4 Cotton Hosiery Single Jersey.webp",
        alt: "Cotton Hosiery Single Jersey - S.K.Enterprise",
        title: "Cotton Hosiery Single Jersey",
        description: "Comfortable and stretchable cotton hosiery fabric for activewear.",
        link: "products.html"
    },
    {
        image: "assets/img/5 Cotton Hosiery Double Jersey.webp",
        alt: "Cotton Hosiery Double Jersey - S.K.Enterprise",
        title: "Cotton Hosiery Double Jersey",
        description: "Premium double jersey cotton fabric with enhanced durability.",
        link: "products.html"
    },
    {
        image: "assets/img/6 Nylon Hosiery.webp",
        alt: "Nylon Hosiery - S.K.Enterprise",
        title: "Nylon Hosiery",
        description: "Lightweight and durable nylon hosiery for various applications.",
        link: "products.html"
    },
    {
        image: "assets/img/7 Woolen Fabric.webp",
        alt: "Woolen Fabric - S.K.Enterprise",
        title: "Woolen Fabric & Yarn",
        description: "Warm and comfortable woolen fabric for various applications.",
        link: "products.html"
    },
    {
        image: "assets/img/8 Silk Fabric .webp",
        alt: "Silk Fabric - S.K.Enterprise",
        title: "Silk Fabric",
        description: "Luxurious and soft silk fabric for various applications.",
        link: "products.html"
    },
    {
        image: "assets/img/14 Polyester Fabric.webp",
        alt: "Polyester Fabric - S.K.Enterprise",
        title: "Polyester Fabric & Hosiery",
        description: "High-quality polyester fabric with excellent durability and comfort.",
        link: "products.html"
    }
];

// Testimonial Data - Add/Edit testimonials here only
const testimonialsData = [
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - John D.",
        name: "John D.",
        role: "Textile Retailer",
        quote: "S.K.Enterprise delivers exceptional quality and service. Their fabrics have elevated our product line and impressed our customers.",
        rating: 4.5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Priya S.",
        name: "Priya S.",
        role: "Fashion Designer",
        quote: "Their innovative designs and timely delivery have made S.K.Enterprise our go-to textile partner for years.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Rajesh K.",
        name: "Rajesh K.",
        role: "Export Manager",
        quote: "We value their professionalism and global reach. S.K.Enterprise is a trusted partner for our international business.",
        rating: 4
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Emily R.",
        name: "Emily R.",
        role: "Boutique Owner",
        quote: "The variety and quality of textiles from S.K.Enterprise are unmatched. Our boutique customers love the new collections!",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "Ahmed F.",
        role: "Garment Manufacturer",
        quote: "Reliable supply, great communication, and top-notch fabrics. S.K.Enterprise is a key part of our success.",
        rating: 4.5
    }
];

// Generate star rating HTML
function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="bi bi-star-fill"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="bi bi-star-half"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="bi bi-star"></i>';
    }

    return starsHTML;
}

// Generate product card HTML
function generateProductCard(product) {
    return `
        <div class="col-md-4 mb-4 mb-md-0">
            <div class="card h-100 shadow-sm border-0">
                <img src="${product.image}" class="card-img-top" alt="${product.alt}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-navy">${product.title}</h5>
                    <p class="card-text text-navy">${product.description}</p>
                    <a href="${product.link}" class="btn btn-gold mt-auto">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// Generate testimonial card HTML
function generateTestimonialCard(testimonial) {
    return `
        <div class="col-md-4 mb-4 mb-md-0">
            <div class="card border-0 shadow-sm p-4 text-center h-100">
                <img src="${testimonial.image}" alt="${testimonial.alt}"
                    class="rounded-circle mx-auto mb-3 width-80 height-80 object-cover border-gold bg-beige" loading="lazy">
                <h5 class="fw-bold mb-0 text-navy">${testimonial.name}</h5>
                <div class="mb-2 text-coral fs-1">${testimonial.role}</div>
                <p class="mb-3 text-navy">"${testimonial.quote}"</p>
                <div class="text-gold">
                    ${generateStars(testimonial.rating)}
                </div>
            </div>
        </div>
    `;
}

// Create sliding window carousel with single item transitions
function createSlidingCarousel(data, containerId, indicatorsId, itemsPerSlide = 3) {
    const container = document.getElementById(containerId);
    const indicatorsContainer = document.getElementById(indicatorsId);

    if (!container || !indicatorsContainer) return;

    // Create a single carousel item with all items
    let allItemsHTML = '';
    data.forEach((item, index) => {
        if (containerId === 'productCarouselInner') {
            allItemsHTML += generateProductCard(item);
        } else if (containerId === 'testimonialCarouselInner') {
            allItemsHTML += generateTestimonialCard(item);
        }
    });

    // Create single carousel item with all items
    container.innerHTML = `
        <div class="carousel-item active">
            <div class="row justify-content-center" id="${containerId.replace('Inner', '')}Row">
                ${allItemsHTML}
            </div>
        </div>
    `;

    // Generate indicators
    const totalSlides = data.length;
    let indicatorsHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const isActive = i === 0 ? 'active' : '';
        indicatorsHTML += `
            <button type="button" data-bs-target="#${containerId.replace('Inner', '')}" 
                data-bs-slide-to="${i}" class="${isActive}" 
                aria-current="${isActive ? 'true' : 'false'}" aria-label="Slide ${i + 1}">
            </button>
        `;
    }
    indicatorsContainer.innerHTML = indicatorsHTML;

    // Add custom sliding functionality
    addSlidingFunctionality(containerId, data.length, itemsPerSlide);
}

// Add sliding functionality to carousel
function addSlidingFunctionality(containerId, totalItems, itemsPerSlide) {
    const carouselId = containerId.replace('Inner', '');
    const carousel = document.getElementById(carouselId);
    const row = document.getElementById(containerId.replace('Inner', '') + 'Row');

    if (!carousel || !row) return;

    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;

    // Add CSS for smooth transitions and proper overflow handling
    const style = document.createElement('style');
    style.textContent = `
        #${carouselId} {
            overflow: hidden !important;
            position: relative;
        }
        #${carouselId} .carousel-inner {
            overflow: hidden !important;
        }
        #${carouselId}Row {
            transition: transform 0.6s ease-in-out;
            display: flex;
            flex-wrap: nowrap;
            width: calc(100% * ${totalItems / itemsPerSlide});
        }
        #${carouselId}Row > div {
            flex: 0 0 calc(100% / ${totalItems});
            max-width: calc(100% / ${totalItems});
            min-width: calc(100% / ${totalItems});
        }
        @media (max-width: 767.98px) {
            #${carouselId}Row > div {
                flex: 0 0 100%;
                max-width: 100%;
                min-width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    // Function to slide to specific index with infinite loop
    function slideToIndex(index) {
        if (isTransitioning) return;

        isTransitioning = true;
        currentIndex = index;
        const translateX = -(index * (100 / totalItems));
        row.style.transform = `translateX(${translateX}%)`;

        // Update indicators
        const indicators = document.querySelectorAll(`#${carouselId}Indicators button`);
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    // Function to go to next slide with infinite loop
    function nextSlide() {
        if (isTransitioning) return;

        const nextIndex = (currentIndex + 1) % totalItems;
        slideToIndex(nextIndex);
    }

    // Function to go to previous slide with infinite loop
    function prevSlide() {
        if (isTransitioning) return;

        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        slideToIndex(prevIndex);
    }

    // Remove Bootstrap carousel event listeners to prevent double movement
    carousel.removeEventListener('slide.bs.carousel', function () { });

    // Add custom navigation
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');

    if (prevButton) {
        // Remove existing event listeners
        prevButton.replaceWith(prevButton.cloneNode(true));
        const newPrevButton = carousel.querySelector('.carousel-control-prev');

        newPrevButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
            resetAutoPlay();
        });
    }

    if (nextButton) {
        // Remove existing event listeners
        nextButton.replaceWith(nextButton.cloneNode(true));
        const newNextButton = carousel.querySelector('.carousel-control-next');

        newNextButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
            resetAutoPlay();
        });
    }

    // Add indicator click handlers
    const indicators = document.querySelectorAll(`#${carouselId}Indicators button`);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            slideToIndex(index);
            resetAutoPlay();
        });
    });

    // Auto-play functionality
    function startAutoPlay() {
        stopAutoPlay(); // Clear any existing interval
        autoPlayInterval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 4000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialize position and start auto-play
    slideToIndex(0);
    startAutoPlay();
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create product carousel
    createSlidingCarousel(productsData, 'productCarouselInner', 'productCarouselIndicators', 3);

    // Create testimonial carousel
    createSlidingCarousel(testimonialsData, 'testimonialCarouselInner', 'testimonialCarouselIndicators', 3);
});
