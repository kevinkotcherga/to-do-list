import TryButton from "../TryButton/TryButton";

const PreFooter = () => {
  return (
    <section className="prefooter">
      <div className="prefooter__content container">
        <h2 className="prefooter__title">Start for free</h2>
        <p className="prefooter__description">Gain serenity and clarity with the favorite productivity app of users.</p>
        <TryButton fontSize={'16px'} />
      </div>
    </section>
  );
};

export default PreFooter;
