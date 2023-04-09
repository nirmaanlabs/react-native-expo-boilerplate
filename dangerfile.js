/* eslint-disable import/no-extraneous-dependencies */
import { fail, message } from "danger";
import { readFileSync, writeFileSync } from "fs";
import { dangerReassure } from "reassure";

const path = require("path");

readFileSync(path.join(__dirname, "./.reassure/current.perf"), "utf8");

fail("Changed Files in this PR: \n - ");

// writeFileSync(path.join(__dirname, "./.reassure/output.md"), "file");

// dangerReassure({
//   inputFilePath: path.join(__dirname, "./.reassure/output.md"),
// });

//dfa
