/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var THREE = require('three');
//var neuron = "Neuron!";
var Neuron = (function () {
    //----------------------------------------------------------------------------
    function Neuron(_node) {
        this._node = _node;
        this._activation = 0;
        this._color = new THREE.Color(0x0000ff);
        this._threshold = 0.6;
        this._c = 1;
        this._k = 15;
        this._refraction = 1;
        var node_color = { r: this._color.r, g: this._color.g, b: this._color.b };
        this._node.setFeature("color", node_color);
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
    Object.defineProperty(Neuron.prototype, "Color", {
        get: function () { return this._color; },
        enumerable: true,
        configurable: true
    });
    //----------------------------------------------------------------------------
    // Private method to add a feature to the graph nodes
    // Or should this happen in the constructor instead?
    Neuron.prototype.addColor = function () {
        var node_color = { r: this._color.r, g: this._color.g, b: this._color.b };
        this._node.setFeature("color", node_color);
    };
    //----------------------------------------------------------------------------
    // Public method to set the color of a neuron according to its activation
    // @param max_distance: difference between maximal and minimal possible activation
    // according to the activation model being used, e.g. 1 for sigmoidal and 2 for tanh
    Neuron.prototype.setColor = function (min, max) {
        var start_color = new THREE.Color(0x0000ff), middle_color = new THREE.Color(0x00ff00), end_color = new THREE.Color(0xff0000), first_color = start_color, second_color = middle_color, low = this._c * min, up = this._c * max, half = (up - low) / 2, middle = low + half;
        var mod_half = this._activation - low;
        if (this._activation > middle) {
            first_color = middle_color;
            second_color = end_color;
            mod_half = this._activation - middle;
        }
        //let mod_half = (this._activation % half) ? (this._activation % half) : ((this._activation-1) % half);
        this._color.r = first_color.r + (second_color.r - first_color.r) / half * mod_half;
        this._color.g = first_color.g + (second_color.g - first_color.g) / half * mod_half;
        this._color.b = first_color.b + (second_color.b - first_color.b) / half * mod_half;
        this.addColor();
        var smth = this._node.getFeature("color");
        console.log(this._node.getID() + ": {r: " + smth.r + ", g: " + smth.g + ", b: " + smth.b + "}");
    };
    return Neuron;
}());
exports.Neuron = Neuron;
