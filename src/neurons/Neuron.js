/// <reference path="../../typings/tsd.d.ts" />
"use strict";
//var neuron = "Neuron!";
var Neuron = (function () {
    //----------------------------------------------------------------------------
    function Neuron(_node) {
        this._node = _node;
        this._activation = 0;
        this._threshold = 0.6;
        this._c = 1;
        this._k = 15;
        this._refraction = 1;
    }
    Object.defineProperty(Neuron.prototype, "Node", {
        //----------------------------------------------------------------------------
        get: function () { return this._node; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neuron.prototype, "Activation", {
        get: function () { return this._activation; },
        //----------------------------------------------------------------------------
        set: function (activation) { this._activation = activation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neuron.prototype, "Threshold", {
        get: function () { return this._threshold; },
        set: function (threshold) { this._threshold = threshold; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neuron.prototype, "C", {
        get: function () { return this._c; },
        set: function (c) { this._c = c; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neuron.prototype, "K", {
        get: function () { return this._k; },
        set: function (k) { this._k = k; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neuron.prototype, "Refraction", {
        get: function () { return this._refraction; },
        set: function (refraction) { this._refraction = refraction; },
        enumerable: true,
        configurable: true
    });
    return Neuron;
}());
exports.Neuron = Neuron;
