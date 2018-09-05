'use strict'

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnReduce = require('../learnReduce');

describe('reduce', () => {
    context('reduceSum', () => {
        it('should give you the sum of the input array', () => {
            let inputArray = [1, 2, 3];
            assert.equal(learnReduce.doSum(inputArray), 6);
        });

        it('should add 3 to each element of array', () => {
            let inputArray = [1, 2, 3];
            let resultArray = learnReduce.addNumberToEachElement(inputArray, 3);

            assert.deepEqual(resultArray, [4, 5, 6]);
        });

        it('should add 3 to each element of array', () => {
            let addThree = function (element) {
                return element + 3;
            };
            let inputArray = [1, 2, 3];

            assert.deepEqual(learnReduce.applyLogicToEachElement(inputArray, addThree), [4, 5, 6]);
        });
    });
});