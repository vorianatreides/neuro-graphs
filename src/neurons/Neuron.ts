/// <reference path="../../typings/tsd.d.ts" />

import * as $G from 'graphinius';

//var neuron = "Neuron!";

export default class Neuron {
  private _activation: number;
  private _threshold: number;
  private _c: number; // amplitude of the activation
  private _k: number; // steepness of the activation function
  //private _refraction = 1e6;
  private _refraction = 1;

  //----------------------------------------------------------------------------
  constructor (private _node: $G.core.IBaseNode) {
    this._activation = 0;
    this._threshold = 0.6;
    this._c = 1;
    this._k = 15;
  }

  //----------------------------------------------------------------------------
  get Node() {return this._node;}
  get Activation() {return this._activation;}
  get Threshold() {return this._threshold;}
  get C() {return this._c;}
  get K() {return this._k;}
  get Refraction() {return this._refraction;}

  //----------------------------------------------------------------------------
  set Activation (activation: number) {this._activation = activation;}
  set Threshold (threshold: number) {this._threshold = threshold;}
  set C (c: number) {this._c = c;}
  set K (k: number) {this._k = k;}
  set Refraction (refraction: number) {this._refraction = refraction;}
}

//export { Neuron };
