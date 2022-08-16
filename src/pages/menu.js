import createLogo from '../modules/logo';
import createNav from '../modules/nav';

export default function createMenu() {
  createNav();
  createLogo('medium');
}
