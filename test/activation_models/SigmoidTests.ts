/// <reference path="../../typings/tsd.d.ts" />

import * as chai from 'chai';
// import * as BCM from '../../src/learning_models/BCM';
//import * as $C from '../neuro_dd6_mi';
import * as $C from '../abc';
//import * as $C from '../muscle';
import * as $G from 'graphinius';

declare var require : any;

//let $G = require('graphinius').$G;
var expect = chai.expect;


describe('ACTIVATION FUNCTION - SIGMOID TESTS - ', () => {
  
  it('should say Hello from Sigmoid Tests', () => {
    console.log("Hello from Sigmoid Tests!");
    expect(true).to.be.true;
  });
  
//------------------------------------------------------------------------------
  //let json_file = "./input_data/neuro_dd6_mi.json";
  let json_file = "./input_data/abc.json";
  //let json_file = "./input_data/muscle.json";
  let jsonReader = new $G.input.JSONInput(true, false, true);
  let neuro_graph = jsonReader.readFromJSONFile(json_file);
  let connectome = JSON.parse(JSON.stringify($C.CONFIG));
  let all_nodes = neuro_graph.getNodes();
  let all_ids = listNodes (all_nodes);
  var fs = require ('fs');
  //neuro_graph.deleteNode (all_nodes["AVAL"]);
  //neuro_graph.deleteNode (all_nodes["AVAR"]);
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Function to generate a list of the IDs of all nodes.
//------------------------------------------------------------------------------
  function listNodes (all_nodes: {[key: string]: $G.core.IBaseNode;}) {
    let container: string[] = [];
    for (let i in all_nodes) {
      container.push (i);
    }
    return container;
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Function to generate the initial input vector according to the sensory
// neurons distribution.
//------------------------------------------------------------------------------
  function generateInVec (all_ids: string[], connectome: any) {
    let input: number[] = [];
    for (let i in all_ids) {
      //input[i] = connectome.data[all_ids[i]].type === "SensoryNeuron" ? 1 : 0;
      //input[i] = (all_ids[i] === "ADAL" || all_ids[i] === "ADAR") ? 0.2 : 0;
      input[i] = (all_ids[i] === "A" || all_ids[i] === "B") ? 0.8 : 0;
      //input[i] = all_ids[i] === "A" ? 1 : 0;
    }
    return input;
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Function to find position of a string in an array of strings. Returns -1, if
// not found.
//------------------------------------------------------------------------------
  function key (str: string, all_str: string[]) {
    for (let i in all_str) {
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
  function undMat (all_nodes: {[key: string]: $G.core.IBaseNode;}, all_ids: string[]) {
    let mat: number[][] = [];
    for (let i = 0; i < all_ids.length; ++i) {
      mat[i] = [];
      for (let j = 0; j < all_ids.length; ++j) {
        mat[i][j] = 0;
      }
    }
    for (let i in all_nodes) {
      let und_e = all_nodes[i].undEdges();
      for (let j in und_e) {
        mat[key (und_e[j].getNodes().b.getID(), all_ids)][key (und_e[j].getNodes().a.getID(), all_ids)] = und_e[j].getWeight();
        mat[key (und_e[j].getNodes().a.getID(), all_ids)][key (und_e[j].getNodes().b.getID(), all_ids)] = und_e[j].getWeight();
      }
    }
    return mat;
  }
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Function to convert a directed graph/network in matrix form.
//------------------------------------------------------------------------------
  function dirMat (all_nodes: {[key: string]: $G.core.IBaseNode;}, all_ids: string[]) {
    let mat: number[][] = [];
    for (let i = 0; i < all_ids.length; ++i) {
      mat[i] = [];
      for (let j = 0; j < all_ids.length; ++j) {
        mat[i][j] = 0;
      }
    }
    for (let i in all_nodes) {
      let dir_e = all_nodes[i].dirEdges();
      for (let j in dir_e) {
        mat[key (dir_e[j].getNodes().b.getID(), all_ids)][key (dir_e[j].getNodes().a.getID(), all_ids)] = dir_e[j].getWeight();
      }
    }
    return mat;
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  function matVecProduct (mat: number[][], vec: number[]) {
    let ans: number[] = [];
    if (mat[0].length !== vec.length) {return ans;}
    for (let i in mat) {
      let tmp = 0;
      for (let j in mat[i]) {
        tmp += mat[i][j]*vec[j];
      }
      ans[i] = tmp;
    }
    return ans;
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  function vecMath (vec1: number[], vec2: number[], operation = "+") {
    let ans: number[] = [];
    if (vec1.length !== vec2.length) {return ans;}
    switch (operation) {
      case "+":
        for (let i in vec1) {
          ans[i] = vec1[i] + vec2[i];
        }
        break;
      case "-":
        for (let i in vec1) {
          ans[i] = vec1[i] - vec2[i];
        }
        break;
      case "*":
        for (let i in vec1) {
          ans[i] = vec1[i] * vec2[i];
        }
        break;
      case "/":
        for (let i in vec1) {
          ans[i] = !!!vec2[i] ? NaN : vec1[i] / vec2[i];
        }
        break;
      case "%":
        for (let i in vec1) {
          ans[i] = !!!vec2[i] ? NaN : vec1[i] % vec2[i];
        }
        break;
    }
    return ans;
  } 
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  function vecEq (vec1: number[], vec2: number[]) {
    if (vec1.length !== vec2.length) {return false;}
    let ans = true;
    for (let i in vec1) {
      ans = ans && (vec1[i] === vec2[i]);
    }
    return ans;
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Function to write out the results after a particular epoch into a text file.
//------------------------------------------------------------------------------
  function writeEpoch (i: number, all_ids: string[], output: number[], simulation: Simulation) {
    // Local function to overwrite a string with a second one.
    function fillCell (smth: string | number, cell_length: number = 20) {
      let str: string;
      if (typeof smth === "number") {
        str = smth.toString();
      }
      else {str = smth;}
      if (str.length > cell_length) {return "";}
      for (let j = str.length; j < cell_length; ++j) {
        str += " ";
      }
      return str;
    }
    let path = "epoch_" + (i+1).toString();
    let line: string[] = [];
    fs.writeFileSync (path, "Node                Threshold           Input               Output\n");
    for (let i in all_ids) {
      line[0] = fillCell (all_ids[i], 20);
      line[1] = fillCell (simulation.Threshold[i]*simulation.Refraction[i], 20);
      line[2] = fillCell (simulation.Input[i], 20);
      //fs.appendFileSync (path, all_ids[i] + " " + neuro_sim.Threshold[i]*neuro_sim.Refraction[i] + " " + neuro_sim.Input[i] + " " + output[i] + "\n");
      fs.appendFileSync (path, line[0] + line[1] + line[2] + output[i] + "\n");
    }
  }
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function writeEpochsTable(epoch: number, all_ids: string[], vector: number[]) {
  if (epoch === 0) {
    fs.writeFileSync ('./Epochs_Table.csv', "Epoch,");
    for (let i = 0; i < (all_ids.length - 1); ++i) {
      fs.appendFileSync ('./Epochs_Table.csv', all_ids[i] + ",");
    }
    fs.appendFileSync ('./Epochs_Table.csv', all_ids[all_ids.length - 1] + "\n");
  }
  fs.appendFileSync ('./Epochs_Table.csv', (epoch) + ",");
  for (let i = 0; i < (vector.length - 1); ++i) {
    fs.appendFileSync ('./Epochs_Table.csv', vector[i] + ",");
  }
  fs.appendFileSync ('./Epochs_Table.csv', vector[vector.length - 1] + "\n");
}
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  class Simulation {
    private input: number[];
    private threshold: number[]; // Or should it be bias?
    private properties: number[][]; // Of the sigmoid fucntion -> c and k;
    private prop_c: number;
    private prop_k: number;
    private noise;
    private refraction: number[];
    private undirected: boolean;

    //--------------------------------------------------------------------------
    constructor (private all_ids: string[], private graph_d: number[][],
                 private graph_u?: number[][]) {
      this.input = [];
      this.threshold = [];
      this.properties = [];
      this.prop_c = 1;
      this.prop_k = 15;
      this.noise = false;
      this.refraction = [];
      this.undirected = true;
      for (let i in all_ids) {
        this.input.push(0);
        this.threshold.push(0.6);
        this.properties[i] = [1,15];
        //this.prop_c[i] = 1;
        //this.prop_k[i] = 15;
        this.refraction.push(1);
      }
      if (graph_u === void 0) {
        this.undirected = false;
      }
    }

    //--------------------------------------------------------------------------
    get Threshold() {return this.threshold;}
    get MatrixD() {return this.graph_d;}
    get MatrixU() {return this.graph_u;}
    get Input() {return this.input}
    get Properties() {return this.properties;}
    get IDList() {return this.all_ids;}
    get Noise() {return this.noise;}
    get Refraction() {return this.refraction;}
    get Undirected() {return this.undirected;}

    //--------------------------------------------------------------------------
    set Threshold (threshold: number[]) {this.threshold = threshold;}
    set MatrixD (mat: number[][]) {this.graph_d = mat;}
    set MatrixU (mat: number[][]) {this.graph_u = mat;}
    set Input (input: number[]) {this.input = input;}
    set Properties (properties: number[][]) {this.properties = properties;}
    set Noise (noise: boolean) {this.noise = noise;}

    //--------------------------------------------------------------------------
    // Private method for the sigmoid (or logistic) function.
    private sigmoid (x: number[], c: number, k: number) {
      let ans: number[] = [];
      for (let i in x) {
        //ans[i] = (c[i] / (1 + Math.pow (Math.E, -k[i]*x[i])));
        //ans[i] = ans[i] <= 0.001 ? 0 : ans[i];
        ans[i] = (c / (1 + Math.pow (Math.E, -k*x[i])));
        if (ans[i] >= (c - 0.001)) {ans[i] = c;}
        else if (ans[i] <= 0.001) {ans[i] = 0;}
      }
	    return ans;
    }

    private sin (x: number[]) {
      let ans: number[] = [];
      for (let i in x) {
        ans[i] = Math.sin (x[i]);
        if (ans[i] >= 0.999) {ans[i] = 1;}
        else if (ans[i] <= -0.999) {ans[i] = -1;}
      }
      return ans;
    }

    // Private method for the tanh activation function
    private tanh (x: number[], c : number[], k: number[]) {
      let ans: number[] = [];
      for (let i in x) {
        ans[i] = (2*c[i] / (1 + Math.pow (Math.E, -2*k[i]*x[i]))) - 1;
        if (ans[i] >= 0.999) {ans[i] = 1;}
        else if (ans[i] <= -0.999) {ans[i] = -1;}
      }
      return ans;
    }

    //--------------------------------------------------------------------------
    // Public method to get the properties c and k of a single neuron.
    getPropertiesOf (i: number) {return this.properties[i];}
    // Public method to set the properties c and k of a single neuron.
    setPropertiesOf (properties: number[], i: number) {this.properties[i] = properties;}

    // Public method to run the simulation.
    exec (epoch: number) {
      let tmp_u: number[] = [];
      if (this.undirected) {
        tmp_u = matVecProduct (this.graph_u, this.input);
        tmp_u = vecMath (tmp_u, vecMath (this.threshold, this.refraction, "*"), "-");
        if (!!!(epoch % 2)) {
          //let output = this.tanh (tmp_u, this.prop_c, this.prop_k);
          let output = this.sigmoid (tmp_u, this.prop_c, this.prop_k);
          //let output = this.sin (tmp_u);
          for (let i in output) {
            output[i] += this.input[i];
            output[i] = output[i] > this.properties[i][0] ? this.properties[i][0] : output[i];
            output[i] = output[i] < -1 ? -1 : output[i];
          }
          return output;
        }
      }

      let tmp = matVecProduct (this.graph_d, this.input);
      tmp = vecMath (tmp, vecMath (this.threshold, this.refraction, "*"), "-");
      if (this.undirected) {
        for (let i in tmp) {
          if (this.noise) {
            tmp[i] += Math.pow (Math.random(), 3) * this.properties[i][0];
            tmp_u[i] += Math.pow (Math.random(), 3) * this.properties[i][0];
          }
          tmp[i] += tmp_u[i];
        }
      }
      else if (this.noise) {
        for (let i in tmp) {
          tmp[i] += Math.pow (Math.random(), 3) * this.properties[i][0];
        }
      }
      //let output = this.tanh (tmp, this.prop_c, this.prop_k);
      let output = this.sigmoid (tmp, this.prop_c, this.prop_k);
      //let output = this.sin (tmp);

      for (let i in this.input) {
        this.refraction[i] -= this.refraction[i] !== 1 ? 1 : 0;
        this.refraction[i] = this.input[i] >= this.threshold[i] ? 3 : this.refraction[i];//Threshold should be ~3 times greater -> empiric value
      }
      return output;
    }
  }
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  //let neuro_sim = new Simulation (all_ids, dirMat (all_nodes, all_ids), undMat (all_nodes, all_ids));
  let neuro_sim = new Simulation (all_ids, dirMat (all_nodes, all_ids));
  //neuro_sim.Noise = true;
  neuro_sim.Input = generateInVec (all_ids, connectome);
  //let ctr = 0;
  writeEpochsTable (0, all_ids, neuro_sim.Input);
  for (let i = 0; i < neuro_graph.getStats().nr_nodes; ++i) { //e.g. i < 3 for the 3rd epoch
    let output = neuro_sim.exec(i);
    /*if (!neuro_sim.Undirected) {
      //writeEpoch (i, all_ids, output, neuro_sim);
      ctr += vecEq (output, neuro_sim.Input) ? 1 : 0;
    }
    else if (!!(i % 2)) {
      //writeEpoch (i, all_ids, output, neuro_sim);
      ctr += vecEq (output, neuro_sim.Input) ? 1 : 0;
    }*/
    writeEpochsTable (i + 1, all_ids, output);
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