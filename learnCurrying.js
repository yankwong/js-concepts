'use strict';

// currying is the process of breaking down a function into a series of functions that each take a single argument
function getConcatFunction (param1='') {
    return (param2='') => {
        return param1 + param2;
    }
}

module.exports = {
    getConcatFunction,
}