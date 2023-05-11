import { AxiosRequestConfig } from "axios";
import axios from "axios";
import "dotenv/config";
import { AxiosResponse } from "axios";
const { ACCESS_TOKEN } = process.env;
export class AxiosRequest {
  private endpoint: string;
  private data?: Buffer | { [key: string]: any };
  private config: AxiosRequestConfig;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.config = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
  }
  public setEndpoint(endpoint: string): AxiosRequest {
    this.endpoint = endpoint;
    return this;
  }
  public setData(data: Buffer | { [key: string]: any }): AxiosRequest {
    this.data = data;
    return this;
  }
  public setConfig(config: { [key: string]: any }): AxiosRequest {
    for (let key in config) {
      this.config.headers![key] = config[key];
    }
    return this;
  }
  public async send(): Promise<AxiosResponse> {
    const { endpoint, data, config } = this;
    const response = await axios.post(endpoint, data, config);
    return response;
  }
}
