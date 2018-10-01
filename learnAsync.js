'use strict';

let async = require('async');

// another option is to use point-free programming by just putting the name of function in the waterfall
// the 3rd parameter is the final callback after the async waterfall
function runTwoFunctions(functionOne, functionTwo, callback) {
    async.waterfall([
        (callback) => functionOne(callback), //it's a wrapper of functionOne()
        (data, callback) => functionTwo(data, callback) // data is generated from functionOne
    ],
    (error, result) => {
        if (error) {
            callback(new Error('Error in function execution'), null);
        }
        else {
            callback(null, result);
        }
    });
}

module.exports = {
    runTwoFunctions
};