import fs from "fs";
import "dotenv/config";
import { AxiosRequest } from "./request";
export class RequestFactory {
  private constructor() {}
  private static instance: RequestFactory;
  public static getInstance(): RequestFactory {
    if (!RequestFactory.instance) {
      RequestFactory.instance = new RequestFactory();
    }
    return RequestFactory.instance;
  }
  getListFolder(dir: string): AxiosRequest {
    const endpoint = "https://api.dropboxapi.com/2/files/list_folder";
    const data = {
      path: dir,
      recursive: false,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_mounted_folders: true,
    };
    const config = { "Content-Type": "application/json" };
    const request = new AxiosRequest(endpoint).setData(data).setConfig(config);
    return request;
  }
  getUpload(dir: string, fileName: string): AxiosRequest {
    const endpoint = "https://content.dropboxapi.com/2/files/upload";
    const data = fs.readFileSync("./a.jpg");
    const config = {
      "Dropbox-API-Arg": JSON.stringify({
        path: `${dir}/${fileName}`,
        mode: "add",
        autorename: true,
        mute: false,
      }),
      "Content-Type": "application/octet-stream",
    };
    const request = new AxiosRequest(endpoint).setData(data).setConfig(config);

    return request;
  }
  getMetaData(fileId: string): AxiosRequest {
    const endpoint = `https://api.dropboxapi.com/2/files/get_metadata`;
    const data = {
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_media_info: false,
      path: fileId,
    };
    const config = { "Content-Type": "application/json" };
    const request = new AxiosRequest(endpoint).setData(data).setConfig(config);
    return request;
  }
  getDelete(fileName: string, dir: string): AxiosRequest {
    const endpoint = "https://api.dropboxapi.com/2/files/delete_v2";
    const data = {
      path: `${dir}/${fileName}`,
    };
    const config = { "Content-Type": "application/json" };
    const request = new AxiosRequest(endpoint).setData(data).setConfig(config);
    return request;
  }
}
