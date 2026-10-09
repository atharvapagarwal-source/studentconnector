// EduPulse Utility Functions & Recommendation Calculation Logic
const EduPulseUtils = {
  showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span><strong>${icon}</strong> ${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  calculateOpportunityMatch(opportunity, studentSkills = [], studentInterests = []) {
    if (!opportunity || !opportunity.requiredSkills) return { score: 70, reason: "General eligibility match" };

    const reqSkills = opportunity.requiredSkills.map(s => s.toLowerCase());
    const userSkills = studentSkills.map(s => s.toLowerCase());
    const userInterests = studentInterests.map(i => i.toLowerCase());

    let skillMatches = 0;
    const matchedSkillsList = [];

    reqSkills.forEach(skill => {
      if (userSkills.some(us => us.includes(skill) || skill.includes(us))) {
        skillMatches++;
        matchedSkillsList.push(skill);
      }
    });

    const skillScore = reqSkills.length > 0 ? (skillMatches / reqSkills.length) * 70 : 50;
    
    let interestBonus = 0;
    userInterests.forEach(interest => {
      if (opportunity.title.toLowerCase().includes(interest) || opportunity.description.toLowerCase().includes(interest)) {
        interestBonus += 15;
      }
    });

    const totalScore = Math.min(98, Math.round(skillScore + interestBonus + 15));

    let reason = matchedSkillsList.length > 0
      ? `Matches your skills in ${matchedSkillsList.join(', ')}`
      : `Matches your profile interests in ${opportunity.category}`;

    return {
      score: totalScore,
      matchedSkills: matchedSkillsList,
      reason
    };
  },

  analyzeSentiment(text) {
    const t = text.toLowerCase();
    const posWords = ['great', 'clear', 'helpful', 'good', 'engaging', 'love', 'excellent', 'understood', 'awesome'];
    const negWords = ['fast', 'hard', 'difficult', 'confusing', 'abstract', 'improve', 'poor', 'struggle', 'issue', 'bad', 'problem'];

    let posCount = 0;
    let negCount = 0;

    posWords.forEach(w => { if (t.includes(w)) posCount++; });
    negWords.forEach(w => { if (t.includes(w)) negCount++; });

    if (posCount > negCount) return { sentiment: 'positive', label: 'Positive' };
    if (negCount > posCount) return { sentiment: 'negative', label: 'Needs Attention' };
    return { sentiment: 'neutral', label: 'Neutral' };
  },

  formatDate(isoString) {
    if (!isoString) return 'N/A';
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
};

window.EduPulseUtils = EduPulseUtils;
