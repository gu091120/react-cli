#!/usr/bin/env node
/* eslint-disable global-require */

const program = require('commander');
const pak = require('../package.json');

program.version(`@vue/cli ${pak.version}`).usage('<command> [options]');

program.command('create <app-name>').description('创建一个新的项目');
