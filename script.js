// Smooth Scrolling for Sections
document.querySelectorAll('.routine').forEach(section => {
    section.addEventListener('click', () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
});
