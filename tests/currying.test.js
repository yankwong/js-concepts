const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnCurrying = require('../learnCurrying');

describe('learnCurrying', () => {

    context('getConcatFunction', () => {
        const concatCatWithThing = learnCurrying.getConcatFunction('cat');
        const concatNothingWithThing = learnCurrying.getConcatFunction();
        
        it('should concat "cat" with "dog"', () => {
            assert.equal('catdog', concatCatWithThing('dog'));
        });

        it ('should concat "cat" with ""', () => {
            assert.equal('cat', concatCatWithThing());
        });

        it ('should concat "" with "dog" ', () => {
            assert.equal('dog', concatNothingWithThing('dog'));
        });
    });
    
});