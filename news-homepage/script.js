const hamburguer = document.querySelector('.hamburguer');
const navbarListContainer = document.querySelector('.navbar-list-container');
const imagem = hamburguer.querySelector('img');


function toggle() {
  if (navbarListContainer.style.display === 'none') {
    navbarListContainer.style.display = 'block'
    imagem.src = './assets/images/icon-menu-close.svg'
  } else {
    navbarListContainer.style.display ='none'
    imagem.src = './assets/images/icon-menu.svg'
  }

}

hamburguer.addEventListener('click', toggle)