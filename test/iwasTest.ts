/// <reference path="../typings/tsd.d.ts" />


import * as chai from 'chai';
import * as iwas from '../src/iwas';

var expect = chai.expect;

describe('iwas testing', () => {
  
  it('iwas function should return true', () => {
    
    expect(iwas.iwas()).to.be.true;
    
  });
  
});