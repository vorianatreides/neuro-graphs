/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var chai = require('chai');
// import * as BCM from '../../src/learning_models/BCM';
var $C = require('../neuro_dd6_mi');
//import * as $C from '../abc';
//import * as $C from '../muscle';
var $G = require('graphinius');
//let $G = require('graphinius').$G;
var expect = chai.expect;
describe('ACTIVATION FUNCTION - SIGMOID TESTS - ', function () {
    it('should say Hello from Sigmoid Tests', function () {
        console.log("Hello from Sigmoid Tests!");
        expect(true).to.be.true;
    });
    //------------------------------------------------------------------------------
    var json_file = "./input_data/neuro_dd6_mi.json";
    //let json_file = "./input_data/abc.json";
    //let json_file = "./input_data/muscle.json";
    var jsonReader = new $G.input.JSONInput(true, false, true);
    var neuro_graph = jsonReader.readFromJSONFile(json_file);
    var connectome = JSON.parse(JSON.stringify($C.CONFIG));
    var all_nodes = neuro_graph.getNodes();
    var all_ids = listNodes(all_nodes);
    var fs = require('fs');
    //neuro_graph.deleteNode (all_nodes["AVAL"]);
    //neuro_graph.deleteNode (all_nodes["AVAR"]);
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to generate a list of the IDs of all nodes.
    //------------------------------------------------------------------------------
    function listNodes(all_nodes) {
        var container = [];
        for (var i in all_nodes) {
            container.push(i);
        }
        return container;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to generate the initial input vector according to the sensory
    // neurons distribution.
    //------------------------------------------------------------------------------
    function generateInVec(all_ids, connectome) {
        var input = [];
        for (var i in all_ids) {
            //input[i] = connectome.data[all_ids[i]].type === "SensoryNeuron" ? 1 : 0;
            input[i] = (all_ids[i] === "ADAL" || all_ids[i] === "ADAR") ? 0.2 : 0;
        }
        return input;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to find position of a string in an array of strings. Returns -1, if
    // not found.
    //------------------------------------------------------------------------------
    function key(str, all_str) {
        for (var i in all_str) {
            if (str === all_str[i]) {
                return (+i);
            }
        }
        return -1;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to convert an undirected graph/network in matrix form.
    //------------------------------------------------------------------------------
    function undMat(all_nodes, all_ids) {
        var mat = [];
        for (var i = 0; i < all_ids.length; ++i) {
            mat[i] = [];
            for (var j = 0; j < all_ids.length; ++j) {
                mat[i][j] = 0;
            }
        }
        for (var i in all_nodes) {
            var und_e = all_nodes[i].undEdges();
            for (var j in und_e) {
                mat[key(und_e[j].getNodes().b.getID(), all_ids)][key(und_e[j].getNodes().a.getID(), all_ids)] = und_e[j].getWeight();
                mat[key(und_e[j].getNodes().a.getID(), all_ids)][key(und_e[j].getNodes().b.getID(), all_ids)] = und_e[j].getWeight();
            }
        }
        return mat;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to convert a directed graph/network in matrix form.
    //------------------------------------------------------------------------------
    function dirMat(all_nodes, all_ids) {
        var mat = [];
        for (var i = 0; i < all_ids.length; ++i) {
            mat[i] = [];
            for (var j = 0; j < all_ids.length; ++j) {
                mat[i][j] = 0;
            }
        }
        for (var i in all_nodes) {
            var dir_e = all_nodes[i].dirEdges();
            for (var j in dir_e) {
                mat[key(dir_e[j].getNodes().b.getID(), all_ids)][key(dir_e[j].getNodes().a.getID(), all_ids)] = dir_e[j].getWeight();
            }
        }
        return mat;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    function matVecProduct(mat, vec) {
        var ans = [];
        if (mat[0].length !== vec.length) {
            return ans;
        }
        for (var i in mat) {
            var tmp = 0;
            for (var j in mat[i]) {
                tmp += mat[i][j] * vec[j];
            }
            ans[i] = tmp;
        }
        return ans;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    function vecMath(vec1, vec2, operation) {
        if (operation === void 0) { operation = "+"; }
        var ans = [];
        if (vec1.length !== vec2.length) {
            return ans;
        }
        switch (operation) {
            case "+":
                for (var i in vec1) {
                    ans[i] = vec1[i] + vec2[i];
                }
                break;
            case "-":
                for (var i in vec1) {
                    ans[i] = vec1[i] - vec2[i];
                }
                break;
            case "*":
                for (var i in vec1) {
                    ans[i] = vec1[i] * vec2[i];
                }
                break;
            case "/":
                for (var i in vec1) {
                    ans[i] = !!!vec2[i] ? NaN : vec1[i] / vec2[i];
                }
                break;
            case "%":
                for (var i in vec1) {
                    ans[i] = !!!vec2[i] ? NaN : vec1[i] % vec2[i];
                }
                break;
        }
        return ans;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    function vecEq(vec1, vec2) {
        if (vec1.length !== vec2.length) {
            return false;
        }
        var ans = true;
        for (var i in vec1) {
            ans = ans && (vec1[i] === vec2[i]);
        }
        return ans;
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // Function to write out the results after a particular epoch into a text file.
    //------------------------------------------------------------------------------
    function writeEpoch(i, all_ids, output, simulation) {
        // Local function to overwrite a string with a second one.
        function fillCell(smth, cell_length) {
            if (cell_length === void 0) { cell_length = 20; }
            var str;
            if (typeof smth === "number") {
                str = smth.toString();
            }
            else {
                str = smth;
            }
            if (str.length > cell_length) {
                return "";
            }
            for (var j = str.length; j < cell_length; ++j) {
                str += " ";
            }
            return str;
        }
        var path = "epoch_" + (i + 1).toString();
        var line = [];
        fs.writeFileSync(path, "Node                Threshold           Input               Output\n");
        for (var i_1 in all_ids) {
            line[0] = fillCell(all_ids[i_1], 20);
            line[1] = fillCell(simulation.Threshold[i_1] * simulation.Refraction[i_1], 20);
            line[2] = fillCell(simulation.Input[i_1], 20);
            //fs.appendFileSync (path, all_ids[i] + " " + neuro_sim.Threshold[i]*neuro_sim.Refraction[i] + " " + neuro_sim.Input[i] + " " + output[i] + "\n");
            fs.appendFileSync(path, line[0] + line[1] + line[2] + output[i_1] + "\n");
        }
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    function writeEpochsTable(epoch, all_ids, vector) {
        if (epoch === 0) {
            fs.writeFileSync('./Epochs_Table.csv', "Epoch,");
            for (var i = 0; i < (all_ids.length - 1); ++i) {
                fs.appendFileSync('./Epochs_Table.csv', all_ids[i] + ",");
            }
            fs.appendFileSync('./Epochs_Table.csv', all_ids[all_ids.length - 1] + "\n");
        }
        fs.appendFileSync('./Epochs_Table.csv', (epoch) + ",");
        for (var i = 0; i < (vector.length - 1); ++i) {
            fs.appendFileSync('./Epochs_Table.csv', vector[i] + ",");
        }
        fs.appendFileSync('./Epochs_Table.csv', vector[vector.length - 1] + "\n");
    }
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    var Simulation = (function () {
        //--------------------------------------------------------------------------
        function Simulation(all_ids, graph_d, graph_u) {
            this.all_ids = all_ids;
            this.graph_d = graph_d;
            this.graph_u = graph_u;
            this.input = [];
            this.threshold = [];
            this.properties = [];
            this.prop_c = 1;
            this.prop_k = 15;
            this.noise = false;
            this.refraction = [];
            this.undirected = true;
            for (var i in all_ids) {
                this.input.push(0);
                this.threshold.push(0.6);
                this.properties[i] = [1, 15];
                //this.prop_c[i] = 1;
                //this.prop_k[i] = 15;
                this.refraction.push(1);
            }
            if (graph_u === void 0) {
                this.undirected = false;
            }
        }
        Object.defineProperty(Simulation.prototype, "Threshold", {
            //--------------------------------------------------------------------------
            get: function () { return this.threshold; },
            //--------------------------------------------------------------------------
            set: function (threshold) { this.threshold = threshold; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "MatrixD", {
            get: function () { return this.graph_d; },
            set: function (mat) { this.graph_d = mat; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "MatrixU", {
            get: function () { return this.graph_u; },
            set: function (mat) { this.graph_u = mat; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "Input", {
            get: function () { return this.input; },
            set: function (input) { this.input = input; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "Properties", {
            get: function () { return this.properties; },
            set: function (properties) { this.properties = properties; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "IDList", {
            get: function () { return this.all_ids; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "Noise", {
            get: function () { return this.noise; },
            set: function (noise) { this.noise = noise; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "Refraction", {
            get: function () { return this.refraction; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Simulation.prototype, "Undirected", {
            get: function () { return this.undirected; },
            enumerable: true,
            configurable: true
        });
        //--------------------------------------------------------------------------
        // Private method for the sigmoid (or logistic) function.
        Simulation.prototype.sigmoid = function (x, c, k) {
            var ans = [];
            for (var i in x) {
                //ans[i] = (c[i] / (1 + Math.pow (Math.E, -k[i]*x[i])));
                //ans[i] = ans[i] <= 0.001 ? 0 : ans[i];
                ans[i] = (c / (1 + Math.pow(Math.E, -k * x[i])));
                if (ans[i] >= (c - 0.001)) {
                    ans[i] = c;
                }
                else if (ans[i] <= 0.001) {
                    ans[i] = 0;
                }
            }
            return ans;
        };
        // Private method for the tanh activation function
        Simulation.prototype.tanh = function (x, c, k) {
            var ans = [];
            for (var i in x) {
                ans[i] = (2 * c[i] / (1 + Math.pow(Math.E, -2 * k[i] * x[i]))) - 1;
                if (ans[i] >= 0.999) {
                    ans[i] = 1;
                }
                else if (ans[i] <= -0.999) {
                    ans[i] = -1;
                }
            }
            return ans;
        };
        //--------------------------------------------------------------------------
        // Public method to get the properties c and k of a single neuron.
        Simulation.prototype.getPropertiesOf = function (i) { return this.properties[i]; };
        // Public method to set the properties c and k of a single neuron.
        Simulation.prototype.setPropertiesOf = function (properties, i) { this.properties[i] = properties; };
        // Public method to run the simulation.
        Simulation.prototype.exec = function (epoch) {
            var tmp_u = [];
            if (this.undirected) {
                tmp_u = matVecProduct(this.graph_u, this.input);
                tmp_u = vecMath(tmp_u, vecMath(this.threshold, this.refraction, "*"), "-");
                if (!!!(epoch % 2)) {
                    //let output = this.tanh (tmp_u, this.prop_c, this.prop_k);
                    var output_1 = this.sigmoid(tmp_u, this.prop_c, this.prop_k);
                    for (var i in output_1) {
                        output_1[i] += this.input[i];
                        output_1[i] = output_1[i] > this.properties[i][0] ? this.properties[i][0] : output_1[i];
                    }
                    return output_1;
                }
            }
            var tmp = matVecProduct(this.graph_d, this.input);
            tmp = vecMath(tmp, vecMath(this.threshold, this.refraction, "*"), "-");
            if (this.undirected) {
                for (var i in tmp) {
                    if (this.noise) {
                        tmp[i] += Math.pow(Math.random(), 3) * this.properties[i][0];
                        tmp_u[i] += Math.pow(Math.random(), 3) * this.properties[i][0];
                    }
                    tmp[i] += tmp_u[i];
                }
            }
            else if (this.noise) {
                for (var i in tmp) {
                    tmp[i] += Math.pow(Math.random(), 3) * this.properties[i][0];
                }
            }
            //let output = this.tanh (tmp, this.prop_c, this.prop_k);
            var output = this.sigmoid(tmp, this.prop_c, this.prop_k);
            for (var i in this.input) {
                this.refraction[i] -= this.refraction[i] !== 1 ? 1 : 0;
                this.refraction[i] = this.input[i] >= this.threshold[i] ? 3 : this.refraction[i]; //Threshold should be ~3 times greater -> empiric value
            }
            return output;
        };
        return Simulation;
    }());
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    var neuro_sim = new Simulation(all_ids, dirMat(all_nodes, all_ids), undMat(all_nodes, all_ids));
    //let neuro_sim = new Simulation (all_ids, dirMat (all_nodes, all_ids));
    //neuro_sim.Noise = true;
    neuro_sim.Input = generateInVec(all_ids, connectome);
    //let ctr = 0;
    writeEpochsTable(0, all_ids, neuro_sim.Input);
    for (var i = 0; i < neuro_graph.getStats().nr_nodes; ++i) {
        var output = neuro_sim.exec(i);
        /*if (!neuro_sim.Undirected) {
          //writeEpoch (i, all_ids, output, neuro_sim);
          ctr += vecEq (output, neuro_sim.Input) ? 1 : 0;
        }
        else if (!!(i % 2)) {
          //writeEpoch (i, all_ids, output, neuro_sim);
          ctr += vecEq (output, neuro_sim.Input) ? 1 : 0;
        }*/
        writeEpochsTable(i + 1, all_ids, output);
        /*if (ctr === 3) {
          console.log ("Input === Output!\n");
          break;
        }*/
        neuro_sim.Input = output;
    }
    //if (vecEq (output, neuro_sim.Input)) {console.log ("Input === Output!\n");}
    /*fs.writeFileSync ('./mat_dir.txt', "");
    for (let i in neuro_sim.MatrixD) {
      for (let j in neuro_sim.MatrixD[i]) {
        fs.appendFileSync ('./mat_dir.txt', neuro_sim.MatrixD[i][j] + " ");
      }
      fs.appendFileSync ('./mat_dir.txt', "\n");
    }
  
    fs.writeFileSync ('./mat_und.txt', "");
    for (let i in neuro_sim.MatrixU) {
      for (let j in neuro_sim.MatrixU[i]) {
        fs.appendFileSync ('./mat_und.txt', neuro_sim.MatrixU[i][j] + " ");
      }
      fs.appendFileSync ('./mat_und.txt', "\n");
    }*/
    //------------------------------------------------------------------------------
});
