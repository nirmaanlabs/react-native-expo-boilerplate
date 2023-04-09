/* eslint-disable import/no-extraneous-dependencies */
import { dangerReassure } from "reassure";

const path = require("path");

dangerReassure({
  inputFilePath: path.join(__dirname, "./.reassure/output.md"),
});
