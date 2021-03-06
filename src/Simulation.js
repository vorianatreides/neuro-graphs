/// <reference path="./../typings/tsd.d.ts" />
"use strict";
var $N = require('./neurons/Neuron');
var Neuron = $N.Neuron;
var Simulation = (function () {
    //----------------------------------------------------------------------------
    function Simulation(_graph) {
        this._graph = _graph;
        this.setDefaults();
    }
    Object.defineProperty(Simulation.prototype, "Graph", {
        //----------------------------------------------------------------------------
        get: function () { return this._graph; },
        set: function (graph) {
            this._graph = graph;
            this.setDefaults();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Noise", {
        get: function () { return this._n; },
        //----------------------------------------------------------------------------
        set: function (noise) { this._n = noise; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "ActivationModel", {
        get: function () { return this._activation_model; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Epoch", {
        get: function () { return this._epoch; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Undirected", {
        get: function () { return this._undirected; },
        set: function (undirected) { this._undirected = undirected; } // Controversial !!!
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Bounds", {
        get: function () { return this._bounds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Neurons", {
        get: function () { return this._neuron_list; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Globals", {
        get: function () { return this._globals; },
        set: function (globals) { this._globals = globals; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Threshold", {
        get: function () { return this._thresh; },
        set: function (thresh) { this._thresh = thresh; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Amplitude", {
        get: function () { return this._c; },
        set: function (amp) { this._c = amp; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Steepness", {
        get: function () { return this._k; },
        set: function (steep) { this._k = steep; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Refraction", {
        get: function () { return this._refr; },
        set: function (refr) { this._refr = refr; },
        enumerable: true,
        configurable: true
    });
    //----------------------------------------------------------------------------
    // Private method to set all default values
    Simulation.prototype.setDefaults = function () {
        this._neuron_list = [];
        this._activation_model = "sigmoidal";
        this._bounds = [0, 1];
        this._all_ids = [];
        this._epoch = 0;
        this._n = 0; // Should biologically speaking be more than 0!
        this._undirected = !!this._graph.getStats().nr_und_edges; // Should normally be true
        this._globals = true;
        this._thresh = 0.6;
        this._c = 1;
        this._k = 15;
        this._refr = 5;
        var all_nodes = this._graph.getNodes();
        var ctr = 0;
        for (var i in all_nodes) {
            this._neuron_list.push(new Neuron(all_nodes[i]));
            this._all_ids[i] = ctr++;
        }
        this.activationFunc = this.sigmoid;
        this.generateInVec(0);
    };
    // Private method for the sigmoidal activation function
    Simulation.prototype.sigmoid = function (input) {
        var ans = [];
        // for (let i in this._neuron_list) {
        //   ans[i] = this._neuron_list[i].C / (1 + Math.pow (Math.E, -this._neuron_list[i].K*input[i]));
        //   if (ans[i] >= (this._neuron_list[i].C - 0.001)) {ans[i] = this._neuron_list[i].C;}
        //   else if (ans[i] <= 0.001) {ans[i] = 0;}
        // }
        for (var i in input) {
            ans[i] = this._c / (1 + Math.pow(Math.E, -this._k * input[i]));
            if (ans[i] >= (this._c - 0.001)) {
                ans[i] = this._c;
            }
            else if (ans[i] <= 0.001) {
                ans[i] = 0;
            }
        }
        return ans;
    };
    // Private method for the tanh activation function
    Simulation.prototype.tanh = function (input) {
        var ans = [];
        // for (let i in this._neuron_list) {
        //   ans[i] = 2 * this._neuron_list[i].C / (1 + Math.pow (Math.E, -2*this._neuron_list[i].K*input[i])) - 1;
        //   if (ans[i] >= (this._neuron_list[i].C - 0.001)) {ans[i] = this._neuron_list[i].C;}
        //   else if (ans[i] <= (0.001 - this._neuron_list[i].C)) {ans[i] = -this._neuron_list[i].C;}
        // }
        for (var i in input) {
            ans[i] = 2 * this._c / (1 + Math.pow(Math.E, -2 * this._k * input[i])) - 1;
            if (ans[i] >= (this._c - 0.001)) {
                ans[i] = this._c;
            }
            else if (ans[i] <= (0.001 - this._c)) {
                ans[i] = -this._c;
            }
        }
        return ans;
    };
    // Private method for the rectified linear unit activation function
    Simulation.prototype.rlu = function (input) {
        var ans = [];
        for (var i in input) {
            ans[i] = Math.max(0, this._k * input[i]);
        }
        return ans;
    };
    // Private method for the Heaviside (unit) step activation function
    Simulation.prototype.step = function (input) {
        var ans = [];
        // for (let i in this._neuron_list) {
        //   ans[i] = input[i] <= 0 ? 0 : (this._neuron_list[i].C);
        // }
        for (var i in input) {
            ans[i] = input[i] <= 0 ? 0 : this._c;
        }
        return ans;
    };
    // Private method for a simple and uncorrelated sinusoidal oscillation of neurons
    Simulation.prototype.sin = function (input) {
        var ans = [];
        // for (let i in this._neuron_list) {
        //   ans[i] = this._neuron_list[i].C * Math.sin (this._neuron_list[i].K * input[i]);
        // }
        for (var i in input) {
            ans[i] = this._c * Math.sin(this._k * input[i]);
        }
        return ans;
    };
    // Private method to write the epochs csv-file
    Simulation.prototype.writeEpochsTable = function (epoch) {
        var fs = require('fs');
        var length = this._neuron_list.length;
        if (epoch === 0) {
            fs.writeFileSync('./Epochs_F.csv', "Epoch,");
            for (var i = 0; i < (length - 1); ++i) {
                fs.appendFileSync('./Epochs_F.csv', this._neuron_list[i].Node.getID() + ",");
            }
            fs.appendFileSync('./Epochs_F.csv', this._neuron_list[length - 1].Node.getID() + "\n");
        }
        fs.appendFileSync('./Epochs_F.csv', (epoch) + ",");
        for (var i = 0; i < (length - 1); ++i) {
            fs.appendFileSync('./Epochs_F.csv', this._neuron_list[i].Activation + ",");
        }
        fs.appendFileSync('./Epochs_F.csv', this._neuron_list[length - 1].Activation + "\n");
    };
    // Private method to calculate input to the activation function
    // It is basically a multiplication of a weights matrix with an input vector
    Simulation.prototype.calcInput = function () {
        var ans = [];
        for (var i in this._neuron_list) {
            var tmp = 0;
            var connections = this._neuron_list[i].Node.prevNodes();
            for (var j in connections) {
                var key = this._all_ids[connections[j].node.getID()];
                tmp += connections[j].edge.getWeight() * this._neuron_list[key].Activation;
            }
            tmp -= this._neuron_list[i].Refraction * this._thresh;
            if (!!this._n) {
                tmp += Math.pow(Math.random(), this._n) * this._c;
            }
            ans[i] = tmp;
            if (this._undirected) {
                tmp = 0;
                connections = this._neuron_list[i].Node.connNodes();
                for (var j in connections) {
                    var key = this._all_ids[connections[j].node.getID()];
                    tmp += connections[j].edge.getWeight() * this._neuron_list[key].Activation;
                }
                tmp -= this._neuron_list[i].Refraction * this._thresh;
                if (!!this._n) {
                    tmp += Math.pow(Math.random(), this._n) * this._c;
                }
                ans[i] += tmp;
            }
        }
        return ans;
    };
    //----------------------------------------------------------------------------
    // Public method to generate an input vector of activations
    Simulation.prototype.generateInVec = function (percentage) {
        for (var i in this._neuron_list) {
            if (Math.random() <= percentage) {
                this._neuron_list[i].Activation = this._c * Math.random();
            }
            else {
                this._neuron_list[i].Activation = 0;
            }
        }
    };
    // Public method to calculate one epoch
    Simulation.prototype.calculateEpoch = function () {
        var output = this.activationFunc(this.calcInput());
        for (var i in this._neuron_list) {
            if (this._neuron_list[i].Refraction !== 1) {
                this._neuron_list[i].Refraction /= 2;
            }
            if (this._neuron_list[i].Refraction < 1) {
                this._neuron_list[i].Refraction = 1;
            }
            if (this._neuron_list[i].Activation >= this._thresh) {
                this._neuron_list[i].Refraction = this._refr;
            }
            this._neuron_list[i].Activation = output[i];
        }
        return output;
    };
    // Public method to set the activation function
    Simulation.prototype.setActivationModel = function (model) {
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
                this.activationFunc = this.rlu;
                this._bounds[0] = 0;
                this._bounds[1] = Number.POSITIVE_INFINITY;
                break;
            case "step":
                this._activation_model = model;
                this.activationFunc = this.step;
                this._bounds[0] = 0;
                this._bounds[1] = 1;
                break;
            case "sin":
                this._activation_model = model;
                this.activationFunc = this.sin;
                this._bounds[0] = -1;
                this._bounds[1] = 1;
            default:
                throw new Error("Error! Provided activation model is not implemented yet!");
        }
    };
    // Public method for the simulation itself
    Simulation.prototype.exec = function (nr_epochs) {
        if (nr_epochs === void 0) { nr_epochs = this._graph.getStats().nr_nodes; }
        this.writeEpochsTable(0);
        for (var i = 0; i < nr_epochs; ++i) {
            this.calculateEpoch();
            this.writeEpochsTable(i + 1);
        }
    };
    return Simulation;
}());
exports.Simulation = Simulation;
