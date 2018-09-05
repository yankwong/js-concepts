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

module.exports = {
    doSum,
    addNumberToEachElement,
    applyLogicToEachElement
}

