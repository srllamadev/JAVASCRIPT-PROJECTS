# 1. Menú Móvil
## javascript

```javascript
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
```

document.querySelector('.mobile-menu'): Selecciona el primer elemento con la clase mobile-menu.
.addEventListener('click', function() {...}): Añade un evento que se activa al hacer clic en el menú móvil.
classList.toggle('active'): Al hacer clic, cambia el estado de la clase active en el elemento con nav-links, mostrando o escondiendo el menú.

***********************************************************************************
//aprender a subrayar el codigo en markdown
dame un ejemplo de como subrayar el codigo en markdown
# 2. Scroll Suave
## javascript

```javascript       
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```
document.querySelectorAll('a[href^="#"]'): Selecciona todos los enlaces que comienzan con "#".
.forEach(anchor => {...}): Itera sobre cada enlace seleccionado.    
anchor.addEventListener('click', function(e) {...}): Añade un evento que se activa al hacer clic en cada enlace.
e.preventDefault(): Previene el comportamiento por defecto del enlace.
