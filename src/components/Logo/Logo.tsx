import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} className='logo__image' alt='Logo' />
      <p>TaskManager.</p>
    </div>
  );
};

export default Logo;
