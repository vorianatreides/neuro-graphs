"use strict";
var CONFIG = {
    "name": "Muscle graph test scenario",
    "nodes": 224,
    "edges": 564,
    "data": {
        "ADEL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 11.0,
                "y": -242.375,
                "z": 32.45
            },
            "edges": [
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AS1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.275,
                "y": -229.038,
                "z": 4.738
            },
            "edges": [
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR05",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "AS10": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": 278.25,
                "z": -24.0
            },
            "edges": [
                {
                    "to": "MDL20",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR20",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS11": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": 315.7,
                "z": -26.124998
            },
            "edges": [
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL22",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL23",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL24",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR21",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR22",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR23",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR24",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AS2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": -203.875,
                "z": -12.725
            },
            "edges": [
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL07",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR07",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": -151.40001,
                "z": -45.649998
            },
            "edges": [
                {
                    "to": "MDL10",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR10",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": -90.200005,
                "z": -65.375
            },
            "edges": [
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": -3.7500002,
                "z": -52.525
            },
            "edges": [
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": 28.25,
                "z": -34.25
            },
            "edges": [
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": 119.9,
                "z": 3.9500003
            },
            "edges": [
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL16",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR16",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS8": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": 181.85,
                "z": -1.7750001
            },
            "edges": [
                {
                    "to": "MDL15",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR15",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL18",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR18",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AS9": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": 228.92499,
                "z": -14.5
            },
            "edges": [
                {
                    "to": "MDL20",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR20",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AVFL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.1,
                "y": -246.4,
                "z": 18.6
            },
            "edges": [
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVFR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.5,
                "y": -246.4,
                "z": 18.6
            },
            "edges": [
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AVKR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.583,
                "y": -246.95001,
                "z": 19.0
            },
            "edges": [
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.5000005,
                "y": -263.45,
                "z": 36.35
            },
            "edges": [
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR10",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "CEPVL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.70000005,
                "y": -277.125,
                "z": 39.925
            },
            "edges": [
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "CEPVR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.95,
                "y": -277.125,
                "z": 39.925
            },
            "edges": [
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "DA1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": -227.07501,
                "z": 3.425
            },
            "edges": [
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 8
                }
            ]
        },
        "DA2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": -190.75,
                "z": -21.675
            },
            "edges": [
                {
                    "to": "MDL07",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL10",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR07",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR10",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "DA3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.65,
                "y": -123.65,
                "z": -58.350002
            },
            "edges": [
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DA4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.7,
                "y": -32.4,
                "z": -61.75
            },
            "edges": [
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DA5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.65,
                "y": 84.2,
                "z": -3.15
            },
            "edges": [
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DA6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.65,
                "y": 198.675,
                "z": -6.3500004
            },
            "edges": [
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL16",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR16",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DA7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.65,
                "y": 281.6,
                "z": -24.95
            },
            "edges": [
                {
                    "to": "MDL15",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL18",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR15",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR18",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DA8": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.275,
                "y": 376.8,
                "z": -10.925
            },
            "edges": [
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL20",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR20",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DA9": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.6,
                "y": 376.8,
                "z": -10.925
            },
            "edges": [
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL22",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL23",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL24",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR21",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR22",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR23",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR24",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DB1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": -230.34999,
                "z": 6.85
            },
            "edges": [
                {
                    "to": "MDL07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "DB2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.2,
                "y": -244.5,
                "z": 15.787
            },
            "edges": [
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL10",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR10",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "DB3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -195.275,
                "z": -18.525
            },
            "edges": [
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "DB4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": -96.275,
                "z": -64.65
            },
            "edges": [
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL16",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR16",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "DB5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.05,
                "y": 35.25,
                "z": -30.45
            },
            "edges": [
                {
                    "to": "MDL15",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL18",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR15",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR18",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "DB6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8249999,
                "y": 178.1,
                "z": -0.2
            },
            "edges": [
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL20",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR20",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "DB7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 267.75,
                "z": -22.625
            },
            "edges": [
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL22",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL23",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL24",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR21",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR22",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR23",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR24",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "DD1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.9,
                "y": -231.95,
                "z": 6.85
            },
            "edges": [
                {
                    "to": "MDL07",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL10",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR07",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR10",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DD2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -156.47499,
                "z": -42.85
            },
            "edges": [
                {
                    "to": "MDL09",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR09",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR12",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "DD3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": -28.600002,
                "z": -60.525
            },
            "edges": [
                {
                    "to": "MDL11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MDR14",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DD4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": 122.899994,
                "z": 4.5499997
            },
            "edges": [
                {
                    "to": "MDL13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL16",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR16",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DD5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8750001,
                "y": 234.05002,
                "z": -15.775
            },
            "edges": [
                {
                    "to": "MDL17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL20",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR20",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DD6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.9,
                "y": 365.775,
                "z": -16.475
            },
            "edges": [
                {
                    "to": "MDL19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL24",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDR24",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "DVB": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": 394.5,
                "z": 4.0
            },
            "edges": [
                {
                    "to": "MANAL",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "HSNL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 17.45,
                "y": 61.05,
                "z": 6.95
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 7
                }
            ]
        },
        "HSNR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -21.65,
                "y": 61.05,
                "z": 6.95
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "IL1DL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.825,
                "y": -282.763,
                "z": 52.762997
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "IL1DR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.0620003,
                "y": -282.763,
                "z": 52.762997
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL1L": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.8,
                "y": -282.67502,
                "z": 47.850002
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL1R": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.075001,
                "y": -282.67502,
                "z": 47.850002
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL1VL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.25,
                "y": -279.5,
                "z": 41.0
            },
            "edges": [
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "IL1VR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.5499997,
                "y": -279.5,
                "z": 41.0
            },
            "edges": [
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "PDA": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.95,
                "y": 387.25,
                "z": -5.5
            },
            "edges": [
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PDB": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.3,
                "y": 384.65,
                "z": -7.75
            },
            "edges": [
                {
                    "to": "MVL22",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR21",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVNL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.55,
                "y": 410.0,
                "z": 8.900001
            },
            "edges": [
                {
                    "to": "MVL09",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "PVNR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.25,
                "y": 409.95,
                "z": 8.900001
            },
            "edges": [
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL13",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RID": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.225,
                "y": -272.35,
                "z": 54.938
            },
            "edges": [
                {
                    "to": "MDL14",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL21",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RIML": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.5,
                "y": -260.9,
                "z": 39.0
            },
            "edges": [
                {
                    "to": "MDR05",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RIMR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.75,
                "y": -260.9,
                "z": 39.0
            },
            "edges": [
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RIVL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.5,
                "y": -265.30002,
                "z": 50.35
            },
            "edges": [
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RIVR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.75,
                "y": -265.30002,
                "z": 50.35
            },
            "edges": [
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDDL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.6,
                "y": -269.07498,
                "z": 37.65
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDDR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.75,
                "y": -269.07498,
                "z": 37.65
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.1,
                "y": -271.0,
                "z": 41.2
            },
            "edges": [
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.4,
                "y": -271.0,
                "z": 41.2
            },
            "edges": [
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDVL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.8500004,
                "y": -271.19998,
                "z": 44.4
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMDVR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.049999,
                "y": -271.19998,
                "z": 44.4
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMED": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.5,
                "y": -275.75,
                "z": 58.499996
            },
            "edges": [
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL06",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RMEL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.65,
                "y": -274.4,
                "z": 46.987
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "RMER": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.900001,
                "y": -274.4,
                "z": 46.987
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "RMEV": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.033,
                "y": -272.967,
                "z": 35.667
            },
            "edges": [
                {
                    "to": "MDL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMFL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.1,
                "y": -265.05002,
                "z": 34.1
            },
            "edges": [
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMGL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 8.25,
                "y": -238.29999,
                "z": 32.7
            },
            "edges": [
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RMGR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -12.5,
                "y": -238.29999,
                "z": 32.7
            },
            "edges": [
                {
                    "to": "MDR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RMHL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.1,
                "y": -265.9,
                "z": 35.7
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "RMHR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.2999997,
                "y": -265.9,
                "z": 35.7
            },
            "edges": [
                {
                    "to": "MDL01",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "SMBDL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.1,
                "y": -264.3,
                "z": 33.1
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR06",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "SMBDR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.0,
                "y": -264.3,
                "z": 33.1
            },
            "edges": [
                {
                    "to": "MDL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL06",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMBVL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.425,
                "y": -263.45,
                "z": 33.05
            },
            "edges": [
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMBVR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.6,
                "y": -263.45,
                "z": 33.05
            },
            "edges": [
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMDDL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.25,
                "y": -266.25,
                "z": 34.1
            },
            "edges": [
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMDDR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.4500003,
                "y": -266.25,
                "z": 34.1
            },
            "edges": [
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL05",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MDR06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMDVL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.7,
                "y": -270.95,
                "z": 46.65
            },
            "edges": [
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL06",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR06",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SMDVR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.900001,
                "y": -270.95,
                "z": 46.65
            },
            "edges": [
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "URADL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.0,
                "y": -284.65,
                "z": 52.2
            },
            "edges": [
                {
                    "to": "MDL02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL03",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDL04",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "URADR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.3,
                "y": -284.65,
                "z": 52.2
            },
            "edges": [
                {
                    "to": "MDR01",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MDR02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MDR03",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "URAVL": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.32500002,
                "y": -279.6,
                "z": 41.4
            },
            "edges": [
                {
                    "to": "MVL01",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVL03",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVL04",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "URAVR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.575,
                "y": -279.6,
                "z": 41.4
            },
            "edges": [
                {
                    "to": "MVR01",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR02",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR03",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "MVR04",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "VA1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.35,
                "y": -235.55,
                "z": 11.75
            },
            "edges": [
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "VA2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -217.1,
                "z": -3.9500003
            },
            "edges": [
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR10",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.475,
                "y": -184.09999,
                "z": -26.374998
            },
            "edges": [
                {
                    "to": "MVL09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -119.50001,
                "z": -58.7
            },
            "edges": [
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VA5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -54.3,
                "z": -66.049995
            },
            "edges": [
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 21.55,
                "z": -41.15
            },
            "edges": [
                {
                    "to": "MVL13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 98.049995,
                "z": 1.175
            },
            "edges": [
                {
                    "to": "MVL13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL16",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR13",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR16",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "VA8": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8,
                "y": 150.3,
                "z": 3.4
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL16",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR16",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VA9": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8,
                "y": 208.825,
                "z": -9.049999
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR18",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA10": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 254.62502,
                "z": -21.25
            },
            "edges": [
                {
                    "to": "MVL17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR18",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA11": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.55,
                "y": 312.35,
                "z": -26.249998
            },
            "edges": [
                {
                    "to": "MVL19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VA12": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.1,
                "y": 362.45,
                "z": -18.15
            },
            "edges": [
                {
                    "to": "MVL21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR24",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VB1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.55,
                "y": -246.45,
                "z": 16.4
            },
            "edges": [
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "VB2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.0,
                "y": -253.3,
                "z": 19.85
            },
            "edges": [
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL09",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR09",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR10",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "VB3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -210.225,
                "z": -8.725
            },
            "edges": [
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VB4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.0,
                "y": -173.25,
                "z": -33.5
            },
            "edges": [
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR11",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VB5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -109.55,
                "z": -62.15
            },
            "edges": [
                {
                    "to": "MVL13",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR13",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VB6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": -36.575,
                "z": -62.699997
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL16",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR16",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VB7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.675,
                "y": 41.45,
                "z": -24.362
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VB8": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8249999,
                "y": 108.8,
                "z": 2.875
            },
            "edges": [
                {
                    "to": "MVL17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR17",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR18",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VB9": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 159.55,
                "z": 3.2
            },
            "edges": [
                {
                    "to": "MVL17",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR17",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VB10": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 218.07498,
                "z": -11.4
            },
            "edges": [
                {
                    "to": "MVL19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR19",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VB11": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8249999,
                "y": 262.325,
                "z": -21.95
            },
            "edges": [
                {
                    "to": "MVL21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR21",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR22",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR23",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR24",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VC1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.72499996,
                "y": -170.02501,
                "z": -35.75
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VC2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.625,
                "y": -105.325,
                "z": -63.4
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 10
                }
            ]
        },
        "VC3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.4499999,
                "y": -6.45,
                "z": -54.000004
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 11
                }
            ]
        },
        "VC4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.15,
                "y": 43.85,
                "z": -24.2
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 7
                }
            ]
        },
        "VC5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.15,
                "y": 66.549995,
                "z": -12.5
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "VC6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.8249999,
                "y": 174.175,
                "z": 1.0
            },
            "edges": [
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "VD1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.70000005,
                "y": -228.6,
                "z": 4.05
            },
            "edges": [
                {
                    "to": "MVL05",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVL08",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR05",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR08",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "VD2": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.65000004,
                "y": -226.04999,
                "z": 2.35
            },
            "edges": [
                {
                    "to": "MVL07",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR07",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR10",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VD3": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.8,
                "y": -188.1,
                "z": -23.45
            },
            "edges": [
                {
                    "to": "MVL09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR09",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VD4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.8,
                "y": -137.2,
                "z": -52.7
            },
            "edges": [
                {
                    "to": "MVL11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL12",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR12",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VD5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": -68.3,
                "z": -66.75
            },
            "edges": [
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 13
                }
            ]
        },
        "VD6": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.70000005,
                "y": -1.4000001,
                "z": -52.149998
            },
            "edges": [
                {
                    "to": "MVL13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL16",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR13",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR14",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR16",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VD7": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -12.349999,
                "y": 57.95,
                "z": -14.200001
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVL16",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVR16",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "MVULVA",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "VD8": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": 135.09999,
                "z": 3.9500003
            },
            "edges": [
                {
                    "to": "MVL15",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "MVR15",
                    "directed": true,
                    "weight": 12
                }
            ]
        },
        "VD9": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.8,
                "y": 191.5,
                "z": -3.8
            },
            "edges": [
                {
                    "to": "MVL17",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "MVL18",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "MVR17",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "MVR18",
                    "directed": true,
                    "weight": 7
                }
            ]
        },
        "VD10": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": 236.1,
                "z": -16.5
            },
            "edges": [
                {
                    "to": "MVL17",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR17",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VD11": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.8,
                "y": 283.80002,
                "z": -24.8
            },
            "edges": [
                {
                    "to": "MVL19",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL20",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR19",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR20",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "VD12": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": 345.5,
                "z": -23.15
            },
            "edges": [
                {
                    "to": "MVL19",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVL21",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR19",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "MVR22",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "VD13": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.75,
                "y": 379.85,
                "z": -10.75
            },
            "edges": [
                {
                    "to": "MVL21",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL22",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVL23",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR21",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR22",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR23",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "MVR24",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "MDL05": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR05": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL08": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR08": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL20": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR20": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL19": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR19": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL21": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL22": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL23": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL24": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR21": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR22": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR23": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR24": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL07": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR07": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL10": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR10": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL09": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR09": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL12": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR12": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL11": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR11": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL14": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR14": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL13": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR13": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL16": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR16": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL15": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR15": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL18": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR18": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL17": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR17": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL12": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL11": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL14": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR14": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL10": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR10": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL03": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR04": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MANAL": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVULVA": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL01": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL02": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL04": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR01": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR02": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL03": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL01": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR03": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR01": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR03": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL02": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR02": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL22": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR21": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL09": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL13": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR05": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL05": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL07": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR06": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR08": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL06": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL08": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR04": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR07": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL04": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDL06": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MDR06": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR09": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR12": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR11": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR13": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL15": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL16": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR15": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR16": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL18": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR18": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL17": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR17": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL19": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL20": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR19": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR20": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL21": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVL23": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR22": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR23": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        },
        "MVR24": {
            "type": "Muscle",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "edges": []
        }
    }
};
exports.CONFIG = CONFIG;
