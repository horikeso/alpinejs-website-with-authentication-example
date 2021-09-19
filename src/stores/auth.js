export function registerAuthStore(alpine) {
  alpine.store("auth", {
    isAuthenticated: false,
    token: "",

    retrieve() {
      if (this.token) {
        return;
      }

      // get localStorage
      if (
        localStorage.getItem("auth") &&
        JSON.parse(localStorage.getItem("auth"))?.token
      ) {
        this.token = JSON.parse(localStorage.getItem("auth")).token;
      }
    },

    approve(token) {
      this.isAuthenticated = true;
      this.token = token;
      // set localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: token,
        })
      );
    },

    reject() {
      this.isAuthenticated = false;
      this.token = "";
      // clear localStorage
      localStorage.removeItem("auth");
    },
  });
}
