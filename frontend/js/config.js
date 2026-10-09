// EduPulse Global Configuration
const EduPulseConfig = {
  appName: "EduPulse",
  tagline: "Understand. Improve. Achieve.",
  apiBaseUrl: "http://localhost:8080/api",
  demoAccounts: {
    student: {
      email: "student@edupulse.edu",
      password: "Password123!",
      name: "Alex Rivers",
      role: "student"
    },
    teacher: {
      email: "teacher@edupulse.edu",
      password: "Password123!",
      name: "Dr. Aris Thorne",
      role: "teacher"
    },
    admin: {
      email: "admin@edupulse.edu",
      password: "Password123!",
      name: "Elena Rostova",
      role: "admin"
    }
  }
};

window.EduPulseConfig = EduPulseConfig;
