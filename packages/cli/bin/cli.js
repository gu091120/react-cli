#!/usr/bin/env node
/* eslint-disable global-require */

const program = require('commander');
const pak = require('../package.json');
const { registerCommander } = require('../lib');

program.version(`react-cli ${pak.version}`).usage('<command> [options]');

try {
    registerCommander(program);
    program.parse(process.argv);
} catch (e) {
    process.exit();
}

function camelize(str) {
    return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function cleanArgs(cmd) {
    const args = {};
    cmd.options.forEach((o) => {
        const key = camelize(o.long.replace(/^--/, ''));
        // if an option is not present and Command has a method with the same name
        // it should not be copied
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key];
        }
    });
    return args;
}
