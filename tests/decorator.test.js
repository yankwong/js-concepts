const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnDecorator = require('../learnDecorator');

describe.only('learnDecorator', () => {

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
            expect(consoleSpy).to.have.been.called.twice;
        });
    })
});