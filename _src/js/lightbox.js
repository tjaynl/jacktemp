function initLightboxForHomepage() {
    const galleryImages = document.querySelectorAll('#home-gallery-container img');
    let currentIndex = 0;

    // Function to open the lightbox with a specific image index
    const openLightbox = function(index) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        currentIndex = index;
        lightboxImg.src = galleryImages[currentIndex].src;
        lightbox.style.display = 'flex'; // Show the lightbox
    };

    // Function to close the lightbox
    const closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none'; // Hide the lightbox
    };

    // Function to show the next image
    const showNextImage = function() {
        currentIndex = (currentIndex + 1) % galleryImages.length; // Loop to the first image if at the end
        openLightbox(currentIndex);
    };

    // Function to show the previous image
    const showPrevImage = function() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Loop to the last image if at the beginning
        openLightbox(currentIndex);
    };

    // Add click event to each image to open the lightbox
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => openLightbox(index));
    });

    // Close the lightbox when clicking outside the image or on the close button
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox__close');

    lightboxClose.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Event listeners for next and previous buttons
    const lightboxNext = document.querySelector('.lightbox__next');
    const lightboxPrev = document.querySelector('.lightbox__prev');

    lightboxNext.addEventListener('click', showNextImage);
    lightboxPrev.addEventListener('click', showPrevImage);

    // Handle keyboard navigation (optional, but recommended for better UX)
    document.addEventListener('keydown', (event) => {
        if (lightbox.style.display === 'flex') {
            if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'Escape') {
                closeLightbox();
            }
        }
    });
}

// Initialize the lightbox functionality on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    initLightboxForHomepage();
});
