'use strict'

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnAsync = require('../learnAsync');

describe('async', () => {

    context('runTwoFunctions', () => {
        
        let passOneToCallback;
        let addFiveToNumber;

        beforeEach(()=> {
            passOneToCallback = function(callback) {
                callback(null, 1);
            }

            addFiveToNumber = function(number, callback) {
                callback(null, (number + 5));
            }
        });

        it('should give us the correct result value', (done) => {
            learnAsync.runTwoFunctions(passOneToCallback, addFiveToNumber, (err, data) => {
                assert.equal(6, data);
                done();
            });
        });

        it('should call the functions in the correct order', (done) => {
            let functionOneSpy = sinon.spy(passOneToCallback);
            let functionTwoSpy = sinon.spy(addFiveToNumber);

            learnAsync.runTwoFunctions(functionOneSpy, functionTwoSpy, (err, data) => {
                sinon.assert.callOrder(functionOneSpy, functionTwoSpy);
                done();
            });
        });
    });

    
});