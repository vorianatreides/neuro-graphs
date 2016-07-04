/// <reference path="../../typings/tsd.d.ts" />

import * as chai from 'chai';
// import * as BCM from '../../src/learning_models/BCM';

declare var require : any;

let $G = require('graphinius').$G;
var expect = chai.expect;


describe('LEARNING MODELS - BCM TESTS -', () => {
  
  it('should say Hello from BCM Tests', () => {
    console.log("Hello from BCM Tests!");
    expect(true).to.be.true;
  });
  
});