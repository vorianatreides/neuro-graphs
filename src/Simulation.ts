/// <reference path="./../typings/tsd.d.ts" />

import * as $G from 'graphinius';
import * as $N from './neurons/Neuron';

let Neuron = $N.Neuron;

class Simulation {
  private _neuron_list: $N.Neuron[];
  private _activation_model: string;
  private _all_ids: {[id: string]: number;}[];
  private _epoch: number;
  private _sine: boolean;
  private _noise: boolean;
  private _undirected: boolean;
  private _bounds: number[];
  private _globals: boolean;
  private _thresh: number;
  private _c: number;
  private _k: number;

  private activationFunc: (input: number[]) => number[]

  //----------------------------------------------------------------------------
  constructor (private _graph: $G.core.IGraph) {
    this.setDefaults();
  }

  //----------------------------------------------------------------------------
  get Graph() {return this._graph;}
  get Sine() {return this._sine;}
  get Noise() {return this._noise;}
  get ActivationModel() {return this._activation_model;}
  get Epoch() {return this._epoch;}
  get Undirected() {return this._undirected;}
  get Bounds() {return this._bounds;}
  get Neurons() {return this._neuron_list;}
  get Globals() {return this._globals;}
  get Threshold() {return this._thresh;}
  get Amplitude() {return this._c;}
  get Steepness() {return this._k;}

  //----------------------------------------------------------------------------
  set Noise (noise: boolean) {this._noise = noise;}
  set Globals (globals: boolean) {this._globals = globals;}
  set Threshold (thresh: number) {this._thresh = thresh;}
  set Amplitude (amp: number) {this._c = amp;}
  set Steepness (steep: number) {this._k = steep;}
  set Sine (sine: boolean) {
    this._sine = sine;
    if (sine) {
      this.activationFunc = this.sin;
      this._bounds[0] = -1;
      this._bounds[1] = 1;
    }
    else {this.setActivationModel (this._activation_model);}
  }
  set Graph (graph: $G.core.IGraph) {
    this._graph = graph;
    this.setDefaults();
  }
  set Undirected (undirected: boolean) {this._undirected = undirected;} // Controversial !!!

  //----------------------------------------------------------------------------
  // Private method to set all default values
  private setDefaults() {
    this._neuron_list = [];
    this._activation_model = "sigmoidal";
    this._bounds = [0, 1];
    this._all_ids = [];
    this._epoch = 0;
    this._sine = false;
    this._noise = false; // Should biologically speaking be true!
    this._undirected = !!this._graph.getStats().nr_und_edges; // Should normally be true
    this._globals = true;
    this._thresh = 0.6;
    this._c = 1;
    this._k = 15;

    let all_nodes = this._graph.getNodes();
    let ctr = 0;
    for (let i in all_nodes) {
      this._neuron_list.push (new Neuron(all_nodes[i]));
      this._all_ids[i] = ctr++;
    }

    this.activationFunc = this.sigmoid;
    this.generateInVec();
  }
  
  // Private method to generate the initial conditions
  private generateInVec () {
    for (let i in this._neuron_list) {
      //if (Math.random() <= 0.05) {this._neuron_list[i].Activation = this._c * Math.random();}
      //if (Math.random() <= 0.05) {this._neuron_list[i].Activation = this._neuron_list[i].C * Math.random();}
      if (this._neuron_list[i].Node.getID() === "A") {this._neuron_list[i].Activation = 0.999999;}
      if (this._neuron_list[i].Node.getID() === "B") {this._neuron_list[i].Activation = 0.5;}
    }
  }

  // Private method for the sigmoidal activation function
  private sigmoid (input: number[]) {
    let ans: number[] = [];
    // for (let i in this._neuron_list) {
    //   ans[i] = this._neuron_list[i].C / (1 + Math.pow (Math.E, -this._neuron_list[i].K*input[i]));
    //   if (ans[i] >= (this._neuron_list[i].C - 0.001)) {ans[i] = this._neuron_list[i].C;}
    //   else if (ans[i] <= 0.001) {ans[i] = 0;}
    // }
    for (let i in input) {
      ans[i] = this._c / (1 + Math.pow (Math.E, -this._k * input[i]));
      if (ans[i] >= (this._c - 0.001)) {ans[i] = this._c;}
      else if (ans[i] <= 0.001) {ans[i] = 0;}
    }
    return ans;
  }

  // Private method for the tanh activation function
  private tanh (input: number[]) {
    let ans: number[] = [];
    // for (let i in this._neuron_list) {
    //   ans[i] = 2 * this._neuron_list[i].C / (1 + Math.pow (Math.E, -2*this._neuron_list[i].K*input[i])) - 1;
    //   if (ans[i] >= (this._neuron_list[i].C - 0.001)) {ans[i] = this._neuron_list[i].C;}
    //   else if (ans[i] <= (0.001 - this._neuron_list[i].C)) {ans[i] = -this._neuron_list[i].C;}
    // }
    for (let i in input) {
      ans[i] = 2 * this._c / (1 + Math.pow (Math.E, -2 * this._k * input[i])) - 1;
      if (ans[i] >= (this._c - 0.001)) {ans[i] = this._c;}
      else if (ans[i] <= (0.001 - this._c)) {ans[i] = -this._c;}
    }
    return ans;
  }

  // Private method for the Heaviside (unit) step activation function
  private step (input: number[]) {
    let ans: number[] = [];
    // for (let i in this._neuron_list) {
    //   ans[i] = input[i] <= 0 ? 0 : (this._neuron_list[i].C);
    // }
    for (let i in input) {
      ans[i] = input[i] <= 0 ? 0 : this._c;
    }
    return ans;
  }

  // Private method for a simple and uncorrelated sinusoidal oscillation of neurons
  private sin (input: number[]) {
    let ans: number[] = [];
    // for (let i in this._neuron_list) {
    //   ans[i] = this._neuron_list[i].C * Math.sin (this._neuron_list[i].K * input[i]);
    // }
    for (let i in input) {
      ans[i] = this._c * Math.sin (this._k * input[i]);
    }
    return ans;
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

  // Private method to calculate input to the activation function
  // It is basically a multiplication of a weights matrix with an input vector
  private calcInput() {
    let ans: number[] = [];
    for (let i in this._neuron_list) {
      let tmp = 0;
      let connections = this._neuron_list[i].Node.prevNodes();
      for (let j in connections) {
        let key = this._all_ids[connections[j].node.getID()];
        tmp += connections[j].edge.getWeight() * this._neuron_list[key].Activation;
      }
      tmp -= this._neuron_list[i].Refraction * this._neuron_list[i].Threshold;
      if (this._noise) {tmp += Math.pow(Math.random(), 3) * this._neuron_list[i].C;}
      ans[i] = tmp;

      if (this._undirected) {
        tmp = 0;
        connections = this._neuron_list[i].Node.connNodes();
        for (let j in connections) {
          let key = this._all_ids[connections[j].node.getID()];
          tmp += connections[j].edge.getWeight() * this._neuron_list[key].Activation;
        }
        tmp -= this._neuron_list[i].Refraction * this._neuron_list[i].Threshold;
        if (this._noise) {tmp += Math.pow(Math.random(), 3) * this._neuron_list[i].C;}
        ans[i] += tmp;
      }
    }
    return ans;
  }

  //----------------------------------------------------------------------------
  
  // Public method to calculate one epoch
  calculateEpoch() {
    // let tmp = this.calcInput();
    let output = this.activationFunc (this.calcInput());

    for (let i in this._neuron_list) {
      this._neuron_list[i].Refraction -= this._neuron_list[i].Refraction !== 1 ? 1 : 0;
      this._neuron_list[i].Refraction = this._neuron_list[i].Activation >= this._neuron_list[i].Threshold ? 3 : this._neuron_list[i].Refraction;
      this._neuron_list[i].Activation = output[i];
      this._neuron_list[i].setColor (this._bounds[0], this._bounds[1]);
    }

    return output;
  }

  // Public method to
  setActivationModel (model: string) {
    switch (model) {
      case "sigmoidal":
        this._activation_model = model;
        this.activationFunc = this.sigmoid;
        this._bounds[0] = 0;
        this._bounds[1] = 1;
        break;
      case "tanh":
        this._activation_model = model;
        this.activationFunc = this.tanh;
        this._bounds[0] = -1;
        this._bounds[1] = 1;
        break;
      case "rlu":
        this._activation_model = model;
        //this.activationFunc = this.rlu;
        this._bounds[0] = 0;
        this._bounds[1] = Number.POSITIVE_INFINITY;
        break;
      case "step":
        this._activation_model = model;
        this.activationFunc = this.step;
        this._bounds[0] = 0;
        this._bounds[1] = 1;
        break;
      default:
        throw new Error ("Error! Provided activation model is not implemented yet!");
    }
    this._sine = false;
  }

  // Public method for the simulation itself
  exec (nr_epochs: number = this._graph.getStats().nr_nodes) {
    this.writeEpochsTable (0);
    for (let j in this._neuron_list) {
      this._neuron_list[j].setColor (this._bounds[0], this._bounds[1]);
    }
    for (let i = 0; i < nr_epochs; ++i) {
      this.calculateEpoch();
      this.writeEpochsTable(i+1);
    }
  }
}

export { Simulation };
