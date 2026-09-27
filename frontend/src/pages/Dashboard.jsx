function Dashboard() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back! Here's an overview of your workspace.
          </p>
        </div>
      </div>


      <div className="dashboard-grid">

        <div className="dashboard-card">
          <span className="card-label">
            Total Projects
          </span>

          <h2>0</h2>

          <p>
            No projects yet
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Active Tasks
          </span>

          <h2>0</h2>

          <p>
            Tasks currently in progress
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Completed Tasks
          </span>

          <h2>0</h2>

          <p>
            Tasks completed
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Team Members
          </span>

          <h2>0</h2>

          <p>
            Members in your workspace
          </p>
        </div>

      </div>


      <div className="dashboard-section">

        <h2>Recent Activity</h2>

        <div className="empty-state">

          <div className="empty-icon">
            📋
          </div>

          <h3>No activity yet</h3>

          <p>
            Create your first project to start managing your team.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;