const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.avif",
    "img5.avif",
    "img6.webp"
];


let currentSlide = 0;

let slideshowRunning = true;

let slideshowTimer;



/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    if (index >= images.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = images.length - 1;
    }

    else {
        currentSlide = index;
    }


    const image =
        document.getElementById("slideshowImage");


    const number =
        document.getElementById("slideNumber");


    image.src = images[currentSlide];

    number.textContent = currentSlide + 1;
}



/* =========================
   NEXT SLIDE
========================= */

function nextSlide() {

    showSlide(currentSlide + 1);

}



/* =========================
   PREVIOUS SLIDE
========================= */

function previousSlide() {

    showSlide(currentSlide - 1);

}



/* =========================
   AUTOMATIC SLIDESHOW
========================= */

function startSlideshow() {

    clearInterval(slideshowTimer);


    slideshowTimer = setInterval(
        function () {

            nextSlide();

        },
        3000
    );


    slideshowRunning = true;

    document.getElementById("playButton")
        .textContent = "Pause";
}



function stopSlideshow() {

    clearInterval(slideshowTimer);

    slideshowRunning = false;

    document.getElementById("playButton")
        .textContent = "Play";
}



function toggleSlideshow() {

    if (slideshowRunning) {

        stopSlideshow();

    }

    else {

        startSlideshow();

    }

}



/* =========================
   LIGHTBOX
========================= */

let lightboxIndex = 0;


function openLightbox(index) {

    lightboxIndex = index;


    const lightbox =
        document.getElementById("lightbox");


    const image =
        document.getElementById("lightboxImage");


    lightbox.classList.add("active");


    image.src = images[lightboxIndex];


    updateLightboxCounter();


    // Pause automatic slideshow
    stopSlideshow();
}



function closeLightbox() {

    document
        .getElementById("lightbox")
        .classList.remove("active");


    // Restart slideshow
    startSlideshow();
}



function lightboxNext() {

    lightboxIndex++;


    if (lightboxIndex >= images.length) {

        lightboxIndex = 0;

    }


    document
        .getElementById("lightboxImage")
        .src = images[lightboxIndex];


    updateLightboxCounter();
}



function lightboxPrevious() {

    lightboxIndex--;


    if (lightboxIndex < 0) {

        lightboxIndex = images.length - 1;

    }


    document
        .getElementById("lightboxImage")
        .src = images[lightboxIndex];


    updateLightboxCounter();
}



function updateLightboxCounter() {

    document
        .getElementById("lightboxCounter")
        .textContent =
            `${lightboxIndex + 1} / ${images.length}`;

}



/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        const lightbox =
            document.getElementById("lightbox");


        if (!lightbox.classList.contains("active")) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            lightboxNext();

        }


        if (event.key === "ArrowLeft") {

            lightboxPrevious();

        }

    }
);



/* =========================
   CLOSE WHEN CLICKING
   OUTSIDE IMAGE
========================= */

document
    .getElementById("lightbox")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                document.getElementById("lightbox")
            ) {

                closeLightbox();

            }

        }
    );



/* =========================
   START SLIDESHOW
========================= */

startSlideshow();