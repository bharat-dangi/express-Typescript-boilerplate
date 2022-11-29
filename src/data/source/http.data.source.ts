import axios, { AxiosStatic } from "axios";

export abstract class HTTPSourceBase {
  abstract get(url: string, config?: any): Promise<any>;
  abstract post(url: string, data?: any, config?: any): Promise<any>;
}

export class HTTPSource implements HTTPSourceBase {
  axios: AxiosStatic;

  constructor() {
    this.axios = axios;
  }

  async get(url: string, config?: any | null): Promise<any> {
    return await this.axios.get(url, config);
  }

  async post(url: string, data?: any, config?: any): Promise<any> {
    return await this.axios.post(url, data, config);
  }
}
