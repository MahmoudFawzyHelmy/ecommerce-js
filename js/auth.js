// signup
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const error = document.getElementById("signupError");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.find((user) => user.email === email);

    if (!validateEmail(email)) {
      error.style.color = "red";
      error.textContent = "Please enter a valid email address!";
    } else if (emailExists) {
      error.style.color = "red";
      error.textContent = "Email already exists!";
    } else if (password.length < 6) {
      error.style.color = "red";
      error.textContent = "Password must be at least 6 characters!";
    } else {
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      error.style.color = "green";
      error.textContent = "Account created successfully! Redirecting...";
      setTimeout(() => {
        window.location.href = "signin.html";
      }, 1500);
    }
  });
}

// signin
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();
    const error = document.getElementById("signinError");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      error.style.color = "green";
      error.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      error.style.color = "red";
      error.textContent = "Invalid email or password!";
    }
  });
}

// validate email function
function validateEmail(email) {
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|me|co)$/i;
  return regex.test(email);
}
