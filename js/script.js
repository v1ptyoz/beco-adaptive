document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = sidebar.querySelector('.sidebar__menu button');
  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--opened')
  })
})