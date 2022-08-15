export default function createLogo() {
  const content = document.getElementById('content');

  const logoContainer = document.createElement('header');
  const logoRestaurant = document.createElement('h1');
  logoRestaurant.textContent = 'Restaurant';

  const logoName = document.createElement('h1');
  logoName.textContent = 'PURE COVE';

  logoContainer.appendChild(logoRestaurant);
  logoContainer.appendChild(logoName);
  content.appendChild(logoContainer);
}