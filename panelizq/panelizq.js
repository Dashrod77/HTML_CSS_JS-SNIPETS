const btn = document.getElementById('btn-panelizq');
const nav = document.getElementById('nav-panelizq');

btn.addEventListener('click', () => {
  event.stopPropagation();
  nav.classList.toggle('nav-activo');

});
