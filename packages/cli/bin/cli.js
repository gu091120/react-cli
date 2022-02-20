#!/usr/bin/env node

const program = require("commander");
program
    .version(`@vue/cli ${require("../package").version}`)
    .usage("<command> [options]");

program.command("create <app-name>").description("创建一个新的项目");
