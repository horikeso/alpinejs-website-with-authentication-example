import API from "../utils/api.js";

// Save an API instance in Store
export function registerAPIStore(alpine) {
  alpine.store(
    "api",
    (() => {
      const client = new API();

      const getClient = () => {
        return client;
      };

      return {
        getClient: getClient,
      };
    })()
  );
}
