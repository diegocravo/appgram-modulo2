/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require("shelljs");

const resultado = shell.exec(
  "git diff --name-only branch-scripts-testes..main",
  { silent: true }
);
