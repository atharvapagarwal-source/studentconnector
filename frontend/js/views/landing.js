// EduPulse Public Landing Page View Component
const LandingView = {
  render() {
    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div>
              <div class="badge badge-blue" style="margin-bottom: 1.25rem;">
                <span class="pulse-dot">●</span> AI-Powered Academic Intelligence Platform
              </div>
              <h1 class="hero-headline">Turn Academic Data Into <span class="text-gradient">Better Learning.</span></h1>
              <p class="hero-subtext">
                EduPulse connects students and teachers through AI-powered learning insights, anonymous feedback, intelligent assignment management, personalized study plans, and opportunity discovery.
              </p>
              <div class="hero-ctas">
                <button class="btn btn-primary btn-lg" onclick="EduPulseRouter.navigate('auth?mode=register')">Get Started</button>
                <button class="btn btn-secondary btn-lg" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Explore Features</button>
              </div>
              <div style="margin-top: 2rem; display: flex; gap: 1.5rem; color: #94a3b8; font-size: 0.85rem;">
                <div>✓ Role-Based Access</div>
                <div>✓ Anonymous Feedback</div>
                <div>✓ Smart Study Planner</div>
                <div>✓ AI Copilot</div>
              </div>
            </div>

            <!-- Dynamic Live Preview Card -->
            <div class="preview-card">
              <div class="preview-header">
                <div class="flex items-center gap-2">
                  <div class="preview-dots">
                    <span class="preview-dot dot-red"></span>
                    <span class="preview-dot dot-yellow"></span>
                    <span class="preview-dot dot-green"></span>
                  </div>
                  <span style="color: #94a3b8; font-size: 0.8rem; margin-left: 0.5rem; font-weight: 500;">EduPulse Academic Engine v1.0</span>
                </div>
                <span class="badge badge-cyan">Live Student Context</span>
              </div>

              <div class="preview-chart-box">
                <canvas id="heroPreviewChart"></canvas>
              </div>

              <div class="ai-pulse-pill">
                <span style="font-size: 1.1rem;">⚡</span>
                <span><strong>AI Learning Insight:</strong> Python performance is strong (86%). Trees & Graphs need targeted revision before Midterm.</span>
              </div>

              <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #cbd5e1;">
                <span>📅 <strong>Next Deadline:</strong> AVL Tree Implementation (3 days left)</span>
                <span class="badge badge-purple">92% Hackathon Match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem Section -->
      <section class="section-padding" style="background: var(--bg-surface);" id="problem">
        <div class="container">
          <div class="section-header">
            <span class="badge badge-amber" style="margin-bottom: 0.5rem;">The Challenge</span>
            <h2 class="section-title">The Gap in Modern Education</h2>
            <p class="section-subtitle">Traditional systems store data without transforming it into meaningful academic progress.</p>
          </div>

          <div class="grid grid-cols-3 gap-6">
            <div class="problem-card">
              <div class="problem-icon" style="background: rgba(239, 68, 68, 0.1); color: #ef4444;">🎒</div>
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">For Students</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Students struggle to pinpoint specific topic-level learning gaps and often miss career-defining opportunities due to lack of personalized guidance.
              </p>
            </div>

            <div class="problem-card">
              <div class="problem-icon" style="background: rgba(245, 158, 11, 0.1); color: #f59e0b;">👨‍🏫</div>
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">For Teachers</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Teachers lack real-time aggregated feedback and automated insights needed to identify struggling students before major assessments occur.
              </p>
            </div>

            <div class="problem-card">
              <div class="problem-icon" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">🏛️</div>
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">For Institutions</h3>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Universities collect vast academic records across fragmented channels without institutional intelligence to systematically improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Solution Pipeline Section -->
      <section class="section-padding" style="background: var(--bg-main);" id="solution">
        <div class="container">
          <div class="section-header">
            <span class="badge badge-green" style="margin-bottom: 0.5rem;">The EduPulse Framework</span>
            <h2 class="section-title">From Raw Data to Academic Excellence</h2>
            <p class="section-subtitle">A transparent 5-step intelligence engine designed to elevate every learner.</p>
          </div>

          <div class="pipeline-flow">
            <div class="pipeline-step">
              <div class="pipeline-step-num">1</div>
              <div style="font-weight: 700; font-size: 0.95rem;">Student Activity</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">Assessments & Submissions</div>
            </div>
            <div class="pipeline-arrow">➔</div>
            <div class="pipeline-step">
              <div class="pipeline-step-num" style="background: var(--electric-cyan);">2</div>
              <div style="font-weight: 700; font-size: 0.95rem;">Data Collection</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">Topic Scores & Feedback</div>
            </div>
            <div class="pipeline-arrow">➔</div>
            <div class="pipeline-step">
              <div class="pipeline-step-num" style="background: var(--accent-purple);">3</div>
              <div style="font-weight: 700; font-size: 0.95rem;">AI Analysis</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">NLP & Deterministic Models</div>
            </div>
            <div class="pipeline-arrow">➔</div>
            <div class="pipeline-step">
              <div class="pipeline-step-num" style="background: var(--accent-emerald);">4</div>
              <div style="font-weight: 700; font-size: 0.95rem;">Recommendations</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">Study Plans & Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section-padding" style="background: var(--bg-surface);" id="features">
        <div class="container">
          <div class="section-header">
            <span class="badge badge-blue" style="margin-bottom: 0.5rem;">Comprehensive Capabilities</span>
            <h2 class="section-title">Built for the Modern Campus</h2>
            <p class="section-subtitle">Eight interconnected modules built with precision C++ Drogon API power and real-time frontend interactivity.</p>
          </div>

          <div class="grid grid-cols-4 gap-6">
            <div class="feature-card">
              <div class="feature-icon-wrapper">🧠</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">AI Learning Insights</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Automatically identifies topic-level strengths and learning gaps from assessment records.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(139, 92, 246, 0.1); color: var(--accent-purple);">🔒</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Anonymous Feedback</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Protected feedback channel with server-side anonymity verification and sentiment NLP.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald);">📝</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Smart Assignments</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Complete file submission, deadline tracking, rubrics, and preliminary AI evaluation.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(245, 158, 11, 0.1); color: var(--accent-amber);">📅</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Study Planning</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Generates personalized daily study roadmaps based on assessment dates and weak topics.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(6, 182, 212, 0.1); color: var(--electric-cyan);">🚀</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Opportunity Engine</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Scored matching engine for hackathons, internships, scholarships, and research grants.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper">💬</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">AI Academic Assistant</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Context-aware copilot that answers course questions using authenticated student context.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(239, 68, 68, 0.1); color: var(--accent-rose);">📊</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Teacher Analytics</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Class performance trends, topic difficulty distributions, and sentiment summaries.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon-wrapper" style="background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald);">🛡️</div>
              <h3 style="font-weight: 700; margin-bottom: 0.4rem;">Support Indicators</h3>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">Transparent rules identifying students who may benefit from extra academic support.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section-padding" style="background: linear-gradient(135deg, var(--primary-indigo), var(--primary-navy)); color: white; text-align: center;">
        <div class="container">
          <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Your Academic Journey Has Data. Now Turn It Into Progress.</h2>
          <p style="color: #cbd5e1; max-width: 600px; margin: 0 auto 2rem auto; font-size: 1.1rem;">
            Join EduPulse today to experience AI-powered insights, seamless feedback, and personalized growth.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary btn-lg" onclick="EduPulseRouter.navigate('auth?mode=register')">Get Started Free</button>
            <button class="btn btn-secondary btn-lg" onclick="EduPulseRouter.navigate('auth?mode=login')">Sign In to Demo</button>
          </div>
        </div>
      </section>
    `;
  },

  initEvents() {
    // Render Hero Chart using Chart.js
    const ctx = document.getElementById('heroPreviewChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Arrays', 'Lists', 'Stacks', 'Trees', 'Graphs'],
          datasets: [{
            label: 'Topic Mastery %',
            data: [88.5, 82.0, 75.5, 62.0, 55.0],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#06b6d4',
            pointRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 40, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
          }
        }
      });
    }
  }
};

window.LandingView = LandingView;
