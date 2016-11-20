/// <reference path="./../typings/tsd.d.ts" />

import * as $G from 'graphinius';
import Neuron from './neurons/Neuron';

export default class Simulation {
  private _neuron_list: Neuron[];
  private _activation_model: string;
  private _all_ids: {[id: string]: number;}[]
  private _epoch: number;
  private _sine: boolean;
  private _noise: boolean;
  private _undirected: boolean;

  private activationFunc: (input: number[]) => number[]

  //----------------------------------------------------------------------------
  constructor (private _graph: $G.core.IGraph) {
    this._neuron_list = [];
    this._activation_model = "sigmoidal";
    this._all_ids = [];
    this._epoch = 0;
    this._sine = false;
    this._noise = false; // Should biologically speaking be true!
    this._undirected = false; // Should normally be true

    let all_nodes = this._graph.getNodes();
    let ctr = 0;
    for (let i in all_nodes) {
      this._neuron_list.push (new Neuron(all_nodes[i]));
      this._all_ids[i] = ctr++;
    }

    this.activationFunc = this.sigmoid;
    this.generateInVec();
  }

  //----------------------------------------------------------------------------
  get Sine() {return this._sine;}
  get Noise() {return this._noise;}
  get ActivationModel() {return this._activation_model;}
  get Epoch() {return this._epoch;}

  //----------------------------------------------------------------------------
  set Sine (sine: boolean) {this._sine = sine;}
  set Noise (noise: boolean) {this._noise = noise;}

  //----------------------------------------------------------------------------
  // Private method to generate the initial conditions
  private generateInVec () {
    for (let i in this._neuron_list) {
      this._neuron_list[i].Activation = this._neuron_list[i].Node.getID() === "A" || this._neuron_list[i].Node.getID() === "B" ? 0.8 : 0;
    }
  }

  // Private method to write the epochs csv-file
  private writeEpochsTable (epoch: number) {
    let fs = require('fs');
    let length = this._neuron_list.length;
    if (epoch === 0) {
      fs.writeFileSync ('./Epochs_F.csv', "Epoch,");
      for (let i = 0; i < (length - 1); ++i) {
        fs.appendFileSync ('./Epochs_F.csv', this._neuron_list[i].Node.getID() + ",");
      }
      fs.appendFileSync ('./Epochs_F.csv', this._neuron_list[length - 1].Node.getID() + "\n");
    }
    fs.appendFileSync ('./Epochs_F.csv', (epoch) + ",");
    for (let i = 0; i < (length - 1); ++i) {
      fs.appendFileSync ('./Epochs_F.csv', this._neuron_list[i].Activation + ",");
    }
    fs.appendFileSync ('./Epochs_F.csv', this._neuron_list[length - 1].Activation + "\n");
  }

  // Private method for the sigmoidal activation function
  private sigmoid (input: number[]) {
    let ans: number[] = [];
    for (let i in this._neuron_list) {
      ans[i] = (this._neuron_list[i].C / (1 + Math.pow (Math.E, -this._neuron_list[i].K*input[i])));
      if (ans[i] >= (this._neuron_list[i].C - 0.001)) {ans[i] = this._neuron_list[i].C;}
      else if (ans[i] <= 0.001) {ans[i] = 0;}
    }
    return ans;
  }

  // Private method to calculate input to the activation function
  private calcInput() {
    let ans: number[] = [];
    for (let i in this._neuron_list) {
      let tmp = 0;
      let connections = this._neuron_list[i].Node.prevNodes();
      for (let j in connections) {
        let key = this._all_ids[connections[j].node.getID()];
        tmp += connections[j].edge.getWeight()*this._neuron_list[key].Activation;
      }
      tmp -= (this._neuron_list[i].Refraction * this._neuron_list[i].Threshold);
      ans[i] = tmp;
    }
    return ans;
  }

  // Private method to calculate one epoch
  private calculateEpoch() {
    let tmp = this.calcInput();
    let output = this.activationFunc (tmp);

    for (let i in this._neuron_list) {
      this._neuron_list[i].Refraction -= this._neuron_list[i].Refraction !== 1 ? 1 : 0;
      this._neuron_list[i].Refraction = this._neuron_list[i].Activation >= this._neuron_list[i].Threshold ? 3 : this._neuron_list[i].Refraction;
    }

    return output;
  }

  //----------------------------------------------------------------------------
  // Public method to
  setActivationModel (model: string) {
    switch (model) {
      case "sigmoidal":
        this._activation_model = model;
        this.activationFunc = this.sigmoid;
        break;
      case "tanh":
        this._activation_model = model;
        //this.activationFunc = this.tanh;
        break;
      case "rlu":
        this._activation_model = model;
        //this.activationFunc = this.rlu;
        break;
      case "step":
        this._activation_model = model;
        //this.activationFunc = this.step;
        break;
      case "sine":
        this._activation_model = model;
        //this.activationFunc = this.sin;
        break;
      default:
        throw "Error! Provided activation model is not implemented yet!";
    }
  }

  // Public method for the simulation itself
  exec (nr_epochs: number = this._graph.getStats().nr_nodes) {
    this.writeEpochsTable (0);
    for (let i = 0; i < nr_epochs; ++i) {
      let output = this.calculateEpoch();
      for (let j in this._neuron_list) {
        this._neuron_list[j].Activation = output[j];
      }
      this.writeEpochsTable(i+1);
    }
  }
}

//export { Simulation };
