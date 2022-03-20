var inquirer = require('inquirer');
var ejs = require('ejs');
var fs = require('fs-extra');
var download = require('download-git-repo');
var path = require('path');
var { spinner } = require('@gujy/share-utils');

fs.copy('../lib', '../__tests__');

module.exports = (content) => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'templateType',
                message: 'select template type',
                choices: ['react-single', 'react-multiple', 'node-multiple', 'node-single'],
            },
            /* Pass your questions in here */
        ])
        .then(async (answers) => {
            console.log('🚀 ~ file: prompt.js ~ line 15 ~ .then ~ answers', answers.templateType);
            // Use user feedback for... whatever!!
            spinner.logWithSpinner('📦 ', '下载模版');
            var files = await downloadTemplateByLocal(answers.templateType, content);
            spinner.stopSpinner();
            console.log('🚀 ~ file: prompt.js ~ line 26 ~ .then ~ files', files);
            await renderTemplate(files, { projectName: 'sfd' });
            console.log('success');
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
};

var templateMap = {
    'react-single': 'templates/react-single',
    'react-multiple': 'templates/react-multiple',
    'node-single': 'templates/node-single',
    'node-multiple': 'templates/node-multiple',
};

async function downloadTemplateByGithup(templateType, clone, content) {
    var tmpdir = path.join(content.currentPath, content.projectName);
    if (clone) {
        await fs.remove(tmpdir);
    }
    var repository = templateMap[templateType];
    await new Promise((resolve, reject) => {
        download(repository, tmpdir, { clone: true }, (err) => {
            console.log('🚀 ~ file: prompt.js ~ line 51 ~ download ~ err', err);
            if (err) return reject(err);
            resolve();
        });
    });
    return tmpdir;
}

async function downloadTemplateByLocal(templateType, content) {
    var tmpdir = path.join(content.currentPath, content.projectName);
    await fs.remove(tmpdir);
    var repository = templateMap[templateType];
    const localpath = path.resolve(__dirname, '../', repository);
    console.log('🚀 ~ file: prompt.js ~ line 70 ~ downloadTemplateByLocal ~ localpath', tmpdir);

    try {
        await fs.copy(localpath, tmpdir);
    } catch (e) {
        throw new Error(e);
    }
    return tmpdir;
}

async function renderTemplate(file, renderData) {
    ejs.renderFile(file, renderData, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
    });
}
