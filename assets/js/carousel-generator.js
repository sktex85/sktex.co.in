// Improved Carousel Generator for S.K.Enterprise
// Responsive sliding window carousels with optimal mobile experience

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
        name: "MAHICKRA CHEMICALS LIMITED",
        role: "Mr. Mitesh Gandh",
        quote: "Our association with S.K. Enterprises / Madhuram Traders spans over 25 years, and it has been a truly reliable partnership. Their consistent support in fulfilling all our requirements has been commendable. We value their professionalism and look forward to continuing this strong relationship.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Priya S.",
        name: "ORNET INTERMEDIATES PRIVATE LIMITED",
        role: "Mr. Ashok Mehta",
        quote: "We have been associated with S.K Enterprise since 1992. The durability and performance of the textile products from S.K. Enterprise stand out. Their materials process well during dyeing and finishing, reducing wastage and saving us costs.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Rajesh K.",
        name: "SUDEEP INDUSTRIES",
        role: "Mr. Jaydeepsinh Devda",
        quote: "We have been working with S.K. Enterprise for the past 12 years, they have consistently provided high-quality all types of laboratory dyes testing fabrics. The team at S.K. Enterprise is professional, reliable, and responsive to our requirements. They maintain timely deliveries & Good service",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Emily R.",
        name: "CRAYON INDIA",
        role: "Mr. Ketan Dudhat",
        quote: "The fabric materials we source from S.K. Enterprise have always met international standards. Their commitment to maintaining quality gives us the confidence to serve our customers better.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "AVANI DYE CHEM INDUSTRIES",
        role: "Mr. Shirin Parikh",
        quote: "S.K. Enterprise often receives positive feedback for the quality of its products and services, The Company's commitment to quality are frequently cited as a key strength.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "RAJASTHAN DYES AND CHEMICALS, ALWAR.",
        role: "Mr. Vipul Sacheti",
        quote: "Whenever we had urgent requirements for testing fabrics, S.K. Enterprise stepped in promptly. Their reliability and consistent support have made them our trusted supplier of choice. Our partnership has greatly enhanced our supply chain efficiency, with timely delivery and accurate weights from hank to fabrics.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "DYTEK LAB",
        role: "Mr. Deep Vaghela",
        quote: "We have been sourcing all our testing materials from S.K. Enterprises right from the beginning (Since 2001). What sets them apart is their customer-first approach. They not only deliver high-quality fabrics and solutions but also guide us with the best options for our applications.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "R.K. TEX LAB",
        role: "Mr. Ravi Dudhat",
        quote: "We have been sourcing testing fabrics from S.K. Enterprise for several years, Our experience with S.K. Enterprise has been excellent in terms of both product and service. Their fabrics and all materials are of consistent quality, and their timely delivery ensures smooth functioning of our testing process. They have become our go-to supplier, not just for materials but also for dependable support.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "ABS LABORATORIES, MUMBAI",
        role: "Mr. Dhruv Shah",
        quote: "We have been sourcing testing fabrics from S.K. Enterprise from many years and we are very satisfied with their consistent quality, reliability, wide range and quick response which Moxesh Shah provides.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "S BOHRA LABORATORY, PALI.",
        role: "Mr. Naresh Bohra",
        quote: "We would like to extend our sincere gratitude for S.K. Enterprise continued support and exceptional service in providing high-quality fabric for our testing materials. Your commitment to excellence, timely deliveries, and consistent product standards has played a vital role in helping us maintain the integrity and precision of our testing processes. It's rare to find a partner who combines reliability with such a strong focus on quality.",
        rating: 5
    },
    {
        image: "assets/img/testimonial.png",
        alt: "Client photo - Ahmed F.",
        name: "GAYATRI INTERNATIONAL, GHAZIABAD.",
        role: "Mr. Atul Dhawan",
        quote: "Our partnership with S.K. Enterprise has added real value to our business. Not only do they supply high-quality fabrics, but they also guide us with the best options for different applications. This kind of technical support and industry knowledge is rare, and it helps us make the right decisions for our production.",
        rating: 5
    }
];

// Configuration for responsive breakpoints
const breakpoints = {
    mobile: 576,
    tablet: 768,
    desktop: 992
};

// Get items per slide based on screen size
function getItemsPerSlide(screenWidth) {
    if (screenWidth < breakpoints.mobile) return 1;
    if (screenWidth < breakpoints.desktop) return 2;
    return 3;
}

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

// Generate product card HTML with improved mobile styling
function generateProductCard(product) {
    return `
        <div class="carousel-slide-item">
            <div class="card h-100 shadow-sm border-0 carousel-card">
                <div class="card-img-container">
                    <img src="${product.image}" class="card-img-top carousel-card-img" alt="${product.alt}" loading="lazy">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-navy mb-2">${product.title}</h5>
                    <p class="card-text text-navy mb-3 flex-grow-1">${product.description}</p>
                    <a href="${product.link}" class="btn btn-gold mt-auto">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// Generate testimonial card HTML with improved mobile styling
function generateTestimonialCard(testimonial) {
    return `
        <div class="carousel-slide-item">
            <div class="card border-0 shadow-sm p-3 p-md-4 text-center h-100 carousel-card">
                <div class="testimonial-img-container mb-3">
                    <img src="${testimonial.image}" alt="${testimonial.alt}"
                        class="rounded-circle mx-auto testimonial-img" loading="lazy">
                </div>
                <h5 class="fw-bold mb-1 text-navy testimonial-name">${testimonial.name}</h5>
                <div class="mb-2 text-coral fs-6 testimonial-role">${testimonial.role}</div>
                <p class="mb-3 text-navy testimonial-quote">"${testimonial.quote}"</p>
                <div class="text-gold mt-auto">
                    ${generateStars(testimonial.rating)}
                </div>
            </div>
        </div>
    `;
}

// Add comprehensive responsive CSS
function addResponsiveStyles(containerId, totalItems) {
    const carouselId = containerId.replace('Inner', '');
    const styleId = `style-${carouselId}`;

    // Remove existing style if it exists
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
        existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        /* Base carousel styles */
        #${carouselId} {
            overflow: hidden !important;
            position: relative;
        }
        
        #${carouselId} .carousel-inner {
            overflow: hidden !important;
            padding: 10px 0;
        }
        
        #${carouselId}Row {
            display: flex;
            flex-wrap: nowrap;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            align-items: stretch;
        }
        
        /* Slide item base styles */
        .carousel-slide-item {
            flex-shrink: 0;
            padding: 0 10px;
            box-sizing: border-box;
        }
        
        /* Card styling improvements */
        .carousel-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .carousel-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        
        /* Product card specific styles */
        .card-img-container {
            overflow: hidden;
            height: 200px;
            position: relative;
        }
        
        .carousel-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .carousel-card:hover .carousel-card-img {
            transform: scale(1.05);
        }
        
        /* Testimonial specific styles */
        .testimonial-img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
        }
        
        .testimonial-img {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border: 3px solid #f8f9fa;
        }
        
        .testimonial-name {
            font-size: 0.95rem;
            line-height: 1.3;
            word-break: break-word;
        }
        
        .testimonial-role {
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .testimonial-quote {
            font-size: 0.9rem;
            line-height: 1.5;
            text-align: left !important;
            word-break: break-word;
            hyphens: auto;
        }
        
        /* Desktop: 3 items per slide */
        @media (min-width: ${breakpoints.desktop}px) {
            .carousel-slide-item {
                width: 33.333333%;
                flex: 0 0 33.333333%;
            }
            
            .card-img-container {
                height: 220px;
            }
            
            .testimonial-img {
                width: 80px;
                height: 80px;
            }
            
            .testimonial-name {
                font-size: 1rem;
            }
            
            .testimonial-role {
                font-size: 0.9rem;
            }
            
            .testimonial-quote {
                font-size: 0.95rem;
            }
        }
        
        /* Tablet: 2 items per slide */
        @media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.desktop - 1}px) {
            .carousel-slide-item {
                width: 50%;
                flex: 0 0 50%;
            }
            
            .card-img-container {
                height: 200px;
            }
        }
        
        /* Mobile: 1 item per slide */
        @media (max-width: ${breakpoints.mobile - 1}px) {
            .carousel-slide-item {
                width: 100%;
                flex: 0 0 100%;
                padding: 0 5px;
            }
            
            #${carouselId} .carousel-inner {
                padding: 5px 0;
            }
            
            .carousel-card {
                margin: 0 auto;
                max-width: 350px;
            }
            
            .card-img-container {
                height: 180px;
            }
            
            .card-body {
                padding: 1rem !important;
            }
            
            .testimonial-img {
                width: 60px;
                height: 60px;
            }
            
            .testimonial-name {
                font-size: 0.9rem;
            }
            
            .testimonial-role {
                font-size: 0.8rem;
            }
            
            .testimonial-quote {
                font-size: 0.85rem;
                text-align: center !important;
            }
            
            /* Mobile navigation improvements */
            #${carouselId} .carousel-control-prev,
            #${carouselId} .carousel-control-next {
                width: 40px;
                height: 40px;
                background: rgba(0,0,0,0.6);
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
            }
            
            #${carouselId} .carousel-control-prev {
                left: 10px;
            }
            
            #${carouselId} .carousel-control-next {
                right: 10px;
            }
            
            #${carouselId} .carousel-control-prev-icon,
            #${carouselId} .carousel-control-next-icon {
                width: 20px;
                height: 20px;
            }
        }
        
        /* Indicators styling */
        #${carouselId} .carousel-indicators {
            margin-bottom: -10px;
        }
        
        #${carouselId} .carousel-indicators button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin: 0 3px;
            border: none;
            background-color: rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        
        #${carouselId} .carousel-indicators button.active {
            background-color: #d4af37;
            transform: scale(1.2);
        }
        
        /* Touch/swipe enhancements */
        @media (max-width: ${breakpoints.tablet}px) {
            #${carouselId} {
                touch-action: pan-y pinch-zoom;
            }
            
            .carousel-slide-item {
                user-select: none;
            }
        }
    `;

    document.head.appendChild(style);
}

// Enhanced carousel creation with responsive features
function createSlidingCarousel(data, containerId, indicatorsId) {
    const container = document.getElementById(containerId);
    const indicatorsContainer = document.getElementById(indicatorsId);

    if (!container || !indicatorsContainer || !data.length) return;

    // Generate all items HTML
    let allItemsHTML = '';
    data.forEach((item, index) => {
        if (containerId === 'productCarouselInner') {
            allItemsHTML += generateProductCard(item);
        } else if (containerId === 'testimonialCarouselInner') {
            allItemsHTML += generateTestimonialCard(item);
        }
    });

    // Create carousel structure
    container.innerHTML = `
        <div class="carousel-item active">
            <div class="carousel-row" id="${containerId.replace('Inner', '')}Row">
                ${allItemsHTML}
            </div>
        </div>
    `;

    // Add responsive styles
    addResponsiveStyles(containerId, data.length);

    // Generate indicators based on responsive logic
    generateResponsiveIndicators(containerId, indicatorsId, data.length);

    // Add enhanced sliding functionality
    addResponsiveSlidingFunctionality(containerId, data);
}

// Generate indicators based on current screen size
function generateResponsiveIndicators(containerId, indicatorsId, totalItems) {
    const indicatorsContainer = document.getElementById(indicatorsId);
    const currentItemsPerSlide = getItemsPerSlide(window.innerWidth);
    const totalSlides = Math.max(1, totalItems - currentItemsPerSlide + 1);

    let indicatorsHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const isActive = i === 0 ? 'active' : '';
        indicatorsHTML += `
            <button type="button" data-bs-target="#${containerId.replace('Inner', '')}" 
                data-bs-slide-to="${i}" class="${isActive}" 
                aria-current="${isActive ? 'true' : 'false'}" 
                aria-label="Slide ${i + 1}">
            </button>
        `;
    }
    indicatorsContainer.innerHTML = indicatorsHTML;
}

// Enhanced sliding functionality with touch support and responsive behavior
function addResponsiveSlidingFunctionality(containerId, data) {
    const carouselId = containerId.replace('Inner', '');
    const carousel = document.getElementById(carouselId);
    const row = document.getElementById(containerId.replace('Inner', '') + 'Row');

    if (!carousel || !row) return;

    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;
    let currentItemsPerSlide = getItemsPerSlide(window.innerWidth);

    // Touch/swipe variables
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTime = 0;

    // Calculate total slides based on current screen size
    function getTotalSlides() {
        return Math.max(1, data.length - currentItemsPerSlide + 1);
    }

    // Update layout on resize
    function handleResize() {
        const newItemsPerSlide = getItemsPerSlide(window.innerWidth);
        if (newItemsPerSlide !== currentItemsPerSlide) {
            currentItemsPerSlide = newItemsPerSlide;
            currentIndex = Math.min(currentIndex, getTotalSlides() - 1);
            generateResponsiveIndicators(containerId, `${carouselId}Indicators`, data.length);
            slideToIndex(currentIndex, false);
        }
    }

    // Slide to specific index
    function slideToIndex(index, animate = true) {
        if (isTransitioning && animate) return;

        const totalSlides = getTotalSlides();
        currentIndex = Math.max(0, Math.min(index, totalSlides - 1));

        if (animate) {
            isTransitioning = true;
            setTimeout(() => { isTransitioning = false; }, 600);
        }

        // Calculate translate percentage based on responsive layout
        let translateX;
        if (currentItemsPerSlide === 1) {
            translateX = -(currentIndex * 100);
        } else if (currentItemsPerSlide === 2) {
            translateX = -(currentIndex * 50);
        } else {
            translateX = -(currentIndex * (100 / 3));
        }

        row.style.transform = `translateX(${translateX}%)`;
        updateIndicators();
    }

    // Update active indicator
    function updateIndicators() {
        const indicators = document.querySelectorAll(`#${carouselId}Indicators button`);
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }

    // Navigation functions
    function nextSlide() {
        if (isTransitioning) return;
        const totalSlides = getTotalSlides();
        const nextIndex = currentIndex >= totalSlides - 1 ? 0 : currentIndex + 1;
        slideToIndex(nextIndex);
    }

    function prevSlide() {
        if (isTransitioning) return;
        const totalSlides = getTotalSlides();
        const prevIndex = currentIndex <= 0 ? totalSlides - 1 : currentIndex - 1;
        slideToIndex(prevIndex);
    }

    // Touch/swipe event handlers
    function handleTouchStart(e) {
        startX = e.touches ? e.touches[0].clientX : e.clientX;
        currentX = startX;
        isDragging = true;
        startTime = Date.now();
        stopAutoPlay();
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.touches ? e.touches[0].clientX : e.clientX;
    }

    function handleTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        const deltaX = currentX - startX;
        const deltaTime = Date.now() - startTime;
        const velocity = Math.abs(deltaX) / deltaTime;

        // Determine if swipe was significant enough
        if (Math.abs(deltaX) > 50 || velocity > 0.5) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }

        resetAutoPlay();
    }

    // Setup navigation controls
    function setupControls() {
        // Previous button
        const prevButton = carousel.querySelector('.carousel-control-prev');
        if (prevButton) {
            prevButton.replaceWith(prevButton.cloneNode(true));
            const newPrevButton = carousel.querySelector('.carousel-control-prev');
            newPrevButton.addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
                resetAutoPlay();
            });
        }

        // Next button
        const nextButton = carousel.querySelector('.carousel-control-next');
        if (nextButton) {
            nextButton.replaceWith(nextButton.cloneNode(true));
            const newNextButton = carousel.querySelector('.carousel-control-next');
            newNextButton.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
                resetAutoPlay();
            });
        }

        // Indicator buttons
        const indicators = document.querySelectorAll(`#${carouselId}Indicators button`);
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                slideToIndex(index);
                resetAutoPlay();
            });
        });
    }

    // Touch event setup
    function setupTouchEvents() {
        // Mouse events for desktop
        row.addEventListener('mousedown', handleTouchStart);
        row.addEventListener('mousemove', handleTouchMove);
        row.addEventListener('mouseup', handleTouchEnd);
        row.addEventListener('mouseleave', handleTouchEnd);

        // Touch events for mobile
        row.addEventListener('touchstart', handleTouchStart, { passive: false });
        row.addEventListener('touchmove', handleTouchMove, { passive: false });
        row.addEventListener('touchend', handleTouchEnd);
    }

    // Auto-play functionality
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            if (!isTransitioning && !isDragging) {
                nextSlide();
            }
        }, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        setTimeout(startAutoPlay, 2000); // Restart after 2 seconds
    }

    // Event listeners
    window.addEventListener('resize', handleResize);
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    setupControls();
    setupTouchEvents();
    slideToIndex(0, false);
    startAutoPlay();

    // Cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
        stopAutoPlay();
    };
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create responsive carousels
    createSlidingCarousel(productsData, 'productCarouselInner', 'productCarouselIndicators');
    createSlidingCarousel(testimonialsData, 'testimonialCarouselInner', 'testimonialCarouselIndicators');

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            const activeCarousel = document.querySelector('.carousel:hover');
            if (activeCarousel) {
                const prevBtn = activeCarousel.querySelector('.carousel-control-prev');
                if (prevBtn) prevBtn.click();
            }
        } else if (e.key === 'ArrowRight') {
            const activeCarousel = document.querySelector('.carousel:hover');
            if (activeCarousel) {
                const nextBtn = activeCarousel.querySelector('.carousel-control-next');
                if (nextBtn) nextBtn.click();
            }
        }
    });
});