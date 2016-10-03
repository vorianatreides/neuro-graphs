/// <reference path="../typings/tsd.d.ts" />
"use strict";
var chai = require('chai');
var iwas = require('../src/iwas');
var expect = chai.expect;
describe('iwas testing', function () {
    it('iwas function should return true', function () {
        expect(iwas.iwas()).to.be.true;
    });
});
