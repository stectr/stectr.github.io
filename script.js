const imageGallery = document.getElementById('image-gallery');

// Function to load images
function loadImages() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image filenames here
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.alt = image;
        imgElement.style.width = '200px'; // Set image size
        imageGallery.appendChild(imgElement);
    });
}

// Call the function to load images
loadImages();