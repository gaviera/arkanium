document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.techstack');
    const items = Array.from(document.querySelectorAll('.techstack-item'));
    
    // Duplicar los elementos del carrusel 5 veces para la ilusión de bucle infinito
    for (let i = 0; i < 5; i++) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
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

    // Crear el aura para el cursor
    const aura = document.createElement('div');
    aura.id = 'cursor-aura';
    document.body.appendChild(aura);

    document.addEventListener('mousemove', function(e) {
        aura.style.left = `${e.clientX - aura.offsetWidth / 2}px`;
        aura.style.top = `${e.clientY - aura.offsetHeight / 2}px`;
    });

    document.body.addEventListener('mouseleave', function() {
        aura.style.display = 'none';
    });

    document.body.addEventListener('mouseenter', function() {
        aura.style.display = 'block';
    });
});