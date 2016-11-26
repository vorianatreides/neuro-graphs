/// <reference path="../../typings/tsd.d.ts" />

import * as $G from 'graphinius';
let THREE = require ('three');

//var neuron = "Neuron!";

export default class Neuron {
  private _activation: number;
  private _color: any;
  private _threshold: number;
  private _c: number; // amplitude of the activation
  private _k: number; // steepness of the activation function
  //private _refraction = 1e6;
  private _refraction: number;

  //----------------------------------------------------------------------------
  constructor (private _node: $G.core.IBaseNode) {
    this._activation = 0;
    this._color = new THREE.Color(0x0000ff);
    this._threshold = 0.6;
    this._c = 1;
    this._k = 15;
    this._refraction = 1;
    let node_color = {r: this._color.r, g: this._color.g, b: this._color.b};
    this._node.setFeature ("color", node_color);
  }

  //----------------------------------------------------------------------------
  get Node() {return this._node;}
  get Activation() {return this._activation;}
  get Threshold() {return this._threshold;}
  get C() {return this._c;}
  get K() {return this._k;}
  get Refraction() {return this._refraction;}
  get Color() {return this._color;}

  //----------------------------------------------------------------------------
  set Activation (activation: number) {this._activation = activation;}
  set Threshold (threshold: number) {this._threshold = threshold;}
  set C (c: number) {this._c = c;}
  set K (k: number) {this._k = k;}
  set Refraction (refraction: number) {this._refraction = refraction;}

  //----------------------------------------------------------------------------
  // Private method to add a feature to the graph nodes
  // Or should this happen in the constructor instead?
  private addColor() {
    let node_color = {r: this._color.r, g: this._color.g, b: this._color.b};
    this._node.setFeature ("color", node_color);
  }

  //----------------------------------------------------------------------------
  // Public method to set the color of a neuron according to its activation
  // @param max_distance: difference between maximal and minimal possible activation
  // according to the activation model being used, e.g. 1 for sigmoidal and 2 for tanh
  public setColor (min: number, max: number) {
    let start_color = new THREE.Color(0x0000ff),
        middle_color = new THREE.Color(0x00ff00),
        end_color = new THREE.Color(0xff0000),
        first_color = start_color,
        second_color = middle_color,
        low = this._c * min,
        up = this._c * max,
        half = (up - low) / 2,
        middle = low + half;

    let mod_half = this._activation - low;
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
    let smth = this._node.getFeature ("color");
    console.log (this._node.getID() + ": {r: " + smth.r + ", g: " + smth.g + ", b: " + smth.b + "}");
  }
}

//export { Neuron };
