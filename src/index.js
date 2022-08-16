import createHome from './pages/home';
import createMenu from './pages/menu';
import './sass/main.scss';
const content = document.getElementById('content');

createHome();

document.body.addEventListener('click', e => {
  if (
    e.target.id === 'home' &&
    !e.target.parentNode.nextSibling.classList.contains('large')
  ) {
    content.innerHTML = '';
    createHome();
  }
  if (
    e.target.id === 'menu' &&
    !e.target.parentNode.nextSibling.classList.contains('medium')
  ) {
    content.innerHTML = '';
    createMenu();
  } else return;
});
