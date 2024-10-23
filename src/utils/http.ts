import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const defineConfig = {
  baseUrl: "",
  timeout: 5000,
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  private static axiosInstance = axios.create(defineConfig);

  private httpInterceptorsRequest() {
    return Http.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * 封装请求
   */
  // get

  public httpRequestGet<T>(
    url: string,
    params: AxiosRequestConfig
  ): Promise<T> {
    return Http.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }

  // post
  public httpRequestPost<T>(
    url: string,
    params: AxiosRequestConfig
  ): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
}

export const http = new Http();
