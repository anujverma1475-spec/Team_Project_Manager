function Dashboard() {
  return (
    <div className="page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Manage your projects, tasks, and team from one place.
          </p>
        </div>
      </div>


      {/* Statistics */}
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <span className="card-label">
            Total Projects
          </span>

          <h2>3</h2>

          <p>
            Projects in workspace
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Active Tasks
          </span>

          <h2>12</h2>

          <p>
            Tasks currently active
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Completed Tasks
          </span>

          <h2>28</h2>

          <p>
            Tasks completed
          </p>
        </div>


        <div className="dashboard-card">
          <span className="card-label">
            Team Members
          </span>

          <h2>6</h2>

          <p>
            Members across projects
          </p>
        </div>

      </div>


      {/* Main Dashboard Sections */}
      <div className="dashboard-columns">

        {/* Projects */}
        <div className="dashboard-section">

          <div className="section-header">
            <h2>Active Projects</h2>

            <span className="section-link">
              View all
            </span>
          </div>


          <div className="project-item">

            <div>
              <h3>AI Study Assistant</h3>

              <p>
                8 of 12 tasks completed
              </p>
            </div>

            <span className="status-badge active-status">
              Active
            </span>

          </div>


          <div className="progress-container">

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "67%" }}
              ></div>
            </div>

            <span>67%</span>

          </div>


          <div className="project-item">

            <div>
              <h3>Student Skill Tracker</h3>

              <p>
                5 of 10 tasks completed
              </p>
            </div>

            <span className="status-badge active-status">
              Active
            </span>

          </div>


          <div className="progress-container">

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>

            <span>50%</span>

          </div>

        </div>


        {/* Upcoming Deadlines */}
        <div className="dashboard-section">

          <div className="section-header">
            <h2>Upcoming Deadlines</h2>
          </div>


          <div className="deadline-item">

            <div>
              <h3>Authentication</h3>

              <p>AI Study Assistant</p>
            </div>

            <span className="deadline-date">
              Oct 05
            </span>

          </div>


          <div className="deadline-item">

            <div>
              <h3>Dashboard UI</h3>

              <p>Student Skill Tracker</p>
            </div>

            <span className="deadline-date">
              Oct 08
            </span>

          </div>


          <div className="deadline-item">

            <div>
              <h3>AI Integration</h3>

              <p>AI Study Assistant</p>
            </div>

            <span className="deadline-date">
              Oct 12
            </span>

          </div>

        </div>

      </div>


      {/* Team Workload */}
      <div className="dashboard-section workload-section">

        <div className="section-header">
          <h2>Team Workload</h2>

          <span className="section-link">
            View team
          </span>
        </div>


        <div className="workload-list">

          <div className="workload-item">

            <div className="member-info">
              <div className="avatar">
                AV
              </div>

              <div>
                <h3>Alex</h3>
                <p>Frontend Developer</p>
              </div>
            </div>

            <div className="workload-progress">

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <span>75%</span>

            </div>

          </div>


          <div className="workload-item">

            <div className="member-info">
              <div className="avatar">
                RK
              </div>

              <div>
                <h3>Rahul</h3>
                <p>Backend Developer</p>
              </div>
            </div>

            <div className="workload-progress">

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <span>60%</span>

            </div>

          </div>


          <div className="workload-item">

            <div className="member-info">
              <div className="avatar">
                SK
              </div>

              <div>
                <h3>Sarah</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>

            <div className="workload-progress">

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "40%" }}
                ></div>
              </div>

              <span>40%</span>

            </div>

          </div>

        </div>

      </div>


      {/* Recent Activity */}
      <div className="dashboard-section">

        <div className="section-header">
          <h2>Recent Activity</h2>
        </div>


        <div className="activity-item">

          <div className="activity-icon">
            ✓
          </div>

          <div>
            <p>
              <strong>Alex</strong> completed
              "Create login page"
            </p>

            <span>
              2 hours ago
            </span>
          </div>

        </div>


        <div className="activity-item">

          <div className="activity-icon">
            +
          </div>

          <div>
            <p>
              <strong>Rahul</strong> created a new task
            </p>

            <span>
              4 hours ago
            </span>
          </div>

        </div>


        <div className="activity-item">

          <div className="activity-icon">
            💬
          </div>

          <div>
            <p>
              <strong>Sarah</strong> sent a message
              in the project chat
            </p>

            <span>
              Yesterday
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;