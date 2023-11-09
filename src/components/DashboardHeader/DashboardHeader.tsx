const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__content container">
        <h1 className="dashboard-header__title">Add a task?</h1>
        <div className="badge badge--dashboard-right">💡</div>
        <div className="badge badge--dashboard-left">📃</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
