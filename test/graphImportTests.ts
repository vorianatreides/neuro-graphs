/// <reference path="../typings/tsd.d.ts" />

import * as chai from 'chai';
import * as Neuron from '../src/neurons/Neuron';
import * as $G from 'graphinius';
console.log($G);

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
  
  
});