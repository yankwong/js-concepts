const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnCurrying = require('../learnCurrying');

describe('learnCurrying', () => {

    context('getConcatFunction', () => {
        const concatCatWithThing = learnCurrying.getConcatFunction('cat');
        
        it('should concat "cat" with "dog"', () => {
            assert.equal('catdog', concatCatWithThing('dog'));
        });

        it ('should concat "cat" with ""', () => {
            assert.equal('cat', concatCatWithThing());
        });
    });
});