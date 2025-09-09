const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu-content');
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });