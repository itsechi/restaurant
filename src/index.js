import createHome from './pages/home';
import createMenu from './pages/menu';
import createContact from './pages/contact';
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
  } else if (
    e.target.id === 'menu' &&
    !e.target.parentNode.nextSibling.classList.contains('small')
  ) {
    content.innerHTML = '';
    createMenu();
  } else if (
    e.target.id === 'contact' &&
    !e.target.parentNode.nextSibling.classList.contains('medium')
  ) {
    content.innerHTML = '';
    createContact();
  } else return;
});
