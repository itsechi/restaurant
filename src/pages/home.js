import createLogo from '../modules/logo';
import createNav from '../modules/nav';

export default function createHome() {
  createNav();
  createLogo('large');
}
