class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  clearToken() {
    localStorage.removeItem("token");
  }
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  clearUser() {
    localStorage.removeItem("user");
  }
}

export const { setToken, getToken, setUser, getUser, clearToken, clearUser } =
  new SessionHelper();
