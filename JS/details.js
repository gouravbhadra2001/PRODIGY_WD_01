const navLinks = document.querySelectorAll(".slider_nav a");
const sections = document.querySelectorAll(".slider > div");
let activeIndex = 0;

function setActiveLink() {
    navLinks.forEach((link, index) => {
        if (index === activeIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('click', setActiveLink);

document.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowRight' && activeIndex < sections.length - 1) {
        activeIndex++;
    } else if (event.key === 'ArrowLeft' && activeIndex > 0) {
        activeIndex--;
    }

    setActiveLink();
})