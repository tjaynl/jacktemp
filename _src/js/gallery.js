function Gallery(images) {
  this.images = images;
  this.currentIndex = 0;
  this.imagesPerPage = 9;
  this.currentLightboxIndex = -1; // Track the current lightbox image index

  this.init = function() {
    console.log("Initializing Gallery with images:", this.images);
    this.loadMoreImages();
    const showMoreButton = document.getElementById('show-more');
    if (this.images.length > this.imagesPerPage) {
      showMoreButton.style.display = 'block';
    }
    showMoreButton.addEventListener('click', () => this.loadMoreImages());

    // Setup lightbox close events
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox__close');
    
    // Close lightbox when clicking on close button or background
    lightboxClose.addEventListener('click', this.closeLightbox.bind(this));
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        this.closeLightbox();
      }
    });

    // Add event listeners for previous and next buttons
    const prevButton = document.getElementById('lightbox-prev');
    const nextButton = document.getElementById('lightbox-next');
    prevButton.addEventListener('click', () => this.showPreviousImage());
    nextButton.addEventListener('click', () => this.showNextImage());
  };

  this.loadMoreImages = function() {
    const galleryContainer = document.getElementById('gallery-container');
    const showMoreButton = document.getElementById('show-more');

    const nextBatch = this.images.slice(this.currentIndex, this.currentIndex + this.imagesPerPage);
    console.log("Loading more images:", nextBatch);
    nextBatch.forEach((image, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery__item');

      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.addEventListener('click', () => this.openLightbox(index)); // Add lightbox click

      galleryItem.appendChild(imgElement);
      galleryContainer.appendChild(galleryItem);
    });

    this.currentIndex += this.imagesPerPage;

    if (this.currentIndex >= this.images.length) {
      showMoreButton.style.display = 'none';
    }
  };

  // Function to open lightbox
  this.openLightbox = function(index) {
    this.currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = this.images[index].src;
    lightbox.style.display = 'flex'; // Show lightbox
  };

  // Function to close lightbox
  this.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide lightbox
  };

  // Function to show the previous image in the lightbox
  this.showPreviousImage = function() {
    if (this.currentLightboxIndex > 0) {
      this.currentLightboxIndex--;
      this.updateLightboxImage();
    }
  };

  // Function to show the next image in the lightbox
  this.showNextImage = function() {
    if (this.currentLightboxIndex < this.images.length - 1) {
      this.currentLightboxIndex++;
      this.updateLightboxImage();
    }
  };

  // Update the lightbox with the current image
  this.updateLightboxImage = function() {
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = this.images[this.currentLightboxIndex].src;
  };
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("Images Data:", imagesData);

  const gallery = new Gallery(imagesData.images || imagesData);
  gallery.init();
});
