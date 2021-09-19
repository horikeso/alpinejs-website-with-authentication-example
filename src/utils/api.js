import axios from "axios";

export default class API {
  #axiosInstance = null;
  #headers = null;

  constructor() {
    this.#axiosInstance = axios.create({
      baseURL: process.env.API_BASE,
    });
    this.#axiosInstance.defaults.timeout = 30000;
    this.#axiosInstance.interceptors.response.use(
      function (response) {
        return response; // 2XX
      },
      function (error) {
        return Promise.reject(error.response);
      }
    );
    this.setHeaders({
      "content-type": "application/json",
    });
  }
  setHeaders(header) {
    this.#headers = header;
  }
  addHeader(name, value) {
    this.#headers[name] = value;
  }
  post(path, params) {
    return this.#axiosInstance
      .post(path, params, {
        headers: this.#headers,
      })
      .catch((error) => {
        return error;
      })
      .finally();
  }
  postForm(path, params) {
    const formHeaders = Object.assign(
      {},
      JSON.parse(JSON.stringify(this.#headers))
    ); // deep copy
    Object.assign(formHeaders, { "Content-Type": "multipart/form-data" }); // overwrite Content-Type

    const formData = new FormData();
    Object.keys(params).forEach((key, value) => {
      formData.append(key, params[key]);
    });

    return this.#axiosInstance
      .post(path, formData, {
        headers: formHeaders,
      })
      .catch((error) => {
        return error;
      })
      .finally();
  }
  get(path) {
    return this.#axiosInstance
      .get(path, {
        headers: this.#headers,
        params: {},
      })
      .catch((error) => {
        return error;
      })
      .finally();
  }
}
