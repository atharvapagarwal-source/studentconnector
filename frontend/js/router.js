// EduPulse Single Page Application Router
class Router {
  constructor() {
    this.routes = {
      'landing': LandingView,
      'auth': AuthView,
      'student': StudentDashboardView,
      'teacher': TeacherDashboardView,
      'admin': AdminDashboardView
    };

    window.addEventListener('hashchange', () => this.renderView());
  }

  navigate(pathWithQuery) {
    window.location.hash = `#${pathWithQuery}`;
  }

  parseHash() {
    const hash = window.location.hash.replace('#', '') || 'landing';
    const [path, queryString] = hash.split('?');
    const params = {};
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
    }
    return { path, params };
  }

  renderView() {
    const { path, params } = this.parseHash();
    const appRoot = document.getElementById('app-root');

    // Enforce Role Guard
    const user = window.stateStore.currentUser;
    let targetPath = path;

    if (['student', 'teacher', 'admin'].includes(path)) {
      if (!user) {
        targetPath = 'auth';
      }
    }

    const viewComponent = this.routes[targetPath] || LandingView;
    
    // Render HTML
    appRoot.innerHTML = viewComponent.render(params);

    // Initialize View specific JS / Chart events
    if (viewComponent.initEvents) {
      setTimeout(() => viewComponent.initEvents(), 50);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Update active nav links
    this.updateNavLinks(targetPath);
  }

  updateNavLinks(currentPath) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const route = link.getAttribute('data-route');
      if (route === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const navAuthAction = document.getElementById('navAuthAction');
    const user = window.stateStore.currentUser;

    if (navAuthAction) {
      if (user) {
        navAuthAction.innerHTML = `
          <button class="btn btn-sm btn-outline" onclick="EduPulseRouter.navigate('${user.role}')">Dashboard (${user.role.toUpperCase()})</button>
          <button class="btn btn-sm btn-secondary" onclick="EduPulseRouter.logout()">Logout</button>
        `;
      } else {
        navAuthAction.innerHTML = `
          <button class="btn btn-sm btn-secondary" onclick="EduPulseRouter.navigate('auth?mode=login')">Login</button>
          <button class="btn btn-sm btn-primary" onclick="EduPulseRouter.navigate('auth?mode=register')">Get Started</button>
        `;
      }
    }
  }

  logout() {
    window.stateStore.logout();
    window.EduPulseUtils.showToast("Logged out successfully", 'info');
    this.navigate('landing');
  }
}

window.EduPulseRouter = new Router();
