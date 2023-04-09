/* eslint-disable import/no-extraneous-dependencies */
import { readFileSync, writeFileSync } from "fs";
import { dangerReassure } from "reassure";

const path = require("path");

const file = readFileSync(
  path.join(__dirname, "./.reassure/current.perf"),
  "utf8"
);

writeFileSync(path.join(__dirname, "./.reassure/output.md"), "file");

dangerReassure({
  inputFilePath: path.join(__dirname, "./.reassure/output.md"),
});
