// EduPulse Administrator Dashboard View Component
const AdminDashboardView = {
  render() {
    const user = window.stateStore.currentUser;

    return `
      <div class="dashboard-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div style="padding: 1.5rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <div class="brand-logo" style="font-size: 1.15rem;">
              <div class="brand-icon" style="width: 28px; height: 28px; background: linear-gradient(135deg, var(--electric-cyan), var(--electric-blue));">🏛️</div>
              <span class="sidebar-text">Admin Console</span>
            </div>
          </div>

          <ul class="sidebar-menu">
            <li class="sidebar-item active">
              <span class="sidebar-icon">⚙️</span> <span class="sidebar-text">System Overview</span>
            </li>
            <li class="sidebar-item">
              <span class="sidebar-icon">👥</span> <span class="sidebar-text">User Accounts</span>
            </li>
            <li class="sidebar-item">
              <span class="sidebar-icon">📚</span> <span class="sidebar-text">Subjects & Courses</span>
            </li>
            <li class="sidebar-item">
              <span class="sidebar-icon">📢</span> <span class="sidebar-text">Announcements</span>
            </li>
          </ul>

          <div style="margin-top: auto; padding: 1rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <div class="flex items-center gap-2">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--electric-cyan); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white;">
                ${user.name ? user.name[0] : 'A'}
              </div>
              <div class="sidebar-text" style="overflow: hidden;">
                <div style="font-weight: 600; font-size: 0.85rem; color: white;">${user.name}</div>
                <div style="font-size: 0.75rem; color: #94a3b8;">Administrator</div>
              </div>
            </div>
            <button class="btn btn-outline btn-sm" style="width: 100%; margin-top: 0.75rem;" onclick="EduPulseRouter.logout()">Logout</button>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="dashboard-content">
          <div class="role-banner" style="background: linear-gradient(135deg, #0f172a, #1e293b);">
            <div>
              <div class="badge badge-cyan" style="margin-bottom: 0.4rem;">Institutional Control Panel</div>
              <h1 style="font-size: 1.6rem; font-weight: 800;">EduPulse System Control Panel 🏛️</h1>
              <p style="font-size: 0.9rem; opacity: 0.9;">System Status: Operational • Database: Connected • Drogon Backend Active</p>
            </div>
            <button class="btn btn-sm btn-primary" onclick="alert('Creating new user account form...')">+ Add User</button>
          </div>

          <div class="metrics-grid">
            <div class="metric-card">
              <div class="metric-header"><span>Total Students</span> <span>👨‍🎓</span></div>
              <div class="metric-value">1,240</div>
              <div class="metric-sub" style="color: var(--accent-emerald);">Active Accounts</div>
            </div>

            <div class="metric-card">
              <div class="metric-header"><span>Total Faculty</span> <span>👨‍🏫</span></div>
              <div class="metric-value">48</div>
              <div class="metric-sub">Across 6 Departments</div>
            </div>

            <div class="metric-card">
              <div class="metric-header"><span>Active Subjects</span> <span>📚</span></div>
              <div class="metric-value">32</div>
              <div class="metric-sub">Spring Semester 2026</div>
            </div>

            <div class="metric-card">
              <div class="metric-header"><span>API Traffic Rate</span> <span>⚡</span></div>
              <div class="metric-value">99.9%</div>
              <div class="metric-sub" style="color: var(--electric-cyan);">Drogon High Performance Engine</div>
            </div>
          </div>

          <div class="panel-card">
            <h3 class="panel-title" style="margin-bottom: 1rem;">System User Directory & Role Assignments</h3>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td style="font-weight: 600;">Alex Rivers</td>
                    <td>student@edupulse.edu</td>
                    <td><span class="badge badge-blue">Student</span></td>
                    <td>Computer Science</td>
                    <td><span class="badge badge-green">Active</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td style="font-weight: 600;">Dr. Aris Thorne</td>
                    <td>teacher@edupulse.edu</td>
                    <td><span class="badge badge-purple">Teacher</span></td>
                    <td>Computer Science</td>
                    <td><span class="badge badge-green">Active</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td style="font-weight: 600;">Elena Rostova</td>
                    <td>admin@edupulse.edu</td>
                    <td><span class="badge badge-cyan">Admin</span></td>
                    <td>Administration</td>
                    <td><span class="badge badge-green">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    `;
  },

  initEvents() {}
};

window.AdminDashboardView = AdminDashboardView;
