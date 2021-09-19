export function auth() {
  const memberHomePath = process.env.MEMBER_HOME_PATH;
  const rootPath = process.env.ROOT_PATH;

  return {
    isDisplayed: false,
    id: "",
    password: "",

    async initForSignIn() {
      // load from localStorage
      Alpine.store("auth").retrieve();
      if (Alpine.store("auth").token) {
        await this.verifyToken(Alpine.store("auth").token);
      }
      if (Alpine.store("auth").isAuthenticated) {
        location.href = memberHomePath;
        return;
      }
      // display OK
      this.isDisplayed = true;
    },
    async initForPrivate() {
      // load from localStorage
      Alpine.store("auth").retrieve();
      if (Alpine.store("auth").token) {
        await this.verifyToken(Alpine.store("auth").token);
      }
      if (!Alpine.store("auth").isAuthenticated) {
        this.signOut();
        return;
      }
      // display OK
      this.isDisplayed = true;
    },
    async verifyToken(token) {
      // TODO: your token verify
      const result = await Alpine.store("api")
        .getClient()
        .get("api-mock/auth/tokens/verify.json");

      if (result.status < 400) {
        // success
        Alpine.store("auth").approve(token);
      } else {
        // fail
        Alpine.store("auth").reject();
      }
    },
    async signIn() {
      // TODO: your authenticate with id and password
      const result = await Alpine.store("api")
        .getClient()
        .get("api-mock/auth/post.json");

      if (result.status < 400 && "token" in result.data) {
        // success
        Alpine.store("auth").approve(result.data.token);
        location.href = memberHomePath;
      } else {
        // fail
        Alpine.store("auth").reject();
      }
    },
    signOut() {
      Alpine.store("auth").reject();
      location.href = rootPath;
    },
  };
}
