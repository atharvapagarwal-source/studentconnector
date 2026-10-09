// EduPulse Core Application Bootstrapper
document.addEventListener('DOMContentLoaded', async () => {
  console.log("EduPulse AI Academic Platform frontend initializing...");

  // Verify C++ Drogon REST API Backend health
  const health = await window.apiClient.checkHealth();
  if (health) {
    console.log("Connected to C++ Drogon REST API Backend Engine v" + health.version);
    const badge = document.createElement('div');
    badge.style.cssText = "position:fixed; bottom:1rem; left:1rem; z-index:9999; background:rgba(16,185,129,0.9); color:white; padding:0.35rem 0.75rem; border-radius:9999px; font-size:0.75rem; font-weight:700; box-shadow:0 4px 12px rgba(0,0,0,0.2);";
    badge.innerHTML = "⚡ C++ Drogon API Connected";
    document.body.appendChild(badge);
  } else {
    console.log("C++ Backend offline or standalone mode. Running with client-side interactive state engine.");
  }

  // Initial Route Render
  window.EduPulseRouter.renderView();
});
