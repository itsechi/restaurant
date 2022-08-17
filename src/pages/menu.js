import createLogo from '../modules/logo';
import createNav from '../modules/nav';
import menu1Img from '../imgs/menu-1.png';
import menu2Img from '../imgs/menu-2.png';
import menu3Img from '../imgs/menu-3.png';

export default function createContact() {
  createNav();
  createLogo('small');
  const content = document.getElementById('content');
  const main = document.createElement('main');
  main.classList.add('menu-main');
  content.appendChild(main);

  // create a new menu item
  class Item {
    constructor(title, price, description, image) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }

  const item1 = new Item(
    'LOREM IPSUM',
    '$2.40',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    menu1Img
  );

  const item2 = new Item(
    'LOREM IPSUM',
    '$2.40',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    menu2Img
  );

  const item3 = new Item(
    'LOREM IPSUM',
    '$2.40',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    menu3Img
  );

  const menuItems = [item1, item2, item3];

  function displayItems() {
    menuItems.forEach(item => {
      const itemContainer = document.createElement('section');
      itemContainer.classList.add('item-container');
      main.appendChild(itemContainer);

      const itemText = document.createElement('div');
      itemText.classList.add('item-text');
      itemContainer.appendChild(itemText);

      const itemHeader = document.createElement('div');
      itemHeader.classList.add('item-header');
      itemText.appendChild(itemHeader);

      const itemTitle = document.createElement('h4');
      itemTitle.textContent = item.title;
      itemHeader.appendChild(itemTitle);

      const itemDeco = document.createElement('div');
      itemDeco.classList.add('item-deco');
      itemHeader.appendChild(itemDeco);

      const itemPrice = document.createElement('h4');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = item.price;
      itemHeader.appendChild(itemPrice);

      const itemDescription = document.createElement('p');
      itemDescription.classList.add('item-description');
      itemDescription.textContent = item.description;
      itemText.appendChild(itemDescription);

      const itemImg = document.createElement('img');
      itemImg.src = item.image;
      itemContainer.appendChild(itemImg);
    });
  }
  displayItems();
}
