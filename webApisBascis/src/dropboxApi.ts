import "dotenv/config";
import { RequestFactory } from "./requestFactory";
export const countFiles = async (fileName: string, dir: string): Promise<number> => {
  const request = RequestFactory.getInstance().getListFolder(dir);
  const response = await request.send().catch((err: any) => {
    throw err;
  });
  const dirFiles = response.data.entries;
  const searchFiles = dirFiles.filter((file: any) => file.name === fileName);
  return searchFiles.length;
};
export const uploadFile = async (fileName: string, dir: string) => {
  const request = RequestFactory.getInstance().getUpload(dir, fileName);
  const response = await request.send().catch((err: any) => {
    throw err;
  });
  return response;
};

export const getFileMetaData = async (fileId: string) => {
  const request = RequestFactory.getInstance().getMetaData(fileId);
  const response = await request.send().catch((err: any) => {
    throw err;
  });
  return response.data;
};

export const deleteFile = async (fileName: string, dir: string) => {
  const request = RequestFactory.getInstance().getDelete(fileName, dir);
  const response = await request.send().catch((err: any) => {
    throw err;
  });
  return response;
};
