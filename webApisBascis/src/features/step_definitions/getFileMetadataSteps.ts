import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { uploadFile, getFileMetaData } from "../../dropboxApi";
Given("I upload {string} in {string}", async function (fileName: string, path: string) {
  const response = await uploadFile(fileName, path).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
  const { id } = (response as any).data;
  this.fileId = id;
});

When("I get metadata of uploaded file", async function () {
  const metaData = await getFileMetaData(this.fileId).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
  this.fileName = metaData.name;
});

Then("uploaded file has {string} name", function (expectedFileName: string) {
  assert.equal(this.fileName, expectedFileName);
});
