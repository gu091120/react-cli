const createTemplate = require('@gujy/create-template/lib/commander');
/**
 * 注册命令行服务
 *
 * @param {*} program
 */
const registerCommander = (program) => {
    createTemplate(program);
};

module.exports = {
    registerCommander,
};
