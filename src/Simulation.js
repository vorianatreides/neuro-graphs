/// <reference path="./../typings/tsd.d.ts" />
"use strict";
var Neuron_1 = require('./neurons/Neuron');
var Simulation = (function () {
    //----------------------------------------------------------------------------
    function Simulation(_graph) {
        this._graph = _graph;
        this._neuron_list = [];
        this._activation_model = "sigmoidal";
        this._bounds = [0, 1];
        this._all_ids = [];
        this._epoch = 0;
        this._sine = false;
        this._noise = false; // Should biologically speaking be true!
        this._undirected = !!this._graph.getStats().nr_und_edges; // Should normally be true
        var all_nodes = this._graph.getNodes();
        var ctr = 0;
        for (var i in all_nodes) {
            this._neuron_list.push(new Neuron_1.default(all_nodes[i]));
            this._all_ids[i] = ctr++;
        }
        this.activationFunc = this.sigmoid;
        this.generateInVec();
    }
    Object.defineProperty(Simulation.prototype, "Graph", {
        //----------------------------------------------------------------------------
        get: function () { return this._graph; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Sine", {
        get: function () { return this._sine; },
        set: function (sine) {
            this._sine = sine;
            this._activation_model = "oscillation";
            this.activationFunc = this.sin;
            this._bounds[0] = -1;
            this._bounds[1] = 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Noise", {
        get: function () { return this._noise; },
        //----------------------------------------------------------------------------
        set: function (noise) { this._noise = noise; },
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
    //----------------------------------------------------------------------------
    // Private method to generate the initial conditions
    Simulation.prototype.generateInVec = function () {
        for (var i in this._neuron_list) {
            //this._neuron_list[i].Activation = this._neuron_list[i].Node.getID() === "A" || this._neuron_list[i].Node.getID() === "B" ? 0.8 : 0;
            if (this._neuron_list[i].Node.getID() === "A") {
                this._neuron_list[i].Activation = 0.999999;
            }
            if (this._neuron_list[i].Node.getID() === "B") {
                this._neuron_list[i].Activation = 0.5;
            }
        }
    };
    // Private method for the sigmoidal activation function
    Simulation.prototype.sigmoid = function (input) {
        var ans = [];
        for (var i in this._neuron_list) {
            ans[i] = this._neuron_list[i].C / (1 + Math.pow(Math.E, -this._neuron_list[i].K * input[i]));
            if (ans[i] >= (this._neuron_list[i].C - 0.001)) {
                ans[i] = this._neuron_list[i].C;
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
        for (var i in this._neuron_list) {
            ans[i] = 2 * this._neuron_list[i].C / (1 + Math.pow(Math.E, -2 * this._neuron_list[i].K * input[i])) - 1;
            if (ans[i] >= (this._neuron_list[i].C - 0.001)) {
                ans[i] = this._neuron_list[i].C;
            }
            else if (ans[i] <= (0.001 - this._neuron_list[i].C)) {
                ans[i] = -this._neuron_list[i].C;
            }
        }
        return ans;
    };
    // Private method for the Heaviside (unit) step activation function
    Simulation.prototype.step = function (input) {
        var ans = [];
        for (var i in this._neuron_list) {
            ans[i] = input[i] <= 0 ? 0 : (this._neuron_list[i].C);
        }
        return ans;
    };
    // Private method for a simple and uncorrelated sinusoidal oscillation of neurons
    Simulation.prototype.sin = function (input) {
        var ans = [];
        for (var i in this._neuron_list) {
            ans[i] = this._neuron_list[i].C * Math.sin(this._neuron_list[i].K * input[i]);
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
            tmp -= (this._neuron_list[i].Refraction * this._neuron_list[i].Threshold);
            if (this._noise) {
                tmp += Math.pow(Math.random(), 3) * this._neuron_list[i].C;
            }
            ans[i] = tmp;
            if (this._undirected) {
                tmp = 0;
                connections = this._neuron_list[i].Node.connNodes();
                for (var j in connections) {
                    var key = this._all_ids[connections[j].node.getID()];
                    tmp += connections[j].edge.getWeight() * this._neuron_list[key].Activation;
                }
                tmp -= (this._neuron_list[i].Refraction * this._neuron_list[i].Threshold);
                if (this._noise) {
                    tmp += Math.pow(Math.random(), 3) * this._neuron_list[i].C;
                }
                ans[i] += tmp;
            }
        }
        return ans;
    };
    // Private method to calculate one epoch
    Simulation.prototype.calculateEpoch = function () {
        var tmp = this.calcInput();
        var output = this.activationFunc(tmp);
        for (var i in this._neuron_list) {
            this._neuron_list[i].Refraction -= this._neuron_list[i].Refraction !== 1 ? 1 : 0;
            this._neuron_list[i].Refraction = this._neuron_list[i].Activation >= this._neuron_list[i].Threshold ? 3 : this._neuron_list[i].Refraction;
        }
        return output;
    };
    //----------------------------------------------------------------------------
    // Public method to set a new graph for the simulation
    //setGraph (graph: $G.core.IGraph) {
    //  this = new Simulation (graph);
    //}
    // Public method to
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
                throw new Error("Error! Provided activation model is not implemented yet!");
        }
    };
    // Public method for the simulation itself
    Simulation.prototype.exec = function (nr_epochs) {
        if (nr_epochs === void 0) { nr_epochs = this._graph.getStats().nr_nodes; }
        this.writeEpochsTable(0);
        for (var j in this._neuron_list) {
            this._neuron_list[j].setColor(this._bounds[0], this._bounds[1]);
        }
        for (var i = 0; i < nr_epochs; ++i) {
            console.log();
            var output = this.calculateEpoch();
            for (var j in this._neuron_list) {
                this._neuron_list[j].Activation = output[j];
                this._neuron_list[j].setColor(this._bounds[0], this._bounds[1]);
            }
            this.writeEpochsTable(i + 1);
        }
    };
    return Simulation;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Simulation;
//export { Simulation };
