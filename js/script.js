document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const menu = sidebar.querySelector('.sidebar__menu');
  menu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--opened')
  })
})