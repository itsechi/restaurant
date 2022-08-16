import createLogo from '../modules/logo';
import createNav from '../modules/nav';
import mapImg from '../imgs/map.jpg';

export default function createContact() {
  createNav();
  createLogo('medium');

  const content = document.getElementById('content');
  const map = document.createElement('img');
  map.src = mapImg;
  map.classList.add('map');
  content.appendChild(map);
}


