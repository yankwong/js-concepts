'use strict';

// reduce (accumulator, currentValue);

function doSum(numArray) {
    return numArray.reduce( (total, amount) => {
        return total + amount;
    });
}

function addNumberToEachElement(numArray, number) {
    return numArray.reduce( (total, amount) => {
        // .push is a modifier, it does not return an array
        total.push(amount + number); 
        // you can also do total.concat()
        return total;
    }, []);
}

function getAverageOfArray(numArray) {
    return numArray.reduce( (total, amount, currentIndex) => {
        
        total += amount;
        if (currentIndex === numArray.length - 1) {
            total /= numArray.length;
        }

        return total;
    });
}

function applyLogicToEachElement(inputArray, functionToCall) {
    if (typeof functionToCall === 'function') {
        return inputArray.reduce( (total, element) => {
            try {
                total.push(functionToCall.call(this, element));
            }
            catch (error){
                console.log(`Error Encountered: ${error.message}`);
                total.push(element);
            }
            return total;
        }, []);
    }
    else {
        return inputArray;
    }
}

function fizzBuzz(numberArray) {
    return numberArray.reduce((accumulator, element) => {
        let pushValue = '';
        if (element % 3 === 0) {
            pushValue += 'fizz';
        }
        if (element % 5 === 0) {
            pushValue += 'buzz';
        }
        if (pushValue === '') {
            pushValue = element;
        }
        accumulator.push(pushValue);
        return accumulator;
    }, [])
}

// fun thing to notice, calling reduce() on a single element array (with no initial value) will
// cause it to not run
function getHelloWorld() {
    const singleItemArray = [1];
    
    return singleItemArray.reduce((accumulator, element) => {
        return accumulator + 'Hello World!';
    }, '');
}

// make sure accumulator always get returned so it doesn't break the reduce chain
function doFilter(someArray, requirementFunction) {
    return someArray.reduce((accumulator, element) => {
        if (requirementFunction(element)) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);
}

module.exports = {
    doSum,
    addNumberToEachElement,
    applyLogicToEachElement,
    getAverageOfArray,
    fizzBuzz,
    getHelloWorld,
    doFilter
}

