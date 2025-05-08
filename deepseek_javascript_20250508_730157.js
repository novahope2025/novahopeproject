// Función para copiar el contrato
function copyContract() {
    const contractText = document.getElementById('contract-text').innerText;
    navigator.clipboard.writeText(contractText).then(() => {
        alert('¡Contract address copied!');
    });
}

// Smooth scroll para el menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de cambio de color en el header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0a0a1a';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 26, 0.9)';
    }
});