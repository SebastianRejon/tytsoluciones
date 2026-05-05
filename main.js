function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

// Cierra el menú en móvil al hacer click en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector(".nav-menu").classList.remove("active");
    });
});