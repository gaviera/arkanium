document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.techstack');
    const items = Array.from(document.querySelectorAll('.techstack-item'));

    // Duplicar los elementos del carrusel 5 veces para la ilusión de bucle infinito
    for (let i = 0; i < 5; i++) {
        items.forEach(item => {
            const parent = item.parentNode;
            const clone = parent.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    let position = 0;
    const speed = 0.5; // Ajusta este valor para cambiar la velocidad del carrusel
    const totalWidth = carousel.scrollWidth / 5; // La anchura total para una vuelta

    function moveCarousel() {
        position -= speed;
        if (position <= -totalWidth) {
            position = 0; // Reiniciar la posición después de la quinta vuelta
        }
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});
