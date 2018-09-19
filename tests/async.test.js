'use strict'

const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnAsync = require('../learnAsync');

describe('async', () => {
    context('runTwoFunctions', () => {
        it('should run functions one by one', (done) => {

            const passOneToCallback = function(callback) {
                callback(null, 1);
            }

            const addFiveToNumber = function(number, callback) {
                callback(null, (number + 5));
            }

            learnAsync.runTwoFunctions(passOneToCallback, addFiveToNumber, (err, data) => {
                assert.equal(6, data);
                done();
            });

            
        })
    });
});