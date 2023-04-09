/* eslint-disable import/no-extraneous-dependencies */
import { danger, message } from "danger";
import { dangerReassure } from "reassure";

const path = require("path");

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);

// dangerReassure({
//   inputFilePath: path.join(__dirname, "./.reassure/output.md"),
// });
