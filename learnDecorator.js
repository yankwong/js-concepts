'use strict';

function appendConsoleToAction(action) {
    return function (...args) {
        console.log('console.log from decorator');
        action.call(...args);
    }
}
module.exports = {
    appendConsoleToAction,
}