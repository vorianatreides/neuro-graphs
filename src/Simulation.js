/// <reference path="./../typings/tsd.d.ts" />
"use strict";
var Neuron_1 = require('./neurons/Neuron');
var Simulation = (function () {
    //----------------------------------------------------------------------------
    function Simulation(_graph) {
        this._graph = _graph;
        this._neuron_list = [];
        this._activation_model = "sigmoidal";
        this._all_ids = [];
        this._epoch = 0;
        this._sine = false;
        this._noise = false; // Should biologically speaking be true!
        var all_nodes = this._graph.getNodes();
        var ctr = 0;
        for (var i in all_nodes) {
            this._neuron_list.push(new Neuron_1.default(all_nodes[i]));
            this._all_ids[i] = ctr++;
        }
        this.activationFunc = this.sigmoid;
        this.generateInVec();
    }
    Object.defineProperty(Simulation.prototype, "Sine", {
        //----------------------------------------------------------------------------
        get: function () { return this._sine; },
        //----------------------------------------------------------------------------
        set: function (sine) { this._sine = sine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simulation.prototype, "Noise", {
        get: function () { return this._noise; },
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
            this._neuron_list[i].Activation = this._neuron_list[i].Node.getID() === "A" || this._neuron_list[i].Node.getID() === "B" ? 0.8 : 0;
        }
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
    // Private method for the sigmoidal activation function
    Simulation.prototype.sigmoid = function (input) {
        var ans = [];
        for (var i in this._neuron_list) {
            ans[i] = (this._neuron_list[i].C / (1 + Math.pow(Math.E, -this._neuron_list[i].K * input[i])));
            if (ans[i] >= (this._neuron_list[i].C - 0.001)) {
                ans[i] = this._neuron_list[i].C;
            }
            else if (ans[i] <= 0.001) {
                ans[i] = 0;
            }
        }
        return ans;
    };
    // Private method to calculate input to the activation function
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
            ans[i] = tmp;
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
    // Public method to
    Simulation.prototype.setActivationModel = function (model) {
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
    };
    // Public method for the simulation itself
    Simulation.prototype.exec = function (nr_epochs) {
        if (nr_epochs === void 0) { nr_epochs = this._graph.getStats().nr_nodes; }
        this.writeEpochsTable(0);
        for (var i = 0; i < nr_epochs; ++i) {
            var output = this.calculateEpoch();
            for (var j in this._neuron_list) {
                this._neuron_list[j].Activation = output[j];
            }
            this.writeEpochsTable(i + 1);
        }
    };
    return Simulation;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Simulation;
//export { Simulation };
