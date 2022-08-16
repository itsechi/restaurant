export default function createNav() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');

  const home = document.createElement('button');
  home.textContent = 'HOME';
  home.classList.add('home');
  home.id = 'home';

  const menu = document.createElement('button');
  menu.textContent = 'MENU';
  menu.classList.add('menu');
  menu.id = 'menu';

  const contact = document.createElement('button');
  contact.textContent = 'CONTACT';
  contact.classList.add('contact');
  contact.id = 'contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  content.appendChild(nav);
}
