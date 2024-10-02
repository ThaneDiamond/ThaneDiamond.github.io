function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.image-container.hidden');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);