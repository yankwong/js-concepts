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

module.exports = {
    doSum,
    addNumberToEachElement
}

