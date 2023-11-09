import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__description">Oops ! Cette page est introuvable.</p>
    </div>
  );
}

export default ErrorPage;
