import Logo from '../Logo/Logo';
import TryButton from '../TryButton/TryButton';
import MenuMobile from '../MenuMobile/MenuMobile';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <ul className='navbar__list'>
        <li className='navbar__item'>Features</li>
        <li className='navbar__item'>Pricing</li>
        <TryButton fontSize={'16px'} />
      </ul>
      <MenuMobile />
    </nav>
  );
};

export default Navbar;
