const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const learnBasics = require('../learnBasics');

describe.only('The Basic Concepts', () => {
    context('AddTen', () => {
        it('should add 10 to a positive number',() => {
            assert.equal(learnBasics.addTen(1), 11);
        });

        it('should add 10 to a negative number',() => {
            assert.equal(learnBasics.addTen(-5), 5);
        });
    }); 

    context('AddOne', ()=> {
        it('should add 1 to a positive number', ()=>{
            assert.equal(learnBasics.addOne(5), 6);
        });
        it('should add 1 to a negative number', () => {
            assert.equal(learnBasics.addOne(-1), 0);
        });
        it('should add 1 to a zero', () => {
            assert.equal(learnBasics.addOne(0), 1);
        });
    });

    context('doAdd', () => {
        it('should add 8 to 2 and gives us 10', () => {
            assert.equal(learnBasics.doAdd(8, 2), 10);
        });

        it('should add 8 to -2 and gives us 6', () => {
            assert.equal(learnBasics.doAdd(8, -2), 6);
        });

        it('should throw an error when a parameter is not an integer');
    });

    context('doMultiply', () => {
        it('should multiply 8 and 2 will gives us 16', () => {
            assert.equal(learnBasics.doMultiply(8, 2), 16);
        });

        it('should multiply 8 and -2 will gives us -16', () => {
            assert.equal(learnBasics.doMultiply(8, -2), -16);
        });

        it('should throw an error when a parameter is not an integer');
    });

    context('isLessThanTen', ()=> {
        it('should return true when given a number', ()=> {
            assert.equal(learnBasics.isLessThanTen(5), true);
        });

        it('should return false when given a string', ()=> {
            assert.equal(learnBasics.isLessThanTen('hi'), false);
        });
    });

    context('isThisPersonAGirl', ()=> {
        it('should return true when given a girl', ()=> {
            assert.equal(learnBasics.isThisPersonAGirl('girl'), true);
        });

        it('should return false when given a boy', ()=> {
            assert.equal(learnBasics.isThisPersonAGirl('boy'), false);
        });

        it('should return false when given a computer', ()=> {
            assert.equal(learnBasics.isThisPersonAGirl('asfsdf'), false);
        });
    });

    context('determineSize', ()=> {
        it('should return the word "small" when size is less than 10', ()=>{
            assert.equal(learnBasics.determineSize(9), 'small');
        });
        it('should return the word "small" when size is less than 10', ()=>{
            assert.equal(learnBasics.determineSize(10), 'small');
        });
        it('should return the word "medium" when size is between 11 to 20', ()=>{
            assert.equal(learnBasics.determineSize(11), 'medium');
        });
        it('should return the word "large" when size is bigger than 20', ()=>{
            assert.equal(learnBasics.determineSize(21), 'large');
        });
    });

    context('doAddTenThreeTimes', ()=> {
        it('should return 40 when given 10', ()=> {
            assert.equal(learnBasics.doAddTenThreeTimes(10), 40);
        });

        it('should return 30 when given 0', ()=> {
            assert.equal(learnBasics.doAddTenThreeTimes(0), 30);
        });
    });

    context('addMoonMoonMoonToUserInput', ()=> {
        it('should return user string with MoonMoonMoon appended', ()=> {
            assert.equal(learnBasics.addMoonMoonMoonToUserInput('bobby'), 'bobbyMoonMoonMoon');
        });
    });

    context.skip('getFirstElement', ()=> {
        it('should give back the first element of the array', ()=> {
            assert.equal(learnBasics.getFirstElement([1, 2, 3]), 1);
        });

        it('should give back nothing if array is empty');
    });
});

