export default function createLogo(size) {
  const content = document.getElementById('content');

  const logoContainer = document.createElement('header');
  const logoRestaurant = document.createElement('h1');
  logoRestaurant.textContent = 'Restaurant';
  logoRestaurant.classList.add('restaurant');
  logoContainer.classList.add(size);

  const logoName = document.createElement('h1');
  logoName.textContent = 'PURE COVE';

  logoContainer.appendChild(logoRestaurant);
  logoContainer.appendChild(logoName);
  content.appendChild(logoContainer);
}