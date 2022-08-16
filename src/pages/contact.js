import createLogo from '../modules/logo';
import createNav from '../modules/nav';
import mapImg from '../imgs/map.jpg';

export default function createContact() {
  createNav();
  createLogo('medium');

  const content = document.getElementById('content');

  const main = document.createElement('main');
  main.classList.add('contact-main');
  content.appendChild(main);

  /* contact section */
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact-section');
  main.appendChild(contactSection);
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'CONTACT US';
  const contactNumber = document.createElement('p');
  contactNumber.textContent = '+1 582-201-7138';
  const contactEmail = document.createElement('p');
  contactEmail.textContent = 'purecove@restaurant.com';
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'CONTACT FORM';

  contactSection.appendChild(contactHeader);
  contactSection.appendChild(contactNumber);
  contactSection.appendChild(contactEmail);
  contactSection.appendChild(contactBtn);

  /* map section */
  const map = document.createElement('img');
  map.src = mapImg;
  map.alt = 'location of the restaurant';
  map.classList.add('map');
  main.appendChild(map);

  /* address section */
  const addressSection = document.createElement('section');
  addressSection.classList.add('contact-section');
  main.appendChild(addressSection);
  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'ADDRESS';
  const address1 = document.createElement('p');
  address1.textContent = '85 South 9th Street';
  const address2 = document.createElement('p');
  address2.textContent = 'Brooklyn, NY';
  const addressBtn = document.createElement('button');
  addressBtn.textContent = 'BOOK A TABLE';

  addressSection.appendChild(addressHeader);
  addressSection.appendChild(address1);
  addressSection.appendChild(address2);
  addressSection.appendChild(addressBtn);
}
