import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__top">
          <Logo />
          <p>Users organize their work and daily life with TaskManager.</p>
        </div>
        <div className="footer__bottom">
          <div className="footer__condition">
            <ul className="footer__list">
              <li className="footer__item">Sécurité <span className="footer__separator">|</span></li>
              <li className="footer__item">Confidentialité <span className="footer__separator">|</span></li>
              <li className="footer__item">CGU</li>
            </ul>
            <p className="footer__copyright">© TaskManager.</p>
          </div>
          <select className="footer__select">
            <option>English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
