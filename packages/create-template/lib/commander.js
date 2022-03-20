const prompt = require('./prompt');

module.exports = (program) => {
    program
        .command('create <app-name>')
        .description('创建一个新的项目')
        .action((name, cmd) => {
            // const options = cleanArgs(cmd);
            prompt({
                cmd,
                projectName: name,
                // options: options,
                currentPath: process.cwd(),
            });
        });
};
