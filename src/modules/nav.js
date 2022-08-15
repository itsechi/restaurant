export default function createNav() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');

  const home = document.createElement('button');
  home.textContent = 'HOME';
  home.classList.add('home');

  const menu = document.createElement('button');
  menu.textContent = 'MENU';
  menu.classList.add('menu');

  const contact = document.createElement('button');
  contact.textContent = 'CONTACT';
  contact.classList.add('contact');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  content.appendChild(nav);
}

