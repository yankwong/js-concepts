'use strict'

const assert = require('chai').assert;
// let learnReduce = require('../learnReduce');
let learnReduce = require('../learnReduce2');

describe('reduce', () => {
    context('reduceSum', () => {
        it('should give you the sum of the input array', () => {
            let inputArray = [1, 2, 3];
            assert.equal(learnReduce.doSum(inputArray), 6);
        });
    });

    context('addNumberToEachElement', () => {
        it('should add 3 to each element of array', () => {
            let inputArray = [1, 2, 3];
            let resultArray = learnReduce.addNumberToEachElement(inputArray, 3);

            assert.deepEqual(resultArray, [4, 5, 6]);
        });
    });

    context('applyLogicToEachElement', () => {
        it('should apply function to each element of array if given a function', () => {
            let inputArray = [1, 2, 3];
            let addThree = function (element) {
                return element + 3;
            };

            assert.deepEqual(learnReduce.applyLogicToEachElement(inputArray, addThree), [4, 5, 6]);
        });

        it('should return the original array when not given a function', () => {
            let inputArray = [1, 2, 3];
            let resultArray = learnReduce.applyLogicToEachElement(inputArray, 'Not A Function');

            assert.deepEqual(resultArray, inputArray);
        });

        it('should return the original array when given function encounter error', () => {
            let inputArray = [1, 2, 3];
            let resultArray = learnReduce.applyLogicToEachElement(inputArray, (element) => {
                throw new Error('Generic Error');
            });

            assert.deepEqual(resultArray, inputArray);
        });
    });

    context('FizzBuzz', () => {
        it('should output FizzBuzz', () => {
            const expectedResult = ['fizzbuzz', 1, 2, 'fizz', 4, 'buzz'];
            const result = learnReduce.fizzBuzz([0, 1, 2, 3, 4, 5]);

            assert.deepEqual(expectedResult, result);
        });
    });

    context('getHelloWorld', () => {
        it('should get one Hello World', () => {
            const idealResult = 'Hello World!';
            const result = learnReduce.getHelloWorld();

            assert.equal(idealResult, result);
        });
    });

    context('doFilter', () => {
        it('should filter out non-integers', () => {
            const randomArray = [1, 'a', 'z', 3, 5];
            const correctResult = [1, 3, 5];
            const isInt = function (value) {
                if (isNaN(value)) {
                  return false;
                }
                var x = parseFloat(value);
                return (x | 0) === x;
              };
              
            const result = learnReduce.doFilter(randomArray, isInt);

            assert.deepEqual(result, correctResult);
        });

        it('should filter out integers', () => {
            const randomArray = [4, 3.5, 4.44, 1.9, 1];
            const correctResult = [3.5, 4.44, 1.9];
            const isInt = function (value) {
                if (isNaN(value)) {
                  return false;
                }
                var x = parseFloat(value);
                return (x | 0) === x;
            };
            const isNotInt = function(value) {
                return !isInt(value);
            }

            const result = learnReduce.doFilter(randomArray, isNotInt);

        });
    });

    context('getFibonacciArray', () => {
        it('should ouput Finbonacci Array of 1 element', () => {
            const resultArray = [0];
            assert.deepEqual(resultArray, learnReduce.getFibonacciArray(1));
        });

        it('should ouput Finbonacci Array of 2 element', () => {
            const resultArray = [0, 1];
            assert.deepEqual(resultArray, learnReduce.getFibonacciArray(2));
        });

        it('should ouput Finbonacci Array of 8 element', () => {
            const resultArray = [0, 1, 1, 2, 3, 5, 8, 13];
            assert.deepEqual(resultArray, learnReduce.getFibonacciArray(8));
        });
    });
});