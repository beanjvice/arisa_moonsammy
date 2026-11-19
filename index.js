
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
                src: "images/img_one.jpeg",
                caption: "arisa ♡"
            },
            {
                src: "images/img_two.jpeg",
                caption: "city ♡"
            },
            {
                src: "images/img_three.jpeg",
                caption: "emi ♡"
            },
            {
                src: "images/img_four.jpeg",
                caption: "networking event ♡"
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



/* Expandable Experience Cards */
document.addEventListener("DOMContentLoaded", function () {

    const experienceButtons =
        document.querySelectorAll(".experience-toggle");

    experienceButtons.forEach((button) => {

        button.addEventListener("click", function () {

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            // Close all experience cards
            experienceButtons.forEach((otherButton) => {
                otherButton.setAttribute("aria-expanded", "false");
            });

            // Open selected card if it was closed
            if (!isExpanded) {
                button.setAttribute("aria-expanded", "true");
            }

        });

    });

});
