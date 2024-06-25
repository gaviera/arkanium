document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.techstack');
    const items = Array.from(document.querySelectorAll('.techstack-item'));

    while (true) {
        // Duplicar los elementos del carrusel para la ilusión de bucle infinito
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
    }
});