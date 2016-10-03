/// <reference path="../typings/tsd.d.ts" />

import * as chai from 'chai';
import * as Neuron from '../src/neurons/Neuron';
import * as $G from 'graphinius';
// console.log($G);

import * as $C from './neuro_dd6_mi';
//import * as $C from './abc';
let connectome = JSON.parse(JSON.stringify($C.CONFIG));

var expect = chai.expect;

var graph : $G.core.IGraph;
var n_a: $G.core.IBaseNode, 
    n_b: $G.core.IBaseNode, 
    n_c: $G.core.IBaseNode, 
    n_d: $G.core.IBaseNode;
var e_1: $G.core.IBaseEdge,
    e_2: $G.core.IBaseEdge, 
    e_3: $G.core.IBaseEdge, 
    e_4: $G.core.IBaseEdge;

describe('GRAPHINIUS IMPORT TESTS', () => {
  
  it('should test the successful graphinius import', () => {
    expect( Neuron.neuron ).to.equal("Neuron!");
  });
  
  it('should have successfully imported graphinius and be able to instantiate a graph', () => {
    graph = new $G.core.BaseGraph("Test Graph Alpha");
    n_a = graph.addNode("A");
    n_b = graph.addNode("B");
    n_c = graph.addNode("C");
    n_d = graph.addNode("D");
    e_1 = graph.addEdge("AB", n_a, n_b, {weighted: true, weight: 3});    
    e_2 = graph.addEdge("BC", n_b, n_c, {weighted: true, weight: 1});
    e_3 = graph.addEdge("CD", n_d, n_d, {weighted: true, weight: 11});
    e_4 = graph.addEdge("DA", n_d, n_a, {weighted: true, weight: 7});
        
    expect(graph.nrNodes()).to.equal(4);
    expect(graph.nrDirEdges()).to.equal(0);
    expect(graph.nrUndEdges()).to.equal(4);
  });
  
  /**
   * This one also tests 
   */
  it('should be able to run different traversals on the graph', () => {
    var bfs_res = $G.search.BFS(graph, n_a);
    var dfs_res = $G.search.DFS(graph, n_a);
    var pfs_res = $G.search.PFS(graph, n_a);
  });
  
  
  it('should import a graph from a valid json file', () => {
    //var json_file = "./input_data/neuro_dd6_mi.json";
    //let json_file = "./input_data/abc.json";
    //let json_file = "./input_data/muscle.json";
    let json_file = "./input_data/neuro.json";
    var jsonReader = new $G.input.JSONInput(true, false, true);
    
    var neuro_graph = jsonReader.readFromJSONFile(json_file);
    // console.log(neuro_graph.degreeDistribution().all);
    // console.log(neuro_graph.getStats());
    //expect(neuro_graph.nrNodes()).to.equal(299);
    //expect(neuro_graph.nrNodes()).to.equal(4);

    let all_nodes = neuro_graph.getNodes();
    var fs = require ('fs');
//    fs.writeFile ("./wow.txt", "Hallo!");
//    fs.appendFile ("./wow.txt", " Und jetzt?");
    //fs.writeFile ("./degreeDistribution.txt", neuro_graph.degreeDistribution().all);


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    let stats = neuro_graph.getStats();
    console.log ("Number of nodes is: " + stats.nr_nodes);
    console.log ("Number of directed edges is: " + stats.nr_dir_edges);
    console.log ("Number of undirected edges is: " + stats.nr_und_edges);
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    /*for (let i in all_nodes) {
      //if (ctr++ === 70) {break;}
      if (connectome.data[all_nodes[i].getID()].type === "NeurUnkFunc") {
        console.log (all_nodes[i].getID());
        console.log (connectome.data[all_nodes[i].getID()].type);
        console.log ("Degree: " + all_nodes[i].degree());
        console.log ("InDegree: " + all_nodes[i].inDegree());
        console.log ("OutDegree: " + all_nodes[i].outDegree());
        //console.log (all_nodes[i]["_in_degree"]);
        //console.log (all_nodes[i]["_out_degree"]);
        console.log ("UndDegree: " + all_nodes[i]["_und_degree"]);
        console.log ("DFS components: " + $G.search.DFS (neuro_graph, neuro_graph.getRandomNode()).length);
        console.log();
      }
    }*/
//------------------------------------------------------------------------------

//    console.log ($G.search.DFS (neuro_graph, all_nodes["ADAR"]).length);

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    /*fs.writeFile ("./und.txt", "");
    console.log ("Undirected degree:");
    for (let i in all_nodes) {
      if (all_nodes[i].degree() >= 30 && all_nodes[i].degree() < 60 && connectome.data[i].type === "NeurUnkFunc") {
        console.log (i + "  " + connectome.data[i].type + "  " + all_nodes[i].degree());
        fs.appendFile ("./und.txt", i + "," + all_nodes[i].degree() + "\n");
      }
    }
    console.log ("\n");

    fs.writeFile ("./ind.txt", "");
    console.log ("In degree:");
    for (let i in all_nodes) {
      if (all_nodes[i].inDegree() >= 30 && all_nodes[i].inDegree() < 60 && connectome.data[i].type === "NeurUnkFunc") {
        console.log (i + "  " + connectome.data[i].type + "  " + all_nodes[i].inDegree());
        fs.appendFile ("./ind.txt", i + "," + all_nodes[i].inDegree() + "\n");
      }
    }
    console.log ("\n");

    fs.writeFile ("./outd.txt", "");
    console.log ("Out degree:");
    for (let i in all_nodes) {
      if (all_nodes[i].outDegree() >= 30 && all_nodes[i].outDegree() < 60 && connectome.data[i].type === "NeurUnkFunc") {
        console.log (i + "  " + connectome.data[i].type + "  " + all_nodes[i].outDegree());
        fs.appendFile ("./outd.txt", i + "," + all_nodes[i].outDegree() + "\n");
      }
    }
    console.log ("\n");*/
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    //for (let i in all_nodes) {
    //  all_nodes[i].clearUndEdges();
    //  all_nodes[i].clearOutEdges();
    //  all_nodes[i].clearInEdges();
    //  if (all_nodes[i].inDegree() === 0) {
    //    fs.appendFile ("./ind.txt", i + "," + connectome.data[i].type + "," + all_nodes[i].degree() + "," + all_nodes[i].inDegree() + "," + all_nodes[i].outDegree() + "\n");
    //  }
    //}
//    neuro_graph.clearAllUndEdges();
//    neuro_graph.clearAllDirEdges();


//    all_nodes["AVAL"].clearEdges();
//    all_nodes["AVAR"].clearEdges();
    //neuro_graph.deleteNode (all_nodes["AVAL"]);
    //neuro_graph.deleteNode (all_nodes["AVAR"]);
    if (!!!all_nodes["AVAL"]) {console.log ("Without AVAL!")}
    if (!!!all_nodes["AVAR"]) {console.log ("Without AVAR!")}
    //neuro_graph.deleteNode (all_nodes["AVBL"]);
    //neuro_graph.deleteNode (all_nodes["AVBR"]);
    if (!!!all_nodes["AVBL"]) {console.log ("Without AVBL!")}
    if (!!!all_nodes["AVBR"]) {console.log ("Without AVBR!")}
    let median_dfs = 0;
    let median_degree = 0;
    let median_ind = 0;
    let median_outd = 0;
    let all_sensory = [];
    for (let i in all_nodes) {
      //console.log ($G.search.BFS (neuro_graph, all_nodes[i]));
      //console.log();
      //console.log ($G.search.DFS (neuro_graph, all_nodes[i]).length);
      ///if (connectome.data[i].type === "SensoryNeuron") {all_sensory[i] = all_nodes[i];}
      median_dfs += $G.search.DFS (neuro_graph, all_nodes[i]).length;
      median_degree += all_nodes[i].degree();
      median_ind += all_nodes[i].inDegree();
      median_outd += all_nodes[i].outDegree();
    }
    median_dfs /= stats.nr_nodes;
    median_degree /= stats.nr_nodes;
    median_ind /= stats.nr_nodes;
    median_outd /= stats.nr_nodes;
    console.log ("Median degree of undirected edges is: " + median_degree);
    console.log ("Median degree of input directed edges is: " + median_ind);
    console.log ("Median degree of output directed edges is: " + median_outd);
    console.log ("Median number of DFS components is: " + median_dfs);
    console.log ("_______________");


    /*for (let i in all_sensory) {
      let max_dist = 0;
      let far_node = "";
      let tmp = $G.search.BFS (neuro_graph, all_sensory[i]);
      for (let j in tmp) {
        if (tmp[j].distance > max_dist ) {
          far_node = tmp[j].distance !== Infinity ? j : far_node;
          max_dist = tmp[j].distance !== Infinity ? tmp[j].distance : max_dist;
        }
      }
      //console.log (i + " -> " + far_node + "  " + max_dist);
    }
    //console.log ($G.search.BFS (neuro_graph, all_nodes["IL2DL"]));
    let tmp = $G.search.BFS (neuro_graph, all_nodes["PLNR"]);
    let ctr = 0;
    fs.writeFileSync ('./layer.txt', "neuron parent distance\n");
    for (let i in tmp) {
      for (let j in tmp) {
        if (tmp[j].counter === ctr) {
          fs.appendFileSync ('./layer.txt', j + "  " + tmp[j].parent.getID() + "  " + tmp[j].distance + '\n');
        }
      }
      ++ctr;
    }
    for (let i in tmp) {
      if (tmp[i].distance === Infinity) {
        fs.appendFileSync ('./layer.txt', i + "  " + tmp[i].parent + "  " + tmp[i].distance + '\n')
      }
    }*/

//------------------------------------------------------------------------------
    //let pos_x: number[] = [];
    //let pos_y: number[] = [];
    //let pos_z: number[] = [];

    /*let fx = [0, 0, 500];
    let fy = [0, 0, 500];
    let fz = [0, 0, 500];
    let name_x = ["", "", ""];
    let name_y = ["", "", ""];
    let name_z = ["", "", ""];
    for (let j in connectome.data) {
      if (connectome.data[j].coords.x > fx[0] ) {
         fx[0] = connectome.data[j].coords.x;
         name_x[0] = j;
      }
      if (connectome.data[j].coords.x < fx[1]) {
        fx[1] = connectome.data[j].coords.x;
         name_x[1] = j;
      }
      if (Math.abs (connectome.data[j].coords.x) < Math.abs (fx[2])) {
        fx[2] = connectome.data[j].coords.x;
        name_x[2] = j;
      }
      if (connectome.data[j].coords.y > fy[0]) {
        fy[0] = connectome.data[j].coords.y;
        name_y[0] = j;
      }
      if (connectome.data[j].coords.y < fy[1]) {
        fy[1] = connectome.data[j].coords.y;
        name_y[1] = j;
      }
      if (Math.abs (connectome.data[j].coords.y) < Math.abs (fy[2])) {
        fy[2] = connectome.data[j].coords.y;
        name_y[2] = j;
      }
      if (connectome.data[j].coords.z > fz[0]) {
        fz[0] = connectome.data[j].coords.z;
        name_z[0] = j;
      }
      if (connectome.data[j].coords.z < fz[1]) {
        fz[1] = connectome.data[j].coords.z;
        name_z[1] = j;
      }
      if (Math.abs (connectome.data[j].coords.z) < Math.abs (fz[2])) {
        fz[2] = connectome.data[j].coords.z;
        name_z[2] = j;
      }
    }
    console.log (name_x[0] + "  max_x = " + fx[0]);
    console.log (name_y[0] + "  max_y = " + fy[0]);
    console.log (name_z[0] + "  max_z = " + fz[0]);
    console.log (name_x[1] + "  min_x = " + fx[1]);
    console.log (name_y[1] + "  min_y = " + fy[1]);
    console.log (name_z[1] + "  min_z = " + fz[1]);
    console.log (name_x[2] + "  abs_x = " + fx[2]);
    console.log (name_y[2] + "  abs_y = " + fy[2]);
    console.log (name_z[2] + "  abs_z = " + fz[2]);*/
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
    //console.log ($G.search.BFS(neuro_graph, all_nodes["C"]));

    /*let alml_edges = all_nodes["ALML"].undEdges();
    for (let i in alml_edges) {
      console.log (alml_edges[i].getNodes().b.getID());
    }*/
    //console.log ($G.search.BFS (neuro_graph, all_nodes["ALML"]));
    //console.log (all_nodes["ALML"].reachNodes());
    //for (let i in all_nodes) {
    //  if (connectome.data[i].type === "Motor Neuron") {console.log (all_nodes[i].nextNodes().length)};
    //}
    /*console.log ("Number of DFS components: " + $G.search.DFS (neuro_graph, all_nodes["ADAR"]).length);
    console.log ("Degree: " + all_nodes["ADAR"].degree());
    console.log ("InDegree: " + all_nodes["ADAR"].inDegree());
    console.log ("OutDegree: " + all_nodes["ADAR"].outDegree());
    all_nodes["ADAR"].clearEdges();
    console.log ("Degree: " + all_nodes["ADAR"].degree());
    console.log ("InDegree: " + all_nodes["ADAR"].inDegree());
    console.log ("OutDegree: " + all_nodes["ADAR"].outDegree());
    //console.log ("Number of input edges is: " + all_nodes["ADAR"].inEdges().length);
    console.log ("Number of DFS components: " + $G.search.DFS (neuro_graph, all_nodes["ADAR"]).length);
    //console.log ("\nNumber of components is: " + $G.search.DFS (neuro_graph, neuro_graph.getRandomNode()).length + "\n");
    */
//------------------------------------------------------------------------------
  });
  
});