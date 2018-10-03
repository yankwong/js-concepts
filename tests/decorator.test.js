const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnDecorator = require('../learnDecorator');

describe('learnDecorator', () => {

    context('appendConsoleToAction', () => {
        it('should call console.log and action', () => {
            // setup
            let consoleSpy = sinon.spy(console, 'log');
            let doConsole = function() {
                console.log('console.log from action');
            };
            let decoratedFunction = learnDecorator.appendConsoleToAction(doConsole);

            // action
            decoratedFunction();

            // assert
            assert.equal(consoleSpy.callCount, 2);
        });
    })
});