class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const { setToken, getToken, setUser, getUser, removeSession } =
  new SessionHelper();
