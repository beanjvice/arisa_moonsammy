
document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");
    const aboutSection = document.querySelector("#about");

    if (!header || !aboutSection) {
        console.error("Header or About section not found!");
        return;
    }

    function updateNavbar() {
        const headerHeight = header.offsetHeight;
        const aboutRect = aboutSection.getBoundingClientRect();

        const isAboutActive =
            aboutRect.top <= headerHeight &&
            aboutRect.bottom > headerHeight;

        header.classList.toggle("about-active", isAboutActive);
    }

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

    window.addEventListener("resize", updateNavbar);

    updateNavbar();
});

document.addEventListener("DOMContentLoaded", function () {
    const polaroidImage = document.getElementById("polaroid-image");
    const polaroidCaption = document.getElementById("polaroid-caption");

    if (polaroidImage && polaroidCaption) {
        const polaroidPhotos = [
            {
                src: "images/test_img1.png",
                caption: "a little piece of my life ♡"
            },
            {
                src: "images/test_img2.png",
                caption: "little moments I love"
            },
            {
                src: "images/test_img3.png",
                caption: "me outside of coding"
            },
            {
                src: "images/test_img4.png",
                caption: "memories that make me smile"
            }
        ];

        polaroidPhotos.forEach((photo) => {
            const img = new Image();
            img.src = photo.src;
        });

        let currentPhoto = 0;

        function changePolaroidPhoto() {
            polaroidImage.style.opacity = "0";

            setTimeout(() => {
                currentPhoto = (currentPhoto + 1) % polaroidPhotos.length;
                polaroidImage.src = polaroidPhotos[currentPhoto].src;
                polaroidCaption.textContent = polaroidPhotos[currentPhoto].caption;
                polaroidImage.style.opacity = "1";
            }, 500);
        }

        setInterval(changePolaroidPhoto, 4000);
    }
});
