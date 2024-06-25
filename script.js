document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.techstack');
    const items = Array.from(document.querySelectorAll('.techstack-item'));

    // Duplicar los elementos del carrusel para la ilusión de bucle infinito
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });

    let position = 0;
    const speed = 0.5; // Ajusta este valor para cambiar la velocidad del carrusel

    function moveCarousel() {
        position -= speed;
        if (position <= -carousel.scrollWidth / 2) {
            position = 0;
        }
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();

    // Crear el aura para el cursor
    const aura = document.createElement('div');
    aura.style.position = 'fixed';
    aura.style.width = '30px';
    aura.style.height = '30px';
    aura.style.borderRadius = '50%';
    aura.style.background = 'rgba(255, 165, 0, 0.5)'; /* Color naranja suave */
    aura.style.pointerEvents = 'none'; /* Asegura que el pseudo-elemento no interfiera con los eventos del ratón */
    aura.style.zIndex = '9999';
    aura.style.transition = 'transform 0.1s ease-out';
    document.body.appendChild(aura);

    document.addEventListener('mousemove', function(e) {
        aura.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });

    document.body.addEventListener('mouseleave', function() {
        aura.style.display = 'none';
    });

    document.body.addEventListener('mouseenter', function() {
        aura.style.display = 'block';
    });
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    const aura = document.getElementById('cursor-aura');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    aura.style.left = e.clientX - 10 + 'px';
    aura.style.top = e.clientY - 10 + 'px';
});