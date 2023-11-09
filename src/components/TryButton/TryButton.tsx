import { Link } from "react-router-dom";

import arrow from '../../assets/arrow.svg';

const TryButton = ({ fontSize }: { fontSize: string }) => {
  return (
    <Link to="/dashboard">
      <button className="landing-page__link try-button" style={{ fontSize }}>
        <p>Create a task list</p>
        <img src={arrow} alt="Arrow" />
      </button>
    </Link>
  );
};

export default TryButton;
