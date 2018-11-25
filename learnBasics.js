'use strict';
function addTen(number) {
    return number + 10;
}

function doAdd(numberA, numberB) {
    return numberA + numberB;
}

function doMultiply(numberA, numberB) {
    return numberA * numberB;
}

function addOne(i) {
    return i + 1;
}

// conditional, IF
function isLessThanTen(userInput) {
    if (userInput < 10) {
        return true;
    }
    else {
        return false;
    }
}

function isThisPersonAGirl(something) {
    if(something == 'girl'){
        return true;
    }
    else {
        return false;
    }
}


// loop: for
function doAddTenThreeTimes(i) {
     for(var j = 0;  j < 3;  j++) {
         i = i + 10; //this is what's being run
     }
     return i;
}

// array
function getFirstElement(parameterArray) {

}

function determineSize(pound) {
    if (pound <= 10) {
        return 'small';
    }
    else if (pound >= 11 && pound <= 20) {
        return 'medium';
    }
    else {
        return 'large'
    }
}

function addMoonMoonMoonToUserInput(userInput) {
   for(var j = 0; j < 3 ; j++){
       userInput = userInput + 'Moon' 
   }
    return userInput 
}

function concatUserInputWithNumber(userInput, start, finish) {
    var resultString = '';

    for(var numberToConcat=start; numberToConcat <= finish; numberToConcat++){
        resultString = resultString +  (userInput + numberToConcat);
    }
    return resultString;
}

module.exports = {
    addTen,
    doAdd,
    addOne,
    isThisPersonAGirl,
    doMultiply,
    isLessThanTen,
    doAddTenThreeTimes,
    getFirstElement,
    determineSize,
    addMoonMoonMoonToUserInput
}