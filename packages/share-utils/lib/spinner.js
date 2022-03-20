var chalk = require('chalk');
var ora = require('ora');

var spinner = ora();
var lastMsg = null;

const logWithSpinner = (symbol, msg) => {
    if (!symbol) {
        msg = symbol;
        symbol = chalk.green('☑️');
    }

    if (lastMsg) {
        spinner.stopAndPersist({
            ...lastMsg,
        });
    }
    lastMsg = {
        text: msg,
        symbol,
    };

    spinner.text = msg;
    spinner.start();
};

const stopSpinner = () => {
    if (!spinner.isSpinning) {
        return;
    }
    if (lastMsg) {
        spinner.stopAndPersist({
            ...lastMsg,
        });
    } else {
        stop();
    }
    lastMsg = null;
};
module.exports = {
    stopSpinner,
    logWithSpinner,
};
