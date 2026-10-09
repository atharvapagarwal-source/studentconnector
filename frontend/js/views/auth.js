// EduPulse Authentication View Component
const AuthView = {
  render(params = {}) {
    const isRegister = params.mode === 'register';
    const demos = window.EduPulseConfig.demoAccounts;

    return `
      <section class="section-padding" style="background: var(--bg-main); min-height: 80vh; display: flex; align-items: center;">
        <div class="container" style="max-width: 480px;">
          <div class="panel-card" style="padding: 2.5rem; box-shadow: var(--shadow-xl);">
            <div style="text-align: center; margin-bottom: 2rem;">
              <div class="brand-logo justify-center" style="margin-bottom: 0.75rem;">
                <div class="brand-icon">⚡</div>
                <span style="color: var(--text-primary);">EduPulse</span>
              </div>
              <h2 style="font-size: 1.5rem; font-weight: 800;">${isRegister ? 'Create Your Account' : 'Welcome Back'}</h2>
              <p style="color: var(--text-secondary); font-size: 0.9rem;">
                ${isRegister ? 'Join students and faculty on EduPulse AI' : 'Sign in to access your academic dashboard'}
              </p>
            </div>

            <!-- Demo Quick Login Buttons -->
            <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                🚀 Quick Demo One-Click Logins
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-primary" style="flex:1;" onclick="AuthView.quickLogin('student')">👨‍🎓 Student</button>
                <button class="btn btn-sm btn-secondary" style="flex:1;" onclick="AuthView.quickLogin('teacher')">👨‍🏫 Teacher</button>
                <button class="btn btn-sm btn-outline" style="flex:1;" onclick="AuthView.quickLogin('admin')">🏛️ Admin</button>
              </div>
            </div>

            <form id="authForm" onsubmit="AuthView.handleSubmit(event, ${isRegister})">
              ${isRegister ? `
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input type="text" id="authName" class="form-input" placeholder="e.g. Alex Rivers" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Role</label>
                  <select id="authRole" class="form-select" required>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              ` : ''}

              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" id="authEmail" class="form-input" placeholder="name@edupulse.edu" value="${demos.student.email}" required />
              </div>

              <div class="form-group">
                <div class="flex justify-between items-center">
                  <label class="form-label">Password</label>
                  ${!isRegister ? `<a href="javascript:void(0)" onclick="AuthView.forgotPassword()" style="font-size: 0.8rem;">Forgot?</a>` : ''}
                </div>
                <input type="password" id="authPassword" class="form-input" value="${demos.student.password}" required />
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.85rem;">
                ${isRegister ? 'Register Account' : 'Sign In'}
              </button>
            </form>

            <div style="text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-secondary);">
              ${isRegister 
                ? `Already have an account? <a href="javascript:void(0)" onclick="EduPulseRouter.navigate('auth?mode=login')">Sign In</a>`
                : `Need an account? <a href="javascript:void(0)" onclick="EduPulseRouter.navigate('auth?mode=register')">Register Now</a>`
              }
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async handleSubmit(event, isRegister) {
    event.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;

    if (isRegister) {
      const name = document.getElementById('authName').value.trim();
      const role = document.getElementById('authRole').value;
      const newUser = { id: Date.now(), name, email, role, department: "Computer Science" };
      window.stateStore.setUser(newUser);
      window.EduPulseUtils.showToast(`Account created successfully! Logged in as ${name}`, 'success');
      EduPulseRouter.navigate(role);
      return;
    }

    const result = await window.apiClient.login(email, password);
    if (result.success) {
      window.stateStore.setUser(result.user);
      window.EduPulseUtils.showToast(`Welcome back, ${result.user.name}!`, 'success');
      EduPulseRouter.navigate(result.user.role);
    } else {
      window.EduPulseUtils.showToast(result.message || "Login failed", 'error');
    }
  },

  quickLogin(role) {
    const demos = window.EduPulseConfig.demoAccounts;
    const demoUser = demos[role];
    const userObj = {
      id: role === 'student' ? 1 : role === 'teacher' ? 2 : 3,
      name: demoUser.name,
      email: demoUser.email,
      role: demoUser.role,
      rollNumber: role === 'student' ? "23BCE1042" : undefined,
      department: "Computer Science & Engineering",
      semester: 4,
      cgpa: 3.82
    };

    window.stateStore.setUser(userObj);
    window.EduPulseUtils.showToast(`Signed in as Demo ${role.toUpperCase()} (${demoUser.name})`, 'success');
    EduPulseRouter.navigate(role);
  },

  forgotPassword() {
    alert("Demo Password Reset: Enter your registered email (e.g. student@edupulse.edu). Password reset link sent!");
  }
};

window.AuthView = AuthView;
