/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var chai = require('chai');
var Neuron = require('../../src/neurons/Neuron');
var expect = chai.expect;
describe('NEURON TESTS', function () {
    it('should test the successful graphinius import', function () {
        expect(Neuron.neuron).to.equal("Neuron!");
    });
});
