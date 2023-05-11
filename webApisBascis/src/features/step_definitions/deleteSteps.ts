import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { deleteFile, countFiles } from "../../dropboxApi";

When("I delete file {string} in {string}", async function (fileName: string, dir: string) {
  await deleteFile(fileName, dir).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
});

Then("there is no {string} in {string}", async function (fileName: string, dir: string) {
  const fileCount = await countFiles(fileName, dir).catch((err: any) => {
    throw new Error(JSON.stringify(err));
  });
  assert.equal(fileCount, 0);
});
