const loginToggle = document.getElementById("loginToggle");
const logoutBtn = document.getElementById("logoutBtn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");
const loginForm = document.getElementById("loginForm");

loginToggle.onclick = () => {
  loginModal.style.display = "block";
};

closeLogin.onclick = () => {
  loginModal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == loginModal) loginModal.style.display = "none";
};

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "ntd_303" && pass === "8907") {
    alert("Login successful!");
    loginModal.style.display = "none";
    loginToggle.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    alert("Invalid credentials.");
  }
};

logoutBtn.onclick = () => {
  alert("Logged out.");
  loginToggle.style.display = "inline";
  logoutBtn.style.display = "none";
};
