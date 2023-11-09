import { useEffect } from "react";

import TryButton from "../TryButton/TryButton";

import { gsapHeader } from "../../gsap/header";

import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const Header = () => {
  useEffect(() => {
    Splitting({
      by: 'words',
    });
    gsapHeader();
  }, []);

  return (
    <header className="header container">
      <h1 className="header__title" data-splitting>Your tasks, your time, your <span className="header__underline">success.</span></h1>
      <p className="header__description">TaskManager is the ultimate reference for task management and to-do lists.</p>
      <div className="header__button">
        <TryButton fontSize={'21px'} />
      </div>
      <div className="badge badge--landing-page-right">💡</div>
      <div className="badge badge--landing-page-left">📃</div>
    </header>
  );
};

export default Header;
