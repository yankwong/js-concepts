'use strict';

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
    const singleItemArray = Array(1).fill(0);
    
    return singleItemArray.reduce((accumulator, element) => {
        return accumulator + 'Hello World!';
    }, '');
}

// make sure accumulator always need to be returned so it doesn't break the reduce chain
function doFilter(someArray, requirementFunction) {
    return someArray.reduce((accumulator, element) => {
        if (requirementFunction(element)) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);
}

// F0 = 0; F1 = 1; Fn = F(n-1) + F(n-2)
function getFibonacciArray(outputLength) {
    let resultArray = Array(outputLength).fill(0);

    return resultArray.reduce((accumulator, element, index) => {
        if (index === 0) {
            accumulator.push(0);
        } else if (index === 1) {
            accumulator.push(1);
        } else {
            accumulator.push(accumulator[index-1] + accumulator[index-2]);
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
    doFilter,
    getFibonacciArray
}

