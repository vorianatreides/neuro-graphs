"use strict";
var CONFIG = {
    "name": "abc test graph",
    "nodes": 4,
    "edges": 5,
    "data": {
        "A": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": [
                {
                    "to": "B",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "C",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "B": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1,
                "y": -1,
                "z": 0
            },
            "edges": [
                {
                    "to": "C",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "D",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "C": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1,
                "y": 1,
                "z": 0
            },
            "edges": [
                {
                    "to": "B",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "D",
                    "directed": true,
                    "weight": -1
                }
            ]
        },
        "D": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2,
                "y": 0,
                "z": 0
            },
            "edges": []
        }
    }
};
exports.CONFIG = CONFIG;
