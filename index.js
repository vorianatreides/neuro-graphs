// var $GH					= require("./dist/core/GenHierarchies.js");
// var $CSV	 			= require("./dist/io/csv.js");
// var $Sangreea 	= require("./dist/SaNGreeA/SaNGreeA.js");


var simulation = require ('./src/Simulation'),
    neuron     = require ('./src/neurons/Neuron');

var out = typeof window !== 'undefined' ? window : global;


out = {
	Neuron: neuron,
	Simulation: simulation
};

module.exports = {
	$NG : out
};
