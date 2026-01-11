const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('-translate-x-10');
  menu.classList.toggle('pointer-events-none');
});
