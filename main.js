var modal = document.querySelector(".modal"),
      previews = document.querySelectorAll(".photo img"),
      originalImg = document.querySelector(".full-img"),
      caption = document.querySelector(".caption");

previews.forEach((preview) => {

    // detph mouse tracking to photos
    preview.addEventListener("mousemove", (e) => {
        preview.style.transformOrigin = e.offsetX / 3 + "% " + e.offsetY / 3 + "%";
    });

    // enlarge photos on click
    preview.addEventListener('click', () => {
        modal.classList.add("modal-open");
        originalImg.classList.add("img-open");

        // dynamically change text and image
        const originalSrc = preview.getAttribute('data-original');
        originalImg.src = `./assets/${originalSrc}`;
        
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

// exit full-screen view of photo
modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove("modal-open");
        originalImg.classList.remove("img-open");
    }
});

