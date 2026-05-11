function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user")) || {
    name: "زائر",
    plan: "free",
    used: 0,
    limit: 5
  };
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
