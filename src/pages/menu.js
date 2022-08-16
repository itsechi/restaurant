import createNav from '../modules/nav';
import createLogo from '../modules/logo';

export default function createMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  createNav();
  createLogo('medium');
}
