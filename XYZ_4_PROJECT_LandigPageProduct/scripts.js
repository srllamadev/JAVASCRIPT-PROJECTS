// Efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    // Animación de botones
    const buttons = document.querySelectorAll('.brutal-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translate(8px, 8px)';
            this.style.boxShadow = '0px 0px 0 var(--accent3)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
            this.style.boxShadow = '8px 8px 0 var(--accent3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '8px 8px 0 var(--accent3)';
        });
    });
    
    // Animación de scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.hero-content, .productos-grid, .testimonio-container, .cta').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Efecto de desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});