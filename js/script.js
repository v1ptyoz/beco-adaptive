document.addEventListener('DOMContentLoaded', () => {
  
  const sidebar = document.querySelector('.sidebar');
  const menuButton = sidebar.querySelector('.sidebar__menu button');
  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--opened')
  })

  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.innerWidth < 1440) {
      if (window.scrollY > 45) {
        header.classList.add('header--fixed');
      } else {
        header.classList.remove('header--fixed')
      }
    }
  })
  


})