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
        quote: "S.K. Enterprise often receives positive feedback for the quality of its products and services, The Company’s commitment to quality are frequently cited as a key strength.",
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
        quote: "We would like to extend our sincere gratitude for S.K. Enterprise continued support and exceptional service in providing high-quality fabric for our testing materials. Your commitment to excellence, timely deliveries, and consistent product standards has played a vital role in helping us maintain the integrity and precision of our testing processes. It’s rare to find a partner who combines reliability with such a strong focus on quality.",
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
