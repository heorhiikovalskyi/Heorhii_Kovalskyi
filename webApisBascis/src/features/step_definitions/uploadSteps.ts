import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { uploadFile, countFiles } from "../../dropboxApi";
Given("I upload file {string} in {string}", async function (fileName: string, path: string) {
  await uploadFile(fileName, path).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
});

When("I upload second time file {string} in {string}", async function (fileName: string, path: string) {
  await uploadFile(fileName, path).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
});

Then("there is only one file {string} in {string}", async function (fileName: string, path: string) {
  const count = await countFiles(fileName, path).catch((err: any) => {
    throw new Error(`error in getting all rout dir files, ${JSON.stringify(err)}`);
  });
  assert.equal(count, 1);
});
