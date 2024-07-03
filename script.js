document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const particles = document.querySelector('.particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${-10 - Math.random() * 10}vh`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particles.appendChild(particle);
    }
});