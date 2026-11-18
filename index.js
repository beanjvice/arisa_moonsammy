
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
        passive : true
    });

    window.addEventListener("resize", updateNavbar);

    updateNavbar();

});
