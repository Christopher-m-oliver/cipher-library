const loginPanel = document.getElementById("login-panel");
const registerPanel = document.getElementById("register-panel");

document.getElementById("to-register").addEventListener("click", (e) => {
  e.preventDefault();
  loginPanel.classList.remove("active");
  registerPanel.classList.add("active");
});

document.getElementById("to-login").addEventListener("click", (e) => {
  e.preventDefault();
  registerPanel.classList.remove("active");
  loginPanel.classList.add("active");
});