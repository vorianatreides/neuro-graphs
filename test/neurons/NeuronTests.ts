/// <reference path="../../typings/tsd.d.ts" />

import * as chai from 'chai';
import * as Neuron from '../../src/neurons/Neuron';

declare var require : any;

let $G = require('graphinius').$G;
var expect = chai.expect;


describe('NEURON TESTS', () => {
  
  it('should test the successful graphinius import', () => {
    expect( Neuron.neuron ).to.equal("Neuron!");
  });
  
});