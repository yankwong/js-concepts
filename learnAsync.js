'use strict';

let async = require('async');

// the 3rd parameter is the final callback after the async waterfall
function runTwoFunctions(functionOne, functionTwo, callback) {
    async.waterfall([
        (callback) => functionOne(callback),
        (data, callback) => functionTwo(data, callback)
    ],
    (error, result) => {
        if (error) {
            callback(new Error('Error in function execution'), null);
        }
        else {
            console.log('yoafyasfas!!!!!df', result);
            callback(null, result);
        }
    });

}

module.exports = {
    runTwoFunctions
};