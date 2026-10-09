// EduPulse Teacher Dashboard View Component
const TeacherDashboardView = {
  activeTab: 'overview', // 'overview' | 'assignments' | 'feedback' | 'support'

  render() {
    const user = window.stateStore.currentUser;
    const feedbackList = window.stateStore.anonymousFeedback;
    const teacherStudents = window.stateStore.teacherStudents;
    const assignments = window.stateStore.assignments;

    return `
      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <div style="padding: 1.5rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <div class="brand-logo" style="font-size: 1.15rem;">
              <div class="brand-icon" style="width: 28px; height: 28px; background: linear-gradient(135deg, var(--accent-purple), var(--electric-blue));">👨‍🏫</div>
              <span class="sidebar-text">Teacher Portal</span>
            </div>
          </div>

          <ul class="sidebar-menu">
            <li class="sidebar-item ${this.activeTab === 'overview' ? 'active' : ''}" onclick="TeacherDashboardView.switchTab('overview')">
              <span class="sidebar-icon">📊</span> <span class="sidebar-text">Class Analytics</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'assignments' ? 'active' : ''}" onclick="TeacherDashboardView.switchTab('assignments')">
              <span class="sidebar-icon">📝</span> <span class="sidebar-text">Assignment Manager</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'feedback' ? 'active' : ''}" onclick="TeacherDashboardView.switchTab('feedback')">
              <span class="sidebar-icon">🔒</span> <span class="sidebar-text">Feedback Analytics</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'support' ? 'active' : ''}" onclick="TeacherDashboardView.switchTab('support')">
              <span class="sidebar-icon">🛡️</span> <span class="sidebar-text">Support Indicators</span>
            </li>
          </ul>

          <div style="margin-top: auto; padding: 1rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <div class="flex items-center gap-2">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--accent-purple); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white;">
                ${user.name ? user.name[0] : 'T'}
              </div>
              <div class="sidebar-text" style="overflow: hidden;">
                <div style="font-weight: 600; font-size: 0.85rem; color: white;">${user.name}</div>
                <div style="font-size: 0.75rem; color: #94a3b8;">Faculty • CSE Dept</div>
              </div>
            </div>
            <button class="btn btn-outline btn-sm" style="width: 100%; margin-top: 0.75rem;" onclick="EduPulseRouter.logout()">Logout</button>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="dashboard-content">
          <div class="role-banner" style="background: linear-gradient(135deg, #1e1b4b, #312e81);">
            <div>
              <div class="badge badge-purple" style="margin-bottom: 0.4rem;">Faculty Intelligence Console</div>
              <h1 style="font-size: 1.6rem; font-weight: 800;">Welcome, ${user.name}! 👨‍🏫</h1>
              <p style="font-size: 0.9rem; opacity: 0.9;">Assigned Courses: CS201 (Data Structures), CS204 (Python), CS302 (Networks)</p>
            </div>
            <button class="btn btn-sm btn-primary" onclick="TeacherDashboardView.switchTab('assignments')">+ Create Assignment</button>
          </div>

          <div id="teacherTabContent">
            ${this.renderActiveTab(teacherStudents, feedbackList, assignments)}
          </div>
        </main>
      </div>
    `;
  },

  renderActiveTab(students, feedbackList, assignments) {
    switch (this.activeTab) {
      case 'assignments': return this.renderAssignmentsTab(assignments);
      case 'feedback': return this.renderFeedbackTab(feedbackList);
      case 'support': return this.renderSupportTab(students);
      default: return this.renderOverviewTab(students, feedbackList);
    }
  },

  renderOverviewTab(students, feedbackList) {
    return `
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-header"><span>Enrolled Students</span> <span>👥</span></div>
          <div class="metric-value">64</div>
          <div class="metric-sub" style="color: var(--electric-blue);">Across 3 CSE Courses</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Class Average</span> <span>📈</span></div>
          <div class="metric-value">73.2%</div>
          <div class="metric-sub" style="color: var(--accent-emerald);">▲ +2.1% from Last Assessment</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Pending Submissions</span> <span>📌</span></div>
          <div class="metric-value">12</div>
          <div class="metric-sub" style="color: var(--accent-amber);">Awaiting Grading</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Feedback Sentiment</span> <span>💬</span></div>
          <div class="metric-value" style="color: var(--accent-emerald);">61% Positive</div>
          <div class="metric-sub">Based on 4 Anonymous Submissions</div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <!-- Class Topic Analysis Chart -->
        <div class="panel-card">
          <div class="panel-header">
            <h3 class="panel-title">CS201 Topic Comprehension Diagnosis</h3>
          </div>
          <div style="height: 240px;">
            <canvas id="teacherTopicChart"></canvas>
          </div>
        </div>

        <!-- AI Class Insight Summary -->
        <div class="panel-card" style="background: linear-gradient(135deg, rgba(139,92,246,0.06), rgba(37,99,235,0.06)); border-color: rgba(139,92,246,0.2);">
          <h3 class="panel-title" style="color: var(--accent-purple); margin-bottom: 0.75rem;">⚡ EduPulse AI Faculty Summary</h3>
          <p style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 1rem;">
            "Class analysis indicates strong foundational performance in Array & Linked List structures (85%+ average). However, <strong>Trees and Dijkstra Graph Traversals</strong> show the lowest average performance (58%). Anonymous feedback highlights student requests for step-by-step worked examples during lab sessions."
          </p>
          <div style="padding: 0.75rem; background: var(--bg-surface); border-radius: var(--radius-md); font-size: 0.85rem;">
            💡 <strong>Suggested Teaching Adjustment:</strong> Schedule an interactive problem-solving tutorial before next week's test.
          </div>
        </div>
      </div>
    `;
  },

  renderAssignmentsTab(assignments) {
    return `
      <div class="panel-card">
        <div class="panel-header">
          <h2 class="panel-title" style="font-size: 1.4rem;">Assignment Management & Grading</h2>
          <button class="btn btn-sm btn-primary" onclick="TeacherDashboardView.showCreateModal()">+ Create New Assignment</button>
        </div>

        <div class="flex flex-col gap-4">
          ${assignments.map(a => `
            <div style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; background: var(--bg-surface);">
              <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
                <div>
                  <span class="badge badge-purple">${a.subjectName}</span>
                  <h3 style="font-size: 1.1rem; font-weight: 700; margin-top: 0.2rem;">${a.title}</h3>
                </div>
                <span class="badge badge-blue">Max Marks: ${a.maxMarks}</span>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Topic: ${a.topic} • Deadline: ${EduPulseUtils.formatDate(a.deadline)}</p>
              
              <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md); font-size: 0.85rem;">
                <strong>Submission Status:</strong> 1 Submitted, 0 Late, 1 Graded.
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderFeedbackTab(feedbackList) {
    return `
      <div class="panel-card">
        <div class="panel-header">
          <div>
            <h2 class="panel-title" style="font-size: 1.4rem;">Aggregated Anonymous Feedback Analytics</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Student anonymity is strictly preserved. Only aggregated patterns and insights are displayed.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6" style="margin-bottom: 2rem;">
          <div style="height: 220px;">
            <canvas id="feedbackSentimentChart"></canvas>
          </div>
          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-lg);">
            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">AI Aggregated Summary</h3>
            <p style="font-size: 0.9rem; color: var(--text-primary);">
              "Several student responses indicate that while practical code assignments are engaging, extra worked examples for recursion and Dijkstra algorithms are requested prior to midterms."
            </p>
          </div>
        </div>

        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Recent Anonymous Student Feedback Submissions</h3>
        <div class="flex flex-col gap-3">
          ${feedbackList.map(f => `
            <div style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div class="flex justify-between items-center" style="margin-bottom: 0.4rem;">
                <span class="badge ${f.sentiment === 'positive' ? 'badge-green' : 'badge-red'}">${f.category} (${f.sentiment})</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${f.date}</span>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-primary);">"${f.text}"</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderSupportTab(students) {
    return `
      <div class="panel-card">
        <div class="panel-header">
          <div>
            <h2 class="panel-title" style="font-size: 1.4rem;">Academic Support Indicators Matrix</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Objective rules identifying students who may benefit from academic support. Not a label or automated decision.
            </p>
          </div>
        </div>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Avg Assessment Score</th>
                <th>Attendance %</th>
                <th>Performance Trend</th>
                <th>Academic Support Indicator</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => `
                <tr>
                  <td style="font-weight: 600;">${s.roll}</td>
                  <td>${s.name}</td>
                  <td>${s.avgScore}%</td>
                  <td>${s.attendance}%</td>
                  <td style="color: ${s.trend.startsWith('+') ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight: 600;">${s.trend}</td>
                  <td>
                    <span class="support-indicator ${s.supportLevel === 'Higher' ? 'support-higher' : s.supportLevel === 'Moderate' ? 'support-moderate' : 'support-lower'}">
                      ${s.supportLevel === 'Higher' ? '⚠️ Higher Support Needed' : s.supportLevel === 'Moderate' ? '⚡ Moderate Support' : '✓ Lower Support Needed'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  switchTab(tab) {
    this.activeTab = tab;
    EduPulseRouter.renderView();
  },

  showCreateModal() {
    alert("Assignment Creation Form: Fill in Title, Subject, Topic, Max Marks, and Deadline. Saved directly to Drogon C++ / PostgreSQL database!");
  },

  initEvents() {
    if (this.activeTab === 'overview') {
      const ctx = document.getElementById('teacherTopicChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Arrays', 'Lists', 'Stacks', 'Trees', 'Graphs'],
            datasets: [{
              label: 'Class Topic Avg %',
              data: [85.0, 81.2, 74.0, 62.0, 58.0],
              backgroundColor: '#8b5cf6',
              borderRadius: 6
            }]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
    } else if (this.activeTab === 'feedback') {
      const ctx = document.getElementById('feedbackSentimentChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Positive', 'Neutral', 'Needs Attention'],
            datasets: [{
              data: [61, 25, 14],
              backgroundColor: ['#10b981', '#94a3b8', '#ef4444']
            }]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
    }
  }
};

window.TeacherDashboardView = TeacherDashboardView;
