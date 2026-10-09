// EduPulse Student Dashboard View Component
const StudentDashboardView = {
  activeTab: 'overview', // 'overview' | 'performance' | 'assignments' | 'feedback' | 'planner' | 'opportunities' | 'ai'

  render() {
    const user = window.stateStore.currentUser;
    const subjects = window.stateStore.subjects;
    const assignments = window.stateStore.assignments;
    const opportunities = window.stateStore.opportunities;
    const studyPlans = window.stateStore.studyPlans;
    const notifications = window.stateStore.notifications;

    return `
      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <div style="padding: 1.5rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <div class="brand-logo" style="font-size: 1.15rem;">
              <div class="brand-icon" style="width: 28px; height: 28px;">⚡</div>
              <span class="sidebar-text">EduPulse AI</span>
            </div>
          </div>

          <ul class="sidebar-menu">
            <li class="sidebar-item ${this.activeTab === 'overview' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('overview')">
              <span class="sidebar-icon">📊</span> <span class="sidebar-text">Dashboard</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'performance' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('performance')">
              <span class="sidebar-icon">📈</span> <span class="sidebar-text">My Performance</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'assignments' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('assignments')">
              <span class="sidebar-icon">📝</span> <span class="sidebar-text">Assignments</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'feedback' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('feedback')">
              <span class="sidebar-icon">🔒</span> <span class="sidebar-text">Anonymous Feedback</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'planner' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('planner')">
              <span class="sidebar-icon">📅</span> <span class="sidebar-text">Study Planner</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'opportunities' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('opportunities')">
              <span class="sidebar-icon">🚀</span> <span class="sidebar-text">Opportunities</span>
            </li>
            <li class="sidebar-item ${this.activeTab === 'ai' ? 'active' : ''}" onclick="StudentDashboardView.switchTab('ai')">
              <span class="sidebar-icon">💬</span> <span class="sidebar-text">AI Copilot</span>
            </li>
          </ul>

          <div style="margin-top: auto; padding: 1rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <div class="flex items-center gap-2">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--electric-blue); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white;">
                ${user.name ? user.name[0] : 'S'}
              </div>
              <div class="sidebar-text" style="overflow: hidden;">
                <div style="font-weight: 600; font-size: 0.85rem; color: white; white-space: nowrap; text-overflow: ellipsis;">${user.name}</div>
                <div style="font-size: 0.75rem; color: #94a3b8;">${user.rollNumber || 'Student'}</div>
              </div>
            </div>
            <button class="btn btn-outline btn-sm" style="width: 100%; margin-top: 0.75rem;" onclick="EduPulseRouter.logout()">Logout</button>
          </div>
        </aside>

        <!-- Main Dashboard View Container -->
        <main class="dashboard-content">
          <div class="role-banner">
            <div>
              <div class="badge badge-cyan" style="margin-bottom: 0.4rem;">Student Intelligence Hub</div>
              <h1 style="font-size: 1.6rem; font-weight: 800;">Welcome back, ${user.name}! 👋</h1>
              <p style="font-size: 0.9rem; opacity: 0.9;">Semester ${user.semester} • ${user.department}</p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-primary" onclick="StudentDashboardView.switchTab('ai')">⚡ Ask AI Assistant</button>
              <button class="btn btn-sm btn-secondary" onclick="StudentDashboardView.switchTab('planner')">📅 View Study Plan</button>
            </div>
          </div>

          <!-- TAB CONTENT CONTAINER -->
          <div id="studentTabContent">
            ${this.renderActiveTab(user, subjects, assignments, opportunities, studyPlans, notifications)}
          </div>
        </main>
      </div>
    `;
  },

  renderActiveTab(user, subjects, assignments, opportunities, studyPlans, notifications) {
    switch (this.activeTab) {
      case 'performance': return this.renderPerformanceTab(subjects);
      case 'assignments': return this.renderAssignmentsTab(assignments);
      case 'feedback': return this.renderFeedbackTab(subjects);
      case 'planner': return this.renderPlannerTab(studyPlans, subjects);
      case 'opportunities': return this.renderOpportunitiesTab(opportunities, user);
      case 'ai': return this.renderAICopilotTab(user);
      default: return this.renderOverviewTab(user, subjects, assignments, opportunities, notifications);
    }
  },

  renderOverviewTab(user, subjects, assignments, opportunities, notifications) {
    return `
      <!-- Metric Cards Grid -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-header"><span>Cumulative GPA</span> <span>🎓</span></div>
          <div class="metric-value">${user.cgpa || '3.82'}</div>
          <div class="metric-sub" style="color: var(--accent-emerald);">▲ Top 10% in CSE Dept</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Attendance Rate</span> <span>🕒</span></div>
          <div class="metric-value">${user.attendancePct || '94.5'}%</div>
          <div class="metric-sub" style="color: var(--accent-emerald);">✓ Compliant with 75% rule</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Assignment Completion</span> <span>📌</span></div>
          <div class="metric-value">2 / 3</div>
          <div class="metric-sub" style="color: var(--accent-amber);">⚡ 1 Pending (Due in 3d)</div>
        </div>

        <div class="metric-card">
          <div class="metric-header"><span>Assessment Average</span> <span>📈</span></div>
          <div class="metric-value">74.5%</div>
          <div class="metric-sub" style="color: var(--electric-blue);">Calculated across 4 courses</div>
        </div>
      </div>

      <!-- AI Insight Highlight Card -->
      <div class="panel-card" style="background: linear-gradient(135deg, rgba(37,99,235,0.06), rgba(6,182,212,0.06)); border-color: rgba(37,99,235,0.2);">
        <div class="flex items-center gap-3">
          <div style="font-size: 2rem;">⚡</div>
          <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: var(--electric-blue);">EduPulse AI Performance Insight</div>
            <p style="font-size: 0.95rem; color: var(--text-primary); margin-top: 0.2rem;">
              "Your Python performance is strong (86.2%). However, recent assessment results indicate that <strong>Trees and Graph Traversals</strong> in Data Structures (55%) need additional practice before the mid-semester exam."
            </p>
          </div>
        </div>
        <div style="margin-top: 1rem; display: flex; justify-content: flex-end; gap: 0.5rem;">
          <button class="btn btn-sm btn-primary" onclick="StudentDashboardView.switchTab('planner')">Generate Custom Study Plan</button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <!-- Subject Performance Quick Chart -->
        <div class="panel-card">
          <div class="panel-header">
            <h3 class="panel-title">Course Performance Breakdown</h3>
            <button class="btn btn-sm btn-outline" onclick="StudentDashboardView.switchTab('performance')">Details</button>
          </div>
          <div style="height: 240px;">
            <canvas id="overviewSubjectChart"></canvas>
          </div>
        </div>

        <!-- Upcoming Activities & Deadlines -->
        <div class="panel-card">
          <div class="panel-header">
            <h3 class="panel-title">Upcoming Deadlines & Tasks</h3>
          </div>
          <div class="flex flex-col gap-3">
            ${assignments.map(a => `
              <div class="flex justify-between items-center" style="padding: 0.75rem; background: var(--bg-muted); border-radius: var(--radius-md);">
                <div>
                  <div style="font-weight: 600; font-size: 0.9rem;">${a.title}</div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary);">${a.subjectName} • Max: ${a.maxMarks} pts</div>
                </div>
                <span class="badge ${a.status === 'graded' ? 'badge-green' : 'badge-amber'}">
                  ${a.status === 'graded' ? `Graded: ${a.marksObtained}/${a.maxMarks}` : `Due: ${EduPulseUtils.formatDate(a.deadline)}`}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderPerformanceTab(subjects) {
    const topicScores = window.stateStore.topicScores[101];

    return `
      <div class="panel-card">
        <div class="panel-header">
          <div>
            <h2 class="panel-title" style="font-size: 1.4rem;">Academic Performance & Learning Gap Diagnosis</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Distinguishing observed test results from AI gap interpretations. Low scores indicate potential learning gaps, not student limits.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6" style="margin-bottom: 2rem;">
          <div>
            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem;">Subject Score Summary</h3>
            <div class="flex flex-col gap-3">
              ${subjects.map(s => `
                <div>
                  <div class="flex justify-between" style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.3rem;">
                    <span>${s.code} — ${s.name}</span>
                    <span style="color: var(--electric-blue);">${s.score}%</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${s.score}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem;">Topic Mastery Radar Chart</h3>
            <div style="height: 220px;">
              <canvas id="topicRadarChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Detailed Topic Breakdown for Data Structures -->
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Detailed Topic Diagnosis: Data Structures (CS201)</h3>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Topic Name</th>
                <th>Score %</th>
                <th>Diagnostic Status</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              ${topicScores.map(t => `
                <tr>
                  <td style="font-weight: 600;">${t.topic}</td>
                  <td>${t.score}%</td>
                  <td>
                    <span class="badge ${t.score >= 80 ? 'badge-green' : t.score >= 70 ? 'badge-blue' : 'badge-red'}">
                      ${t.status}
                    </span>
                  </td>
                  <td style="font-size: 0.85rem; color: var(--text-secondary);">
                    ${t.score < 65 
                      ? `⚠️ Practice BST Balancing & Priority Queues via Study Planner` 
                      : `✓ Ready for advanced algorithmic optimization`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderAssignmentsTab(assignments) {
    return `
      <div class="panel-card">
        <div class="panel-header">
          <h2 class="panel-title" style="font-size: 1.4rem;">Assignments & Code Submissions</h2>
          <span class="badge badge-blue">${assignments.length} Total Assignments</span>
        </div>

        <div class="flex flex-col gap-4">
          ${assignments.map(a => `
            <div style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; background: var(--bg-surface);">
              <div class="flex justify-between items-center" style="margin-bottom: 0.75rem;">
                <div>
                  <span class="badge badge-purple" style="margin-bottom: 0.3rem;">${a.subjectName}</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700;">${a.title}</h3>
                </div>
                <span class="badge ${a.status === 'graded' ? 'badge-green' : 'badge-amber'}" style="font-size: 0.85rem;">
                  ${a.status === 'graded' ? `Graded: ${a.marksObtained}/${a.maxMarks}` : `Pending • Deadline: ${EduPulseUtils.formatDate(a.deadline)}`}
                </span>
              </div>

              <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">${a.description}</p>

              ${a.status === 'graded' ? `
                <div style="background: rgba(16,185,129,0.08); border-left: 4px solid var(--accent-emerald); padding: 1rem; border-radius: 4px;">
                  <div style="font-weight: 700; font-size: 0.85rem; color: #047857; margin-bottom: 0.2rem;">Teacher Grade & Feedback:</div>
                  <div style="font-size: 0.9rem;">"${a.teacherFeedback}"</div>
                  <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-secondary);">
                    🤖 <em>AI Advisory Note: ${a.aiPreliminaryFeedback}</em>
                  </div>
                </div>
              ` : `
                <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md);">
                  <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.5rem;">Submit Your Solution File</div>
                  <div class="flex gap-2">
                    <input type="file" id="file-${a.id}" class="form-input" style="padding: 0.4rem;" />
                    <button class="btn btn-primary btn-sm" onclick="StudentDashboardView.submitAssignment(${a.id})">Upload & Submit</button>
                  </div>
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderFeedbackTab(subjects) {
    return `
      <div class="panel-card">
        <div style="margin-bottom: 1.5rem;">
          <h2 class="panel-title" style="font-size: 1.4rem;">Your Voice. Without the Pressure.</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            Submit 100% anonymous feedback to your professors. Identities are separated on the C++ server to protect privacy.
          </p>
        </div>

        <form id="anonFeedbackForm" onsubmit="StudentDashboardView.submitAnonymousFeedback(event)">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">Subject</label>
              <select id="fbSubject" class="form-select" required>
                ${subjects.map(s => `<option value="${s.id}">${s.code} — ${s.name} (${s.teacher})</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Feedback Category</label>
              <select id="fbCategory" class="form-select" required>
                <option value="Teaching methodology">Teaching methodology</option>
                <option value="Teaching pace">Teaching pace</option>
                <option value="Course difficulty">Course difficulty</option>
                <option value="Assignments">Assignments</option>
                <option value="Study material">Study material</option>
                <option value="Classroom experience">Classroom experience</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Rating (1 = Poor, 5 = Excellent)</label>
            <select id="fbRating" class="form-select">
              <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
              <option value="4">⭐⭐⭐⭐ 4 - Good</option>
              <option value="3">⭐⭐⭐ 3 - Average</option>
              <option value="2">⭐⭐ 2 - Needs Improvement</option>
              <option value="1">⭐ 1 - Very Poor</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Detailed Anonymous Feedback</label>
            <textarea id="fbText" class="form-textarea" rows="4" placeholder="Share specific suggestions, concepts that need clearer explanations, or workload pace..." required></textarea>
          </div>

          <div style="background: rgba(139,92,246,0.08); border-left: 3px solid var(--accent-purple); padding: 0.75rem 1rem; border-radius: 4px; margin-bottom: 1.25rem; font-size: 0.85rem;">
            🔒 <strong>Anonymity Guarantee:</strong> Your student ID is verified for enrollment eligibility, but never stored alongside your feedback content.
          </div>

          <button type="submit" class="btn btn-primary btn-lg">Submit Anonymously</button>
        </form>
      </div>
    `;
  },

  renderPlannerTab(studyPlans, subjects) {
    const activePlan = studyPlans[0];

    return `
      <div class="panel-card">
        <div class="panel-header">
          <div>
            <h2 class="panel-title" style="font-size: 1.4rem;">Personalized AI Study Planner</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Dynamic daily roadmap aligned with your assessment dates and target topics.</p>
          </div>
          <button class="btn btn-sm btn-primary" onclick="StudentDashboardView.generateNewPlanModal()">+ Generate New Plan</button>
        </div>

        ${activePlan ? `
          <div style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div class="flex justify-between items-center">
              <div>
                <h3 style="font-weight: 700; font-size: 1.1rem;">${activePlan.subjectName} Revision Plan</h3>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
                  Target Assessment: <strong>${EduPulseUtils.formatDate(activePlan.assessmentDate)}</strong> • Commitment: <strong>${activePlan.dailyHours} hrs/day</strong>
                </div>
              </div>
              <span class="badge badge-purple">AI Optimized</span>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            ${activePlan.tasks.map((t, idx) => `
              <div class="flex items-center justify-between" style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div class="flex items-center gap-3">
                  <input type="checkbox" ${t.done ? 'checked' : ''} onchange="StudentDashboardView.togglePlanTask(${idx})" style="width: 18px; height: 18px; cursor: pointer;" />
                  <div>
                    <div style="font-weight: 700; font-size: 0.95rem; ${t.done ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">
                      Day ${t.day}: ${t.topic}
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${t.desc} (${t.minutes} mins)</div>
                  </div>
                </div>
                <span class="badge ${t.done ? 'badge-green' : 'badge-amber'}">${t.done ? 'Completed' : 'Pending'}</span>
              </div>
            `).join('')}
          </div>
        ` : `<p>No study plan generated yet.</p>`}
      </div>
    `;
  },

  renderOpportunitiesTab(opportunities, user) {
    return `
      <div class="panel-card">
        <div class="panel-header">
          <div>
            <h2 class="panel-title" style="font-size: 1.4rem;">Opportunity Discovery Engine</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Transparent scoring match based on your skills (${user.skills.join(', ')}) and interests.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          ${opportunities.map(o => {
            const match = EduPulseUtils.calculateOpportunityMatch(o, user.skills, user.interests);
            return `
              <div class="opportunity-card">
                <div>
                  <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
                    <span class="badge badge-blue">${o.category}</span>
                    <span class="match-score-badge">🎯 ${match.score}% Match</span>
                  </div>
                  <h3 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.25rem;">${o.title}</h3>
                  <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.75rem;">${o.organization} • ${o.location}</div>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">${o.description}</p>
                  
                  <div style="background: var(--bg-muted); padding: 0.75rem; border-radius: var(--radius-md); font-size: 0.8rem; margin-bottom: 1rem;">
                    <div>⚡ <strong>Match Explanation:</strong> ${match.reason}</div>
                    <div style="margin-top: 0.3rem;">📋 <strong>Eligibility:</strong> ${o.eligibility}</div>
                  </div>
                </div>

                <div class="flex justify-between items-center pt-2" style="border-top: 1px solid var(--border-color);">
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Deadline: ${EduPulseUtils.formatDate(o.deadline)}</span>
                  <a href="${o.url}" target="_blank" class="btn btn-primary btn-sm">Apply Now ↗</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderAICopilotTab(user) {
    return `
      <div class="panel-card" style="padding: 0;">
        <div class="chat-window">
          <div class="chat-header">
            <div class="flex items-center gap-2">
              <div class="brand-icon" style="width: 32px; height: 32px;">⚡</div>
              <div>
                <div style="font-weight: 700; font-size: 1rem;">EduPulse AI — Academic Copilot</div>
                <div style="font-size: 0.75rem; color: #94a3b8;">Context Aware • Logged in as ${user.name}</div>
              </div>
            </div>
            <span class="badge badge-green">Online</span>
          </div>

          <div class="chat-messages" id="chatMessages">
            <div class="chat-bubble chat-bubble-bot">
              Hello ${user.name}! I am your EduPulse Academic Copilot. I have analyzed your enrollment records, topic diagnostics, and pending deadlines. How can I help you excel today?
            </div>
          </div>

          <div class="chat-input-area">
            <input type="text" id="chatInput" class="form-input" style="flex:1;" placeholder="Ask about study advice, upcoming deadlines, or topic revision..." onkeypress="if(event.key==='Enter') StudentDashboardView.sendChatMessage()" />
            <button class="btn btn-primary" onclick="StudentDashboardView.sendChatMessage()">Send ⚡</button>
          </div>
        </div>
      </div>
    `;
  },

  switchTab(tab) {
    this.activeTab = tab;
    EduPulseRouter.renderView();
  },

  submitAssignment(id) {
    const assign = window.stateStore.assignments.find(a => a.id === id);
    if (assign) {
      assign.status = 'submitted';
      window.EduPulseUtils.showToast("Assignment solution uploaded successfully!", 'success');
      EduPulseRouter.renderView();
    }
  },

  submitAnonymousFeedback(event) {
    event.preventDefault();
    const text = document.getElementById('fbText').value.trim();
    const category = document.getElementById('fbCategory').value;
    const rating = parseInt(document.getElementById('fbRating').value);
    const subjectId = parseInt(document.getElementById('fbSubject').value);

    const sentimentResult = EduPulseUtils.analyzeSentiment(text);

    const newFb = {
      id: Date.now(),
      subjectId,
      subjectName: "Data Structures & Algorithms",
      category,
      rating,
      sentiment: sentimentResult.sentiment,
      text,
      date: new Date().toISOString().split('T')[0]
    };

    window.stateStore.anonymousFeedback.push(newFb);
    window.EduPulseUtils.showToast("Feedback submitted anonymously!", 'success');
    document.getElementById('anonFeedbackForm').reset();
  },

  togglePlanTask(idx) {
    const plan = window.stateStore.studyPlans[0];
    if (plan && plan.tasks[idx]) {
      plan.tasks[idx].done = !plan.tasks[idx].done;
      window.EduPulseUtils.showToast(plan.tasks[idx].done ? "Task marked complete! Great progress!" : "Task updated", 'info');
      EduPulseRouter.renderView();
    }
  },

  generateNewPlanModal() {
    const newPlan = {
      id: Date.now(),
      subjectName: "Discrete Mathematics & Probability",
      assessmentDate: "2026-10-30",
      dailyHours: 1.5,
      tasks: [
        { day: 1, topic: "Set Theory", desc: "Review proofs and De Morgan laws.", minutes: 45, done: false },
        { day: 2, topic: "Combinatorics", desc: "Solve 10 permutations and combinations problems.", minutes: 60, done: false },
        { day: 3, topic: "Probability", desc: "Practice Bayes Theorem and Conditional Probability.", minutes: 60, done: false }
      ]
    };
    window.stateStore.studyPlans.unshift(newPlan);
    window.EduPulseUtils.showToast("New AI Study Plan generated!", 'success');
    EduPulseRouter.renderView();
  },

  async sendChatMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;

    const chatBox = document.getElementById('chatMessages');
    
    // User message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-bubble chat-bubble-user';
    userDiv.innerText = msg;
    chatBox.appendChild(userDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // AI typing placeholder
    const botDiv = document.createElement('div');
    botDiv.className = 'chat-bubble chat-bubble-bot';
    botDiv.innerText = 'Analyzing your records... ⚡';
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    const responseText = await window.apiClient.generateAISuggestion(msg, 'student', window.stateStore.currentUser);
    botDiv.innerHTML = responseText;
    chatBox.scrollTop = chatBox.scrollHeight;
  },

  initEvents() {
    if (this.activeTab === 'overview') {
      const ctx = document.getElementById('overviewSubjectChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['DSA', 'Python', 'Discrete Math', 'Networks'],
            datasets: [{
              label: 'Subject Average %',
              data: [78.5, 86.2, 61.0, 72.4],
              backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6'],
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { min: 0, max: 100 } }
          }
        });
      }
    } else if (this.activeTab === 'performance') {
      const ctx = document.getElementById('topicRadarChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Arrays', 'Lists', 'Stacks', 'Trees', 'Graphs'],
            datasets: [{
              label: 'CS201 Mastery %',
              data: [88.5, 82.0, 75.5, 62.0, 55.0],
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.25)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    }
  }
};

window.StudentDashboardView = StudentDashboardView;
