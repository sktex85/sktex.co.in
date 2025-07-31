// Gallery Filter and Lightbox Functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImageWrappers = document.querySelectorAll('.gallery-image-wrapper');

    // Lightbox elements
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    let currentImageIndex = 0;
    let visibleImages = [];

    // Prevent filter buttons from triggering lightbox
    filterButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update visible images array
            updateVisibleImages();
        });
    });

    // Update visible images array
    function updateVisibleImages() {
        visibleImages = Array.from(document.querySelectorAll('.gallery-image-wrapper')).filter(wrapper => {
            return wrapper.closest('.gallery-item').style.display !== 'none';
        });
    }

    // Initialize visible images
    updateVisibleImages();

    // Lightbox functionality
    galleryImageWrappers.forEach((wrapper, index) => {
        wrapper.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const imageSrc = this.getAttribute('data-image');
            const imageTitle = this.getAttribute('data-title');

            // Find current image index in visible images
            currentImageIndex = visibleImages.indexOf(this);

            openLightbox(imageSrc, imageTitle);
        });
    });

    function openLightbox(imageSrc, imageTitle) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageTitle;
        lightboxTitle.textContent = imageTitle;
        lightboxOverlay.style.display = 'flex';
        updateLightboxCounter();

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function updateLightboxCounter() {
        lightboxCounter.textContent = `${currentImageIndex + 1} of ${visibleImages.length}`;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
        const wrapper = visibleImages[currentImageIndex];
        const imageSrc = wrapper.getAttribute('data-image');
        const imageTitle = wrapper.getAttribute('data-title');

        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageTitle;
        lightboxTitle.textContent = imageTitle;
        updateLightboxCounter();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
        const wrapper = visibleImages[currentImageIndex];
        const imageSrc = wrapper.getAttribute('data-image');
        const imageTitle = wrapper.getAttribute('data-title');

        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageTitle;
        lightboxTitle.textContent = imageTitle;
        updateLightboxCounter();
    }

    // Lightbox event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNextImage);
    lightboxPrev.addEventListener('click', showPrevImage);

    // Close lightbox when clicking overlay
    lightboxOverlay.addEventListener('click', function (e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (lightboxOverlay.style.display === 'flex') {
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
            }
        }
    });
}); 