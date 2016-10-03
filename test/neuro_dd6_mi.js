"use strict";
var CONFIG = {
    "name": "Neuro graph test scenario",
    "nodes": 299,
    "edges": 3364,
    "data": {
        "ADAL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 8.65,
                "y": -239.25,
                "z": 31.05
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADFL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "FLPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "ADAR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -12.9,
                "y": -239.25,
                "z": 31.05
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADFR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
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
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AINL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL2L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URBL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ADER": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -15.299999,
                "y": -242.375,
                "z": 32.45
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ALA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ADFL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.7250001,
                "y": -267.9,
                "z": 41.600002
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 15
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "ADFR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.0,
                "y": -267.9,
                "z": 41.600002
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AWBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ADLL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.7,
                "y": -265.75,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "ADLR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALA",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AWBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "ADLR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.95,
                "y": -265.75,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "ADLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AFDL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.5,
                "y": -268.375,
                "z": 43.5
            },
            "edges": [
                {
                    "to": "AFDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AINR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 7
                }
            ]
        },
        "AFDR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.75,
                "y": -268.375,
                "z": 43.5
            },
            "edges": [
                {
                    "to": "AFDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AIAL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.8,
                "y": -264.15,
                "z": 35.550003
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "ASGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASIL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AWAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AIAR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.1,
                "y": -264.15,
                "z": 35.550003
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADFR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADLR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 14
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASIR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AWAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AIBL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.7,
                "y": -266.19998,
                "z": 37.0
            },
            "edges": [
                {
                    "to": "AFDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "RIVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "AIBR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.8999996,
                "y": -266.19998,
                "z": 37.0
            },
            "edges": [
                {
                    "to": "AFDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AIML": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 9.25,
                "y": -253.44998,
                "z": 28.400002
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "ALML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AIMR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -13.500001,
                "y": -253.44998,
                "z": 28.400002
            },
            "edges": [
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "ASGR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASJR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASKR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AINL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.4499999,
                "y": -269.542,
                "z": 39.357998
            },
            "edges": [
                {
                    "to": "ADEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AFDR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AINR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "ASGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BAGL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AINR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.067,
                "y": -269.542,
                "z": 39.357998
            },
            "edges": [
                {
                    "to": "AFDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AFDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AINL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RID",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AIYL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 7.4500003,
                "y": -252.50002,
                "z": 28.95
            },
            "edges": [
                {
                    "to": "AIYR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "AWAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "AIYR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -11.7,
                "y": -252.50002,
                "z": 28.95
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AWAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "AIZL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.6000004,
                "y": -258.75,
                "z": 37.45
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AIZR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "VB2",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AIZR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.95,
                "y": -258.75,
                "z": 37.45
            },
            "edges": [
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ASGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ALA": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.35,
                "y": -271.0,
                "z": 50.85
            },
            "edges": [
                {
                    "to": "ADEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ALML": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 22.675,
                "y": -60.75,
                "z": -37.149998
            },
            "edges": [
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVM",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "CEPVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SDQL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ALMR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -24.15,
                "y": -60.75,
                "z": -37.149998
            },
            "edges": [
                {
                    "to": "AVM",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ALNL": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.32500002,
                "y": 406.69998,
                "z": 12.375
            },
            "edges": [
                {
                    "to": "SAAVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ALNR": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.925,
                "y": 406.69998,
                "z": 12.375
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AQR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -14.8,
                "y": -243.05,
                "z": 33.95
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BAGL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 9
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URXL",
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VD2",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
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
                    "to": "PDA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDB",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDB",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 2
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
                    "to": "DA2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA4",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 10
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 15
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
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 11
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA7",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 9
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 13
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 2
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AVAR",
                    "directed": false,
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVB",
                    "directed": false,
                    "weight": 7
                }
            ]
        },
        "ASEL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.125,
                "y": -263.675,
                "z": 40.05
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ASER": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.375,
                "y": -263.675,
                "z": 40.05
            },
            "edges": [
                {
                    "to": "AFDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AFDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 14
                },
                {
                    "to": "AWAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ASGL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.7,
                "y": -265.35,
                "z": 45.425
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AINR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AINR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ASGR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.0,
                "y": -265.35,
                "z": 45.425
            },
            "edges": [
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AINL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "ASHL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.55,
                "y": -265.625,
                "z": 41.0
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADFL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AIZL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RICL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "ASHR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.8,
                "y": -265.625,
                "z": 41.0
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIZR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RICR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "ASIL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.6499999,
                "y": -263.7,
                "z": 46.875
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASIR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ASIR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.8999996,
                "y": -263.7,
                "z": 46.875
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASIL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "ASJL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.9750001,
                "y": -263.0,
                "z": 37.475
            },
            "edges": [
                {
                    "to": "ASJR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 14
                }
            ]
        },
        "ASJR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.25,
                "y": -263.0,
                "z": 37.475
            },
            "edges": [
                {
                    "to": "ASJL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 13
                }
            ]
        },
        "ASKL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.7,
                "y": -268.025,
                "z": 46.399998
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "ASKR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.0,
                "y": -268.025,
                "z": 46.399998
            },
            "edges": [
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "AIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "AUAL": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.5,
                "y": -263.975,
                "z": 37.475
            },
            "edges": [
                {
                    "to": "AINR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AWBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 9
                }
            ]
        },
        "AUAR": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.8,
                "y": -263.975,
                "z": 37.475
            },
            "edges": [
                {
                    "to": "AINL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AWBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVAL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.55,
                "y": -271.5,
                "z": 37.983
            },
            "edges": [
                {
                    "to": "AS1",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AS10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AS11",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AS6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS7",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "AS7",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AS8",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AS8",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AS9",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AS9",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DA4",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "DA5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "DA6",
                    "directed": false,
                    "weight": 10
                },
                {
                    "to": "DA6",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "DA7",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DB5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB6",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "FLPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "SABD",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "SABVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA1",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA10",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VA11",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VA3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA5",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "VA6",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VA6",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "VA7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA8",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 10
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 5
                }
            ]
        },
        "AVAR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.5,
                "y": -271.5,
                "z": 37.983
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AS10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS11",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AS3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AS7",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AS7",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AS8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AS8",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AS9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS9",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA4",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA5",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "DA6",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA6",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "DA7",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DB6",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SABVL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "SABVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA10",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VA11",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "VA12",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA4",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA6",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA6",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA7",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VA8",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AVBL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.225,
                "y": -269.794,
                "z": 37.863003
            },
            "edges": [
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AS9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB6",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DB7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DVA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA7",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB10",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VB11",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VB2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VB8",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVBR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.581,
                "y": -269.794,
                "z": 37.863003
            },
            "edges": [
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS7",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB7",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SIBVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB11",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VB7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VB8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "VD10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVDL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.167,
                "y": -268.7,
                "z": 37.3
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS11",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 19
                },
                {
                    "to": "AVM",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "FLPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVDR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.033,
                "y": -268.683,
                "z": 37.283
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "ADLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 15
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA6",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVEL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.75,
                "y": -269.35,
                "z": 40.65
            },
            "edges": [
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA1",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVER": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.4,
                "y": -269.35,
                "z": 40.65
            },
            "edges": [
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVFR",
                    "directed": false,
                    "weight": 23
                },
                {
                    "to": "AVG",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVHL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVHR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB1",
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
                    "to": "ASJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": false,
                    "weight": 23
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVHL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD11",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVG": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.0,
                "y": -237.1,
                "z": 12.85
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVHL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.1499996,
                "y": -264.4,
                "z": 45.0
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVFR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AWBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVHR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.900001,
                "y": -264.4,
                "z": 45.0
            },
            "edges": [
                {
                    "to": "ADLL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADLR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AQR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVFL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVFR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVJL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.2,
                "y": -264.9,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVJR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PLMR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "AVJR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.75,
                "y": -264.9,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AVKL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.65,
                "y": -255.0,
                "z": 22.575
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVM",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVM",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RICL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VB10",
                    "directed": false,
                    "weight": 1
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
                    "to": "ADEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SMBVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 2
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
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DVB",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 9
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVM",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVWL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD12",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "AVM": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -20.5,
                "y": -55.65,
                "z": -44.600002
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ALMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RID",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA1",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AWAL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.9,
                "y": -265.875,
                "z": 42.75
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AFDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AIAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "ASGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWBL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AWAR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.2,
                "y": -265.875,
                "z": 42.75
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AFDR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AIAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIZR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "AWBL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.5,
                "y": -266.225,
                "z": 43.1
            },
            "edges": [
                {
                    "to": "ADFL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "AUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AWBR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.75,
                "y": -266.225,
                "z": 43.1
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "ASGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AUAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AWBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "AWCL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.8,
                "y": -267.95,
                "z": 38.95
            },
            "edges": [
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "AWCR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.1,
                "y": -267.95,
                "z": 38.95
            },
            "edges": [
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIYR",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "ASEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWCL",
                    "directed": true,
                    "weight": 5
                }
            ]
        },
        "BAGL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.675,
                "y": -277.09998,
                "z": 44.975002
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "BAGR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.0,
                "y": -277.09998,
                "z": 44.975002
            },
            "edges": [
                {
                    "to": "AIYL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "BAGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "BDUL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 15.35,
                "y": -187.15,
                "z": -0.2
            },
            "edges": [
                {
                    "to": "ADEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "BDUR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -19.65,
                "y": -187.15,
                "z": -0.2
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SDQL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "CEPDL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.35,
                "y": -275.02502,
                "z": 54.075005
            },
            "edges": [
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "IL1DL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "OLLL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SIADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "URBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "URYDL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "CEPDR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.625,
                "y": -275.02502,
                "z": 54.075005
            },
            "edges": [
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "IL1R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "URYDR",
                    "directed": true,
                    "weight": 1
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
                    "to": "ADLL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLLL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URAVL",
                    "directed": true,
                    "weight": 2
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
                    "to": "ASGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL2VR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "OLQVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SIAVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "URAVR",
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DA4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SABVL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SABVR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 17
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
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
                    "to": "AS2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 5
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
                    "to": "AS4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 25
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 6
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 15
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
                    "to": "AS6",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "DB4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 16
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 10
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 3
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
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
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": false,
                    "weight": 1
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
                    "to": "DA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PHCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 1
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
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "DVA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 21
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 15
                },
                {
                    "to": "VD3",
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
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA3",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 23
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 14
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 1
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
                    "to": "AS4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB2",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 26
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 7
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 13
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
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD13",
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
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD2",
                    "directed": false,
                    "weight": 2
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
                    "to": "DA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": false,
                    "weight": 2
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
                    "to": "DD2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD4",
                    "directed": false,
                    "weight": 1
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
                    "to": "DD3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD8",
                    "directed": false,
                    "weight": 1
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
                    "to": "VB8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD9",
                    "directed": true,
                    "weight": 1
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
            "edges": []
        },
        "DVA": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.345,
                "y": 394.6,
                "z": 3.678
            },
            "edges": [
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AQR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB7",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAAVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB11",
                    "directed": true,
                    "weight": 2
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
                    "to": "AS9",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "AVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PDA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "DVC": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.116,
                "y": 395.43298,
                "z": 5.992
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": false,
                    "weight": 9
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 13
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "VD10",
                    "directed": false,
                    "weight": 4
                }
            ]
        },
        "FLPL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 10.875,
                "y": -246.3,
                "z": 31.05
            },
            "edges": [
                {
                    "to": "ADEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 14
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 17
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "FLPR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -15.05,
                "y": -246.3,
                "z": 31.05
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AVDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB1",
                    "directed": true,
                    "weight": 1
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
                    "to": "AIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "ASJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "HSNR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SABVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VC5",
                    "directed": true,
                    "weight": 3
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
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SABVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "I1L": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.8999999,
                "y": -300.35,
                "z": 53.149998
            },
            "edges": [
                {
                    "to": "I1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "I1R": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.1500006,
                "y": -300.35,
                "z": 53.149998
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "I2L": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.55,
                "y": -311.65,
                "z": 54.45
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "I2R": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.7999997,
                "y": -311.65,
                "z": 54.45
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "I3": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.05,
                "y": -296.55002,
                "z": 58.25
            },
            "edges": [
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M2L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M2L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M2R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "I4": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.05,
                "y": -253.90001,
                "z": 43.1
            },
            "edges": [
                {
                    "to": "I2L",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "I2R",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "I5": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.1,
                "y": -247.84999,
                "z": 30.675
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "I6": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.7,
                "y": -251.65,
                "z": 43.05
            },
            "edges": [
                {
                    "to": "I2L",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I2R",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "NSML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "NSMR",
                    "directed": true,
                    "weight": 2
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
                    "to": "IL1DR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYDL",
                    "directed": true,
                    "weight": 1
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
                    "to": "IL1DL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "IL1DL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1DL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 2
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
                    "to": "IL1L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMED",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYVL",
                    "directed": true,
                    "weight": 1
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
                    "to": "IL1R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL2R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL2VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "IL2DL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 7.1000004,
                "y": -287.47498,
                "z": 57.125004
            },
            "edges": [
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1DL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "URADL",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL2DR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -11.35,
                "y": -287.47498,
                "z": 57.125004
            },
            "edges": [
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "RMED",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADR",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL2L": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 6.7500005,
                "y": -285.0,
                "z": 49.35
            },
            "edges": [
                {
                    "to": "ADEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URXL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "IL2R": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -11.0,
                "y": -285.0,
                "z": 49.35
            },
            "edges": [
                {
                    "to": "ADER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQVR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXR",
                    "directed": false,
                    "weight": 1
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
                    "to": "VD1",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VC2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VC2",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 1
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
                    "to": "DB4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VC1",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VC1",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "VC3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DD4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VC1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VC1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VC2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VC4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD7",
                    "directed": true,
                    "weight": 5
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
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VC5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC5",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URBL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VC4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC4",
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
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "RIFL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VC1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD2",
                    "directed": false,
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
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VB9",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD9",
                    "directed": false,
                    "weight": 5
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
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB10",
                    "directed": true,
                    "weight": 1
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
                    "to": "VA11",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB11",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
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
                    "to": "AS1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA2",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "VB2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "VD3",
                    "directed": false,
                    "weight": 2
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
                    "to": "PVPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB2",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD4",
                    "directed": false,
                    "weight": 1
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
                    "to": "DD2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD5",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": false,
                    "weight": 2
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
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD7",
                    "directed": false,
                    "weight": 1
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
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": false,
                    "weight": 1
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
                    "to": "DD4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA8",
                    "directed": true,
                    "weight": 4
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
                    "to": "PDER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD10",
                    "directed": false,
                    "weight": 5
                }
            ]
        },
        "IL2VL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.3,
                "y": -288.875,
                "z": 42.95
            },
            "edges": [
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "IL2L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URAVL",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "IL2VR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.6,
                "y": -288.875,
                "z": 42.95
            },
            "edges": [
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "OLQVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 15
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "URAVR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "LUAL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.35,
                "y": 403.80002,
                "z": 4.1
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PLML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVWL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "LUAR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.85,
                "y": 403.80002,
                "z": 4.1
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PLMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVWL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "M1": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.86700004,
                "y": -252.135,
                "z": 44.420002
            },
            "edges": [
                {
                    "to": "I2L",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "I2R",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "I3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I4",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "M2L": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.7,
                "y": -254.34999,
                "z": 38.65
            },
            "edges": [
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "M2R": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.0,
                "y": -254.34999,
                "z": 38.65
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M3L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M3R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "M3L": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.7500002,
                "y": -295.4,
                "z": 48.15
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "I4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M3R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "NSML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "NSMR",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "M3R": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.05,
                "y": -295.4,
                "z": 48.15
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I4",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M3L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "MI",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "NSML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "NSMR",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "M4": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.033,
                "y": -288.93298,
                "z": 57.583
            },
            "edges": [
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "I6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M2L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M4",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "NSML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "NSMR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "M5": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.2,
                "y": -241.45,
                "z": 41.800003
            },
            "edges": [
                {
                    "to": "I5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M2L",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "M5",
                    "directed": false,
                    "weight": 4
                }
            ]
        },
        "MCL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.2,
                "y": -296.15,
                "z": 52.3
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I2L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I2R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M2L",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "MCR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.25,
                "y": -296.15,
                "z": 52.3
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M2L",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "MI": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.1539998,
                "y": -293.51202,
                "z": 56.707
            },
            "edges": [
                {
                    "to": "M2R",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "NSML": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.6000001,
                "y": -292.25,
                "z": 51.8
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I2L",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "I2R",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I4",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M3L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M3R",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "NSMR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.3500004,
                "y": -292.25,
                "z": 51.8
            },
            "edges": [
                {
                    "to": "I1L",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I1R",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I2L",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "I2R",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "I3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I4",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "I5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "I6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "M3L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "M3R",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "OLLL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.4,
                "y": -283.9,
                "z": 50.024998
            },
            "edges": [
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 21
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "CEPVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "IL1DL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLLR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "URYDL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "OLLR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.65,
                "y": -283.9,
                "z": 50.024998
            },
            "edges": [
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "IL1DR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL2R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 3
                }
            ]
        },
        "OLQDL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.775,
                "y": -280.0,
                "z": 53.425003
            },
            "edges": [
                {
                    "to": "CEPDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "URBL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "OLQDR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.0249996,
                "y": -280.0,
                "z": 53.425003
            },
            "edges": [
                {
                    "to": "CEPDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "URBR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "OLQVL": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.2,
                "y": -279.25,
                "z": 43.925
            },
            "edges": [
                {
                    "to": "ADLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL2VL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SIBDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "URBL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "OLQVR": {
            "type": "PolymodalNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.474999,
                "y": -279.25,
                "z": 43.925
            },
            "edges": [
                {
                    "to": "CEPVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "URBR",
                    "directed": false,
                    "weight": 1
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
                    "to": "AS11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 3
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
                    "to": "AS11",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RID",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PDEL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 25.75,
                "y": 143.8,
                "z": 25.6
            },
            "edges": [
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 24
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDER",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVM",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVM",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD11",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PDER": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -27.35,
                "y": 143.8,
                "z": 25.6
            },
            "edges": [
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 35
                },
                {
                    "to": "PDEL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVM",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD9",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "PHAL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.2,
                "y": 402.9,
                "z": 4.1
            },
            "edges": [
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVG",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PHAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PHAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PHBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PHBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PHAR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.8,
                "y": 402.9,
                "z": 4.1
            },
            "edges": [
                {
                    "to": "AVG",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PHAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "PHBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVQL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PHBL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 1.2,
                "y": 405.60004,
                "z": 5.475
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PHBR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.7250001,
                "y": 405.60004,
                "z": 5.475
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHBL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PHCL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.75,
                "y": 408.775,
                "z": 7.275
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PLML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA12",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "PHCR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.425,
                "y": 408.775,
                "z": 7.275
            },
            "edges": [
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "LUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PHCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA12",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "PLML": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 2.5,
                "y": 410.15,
                "z": 8.175
            },
            "edges": [
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PHCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "PLMR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.675,
                "y": 410.15,
                "z": 8.175
            },
            "edges": [
                {
                    "to": "AS6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "PLNL": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.225,
                "y": 402.3,
                "z": 6.8999996
            },
            "edges": [
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "PLNR": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -6.225,
                "y": 402.3,
                "z": 6.8999996
            },
            "edges": [
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMBVR",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "PQR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.32500002,
                "y": 407.3,
                "z": 7.6499996
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVG",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 4
                }
            ]
        },
        "PVCL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.85,
                "y": 404.15002,
                "z": 5.5
            },
            "edges": [
                {
                    "to": "AS1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DB4",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DB5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB7",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DVA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PLML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "RID",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SIBVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB10",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB10",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "PVCR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.4499998,
                "y": 404.15002,
                "z": 5.5
            },
            "edges": [
                {
                    "to": "AQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DB4",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DB5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DB7",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PHCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PLMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "PVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVWL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVWR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVWR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SIBVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VB6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB7",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VB8",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVDL": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 24.749,
                "y": 175.151,
                "z": 24.952
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DD5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "VD10",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVDR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -26.113998,
                "y": 175.151,
                "z": 24.952
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "PVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVM": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 24.85,
                "y": 188.8,
                "z": 20.550001
            },
            "edges": [
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "AVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVM",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PDEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "PDER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVR",
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
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVG",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "PVQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVWL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFL",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "BDUL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BDUR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PQR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVWL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VC2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VC3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD12",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD7",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVPL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.1,
                "y": 366.65002,
                "z": -14.7
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PHAR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "PQR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PVPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD13",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD3",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "PVPR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.15,
                "y": 356.55,
                "z": -16.65
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 9
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 13
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVQR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD5",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "PVQL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.85,
                "y": 402.40002,
                "z": 5.15
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "ASJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "ASKL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVQR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVQR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.3,
                "y": 402.40002,
                "z": 5.15
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "ASER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "ASKR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVFL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVNL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVQL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVR": {
            "type": "SensoryNeuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -1.85,
                "y": 407.35,
                "z": 7.7
            },
            "edges": [
                {
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "IL1DL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "LUAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "LUAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PDEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PDER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PLMR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URADL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVT": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.1,
                "y": 358.75,
                "z": -17.5
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVWL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.8,
                "y": 405.4,
                "z": 6.8
            },
            "edges": [
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVWR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "PVWR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.4,
                "y": 405.4,
                "z": 6.8
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA12",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RIAL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.0,
                "y": -270.25,
                "z": 45.0
            },
            "edges": [
                {
                    "to": "CEPVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIVR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "SIADL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 11
                }
            ]
        },
        "RIAR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.2,
                "y": -270.25,
                "z": 45.0
            },
            "edges": [
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 7
                }
            ]
        },
        "RIBL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.5,
                "y": -264.35,
                "z": 38.0
            },
            "edges": [
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIADL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIAVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVR",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "RIBR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.8,
                "y": -264.35,
                "z": 38.0
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "OLQVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIADR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIAVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "RICL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.737,
                "y": -267.063,
                "z": 38.087
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RICR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.563,
                "y": -267.063,
                "z": 38.087
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 1
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
                    "to": "ALA",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AS2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA6",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "PDB",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RIFL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.0,
                "y": -239.84999,
                "z": 18.35
            },
            "edges": [
                {
                    "to": "ALML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVG",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVPL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "RIFR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.15,
                "y": -245.5,
                "z": 23.9
            },
            "edges": [
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 17
                },
                {
                    "to": "AVFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVG",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "HSNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RIGL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.0,
                "y": -233.25,
                "z": 16.35
            },
            "edges": [
                {
                    "to": "AIBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "BAGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "URYDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 2
                }
            ]
        },
        "RIGR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.7,
                "y": -241.95001,
                "z": 20.65
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "ALNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "URYDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYVR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "RIH": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.0,
                "y": -267.35,
                "z": 35.95
            },
            "edges": [
                {
                    "to": "ADFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL2L",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "IL2R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "OLQVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQVR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URYVR",
                    "directed": true,
                    "weight": 1
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
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIYL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVEL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAAVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 1
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
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AIYR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVEL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVER",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAAVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "RIPL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.3750002,
                "y": -278.57498,
                "z": 48.824997
            },
            "edges": [
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "RIPR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.625,
                "y": -278.57498,
                "z": 48.824997
            },
            "edges": [
                {
                    "to": "OLQDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "RIR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -11.599999,
                "y": -265.9,
                "z": 36.649998
            },
            "edges": [
                {
                    "to": "AFDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIZL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AIZR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "BAGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "BAGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "HSNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "PVPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "RIS": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.8250003,
                "y": -262.163,
                "z": 33.638
            },
            "edges": [
                {
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "AVJL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "CEPVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URYVR",
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
                    "to": "AIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SIAVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": false,
                    "weight": 1
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
                    "to": "AIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SIAVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVR",
                    "directed": false,
                    "weight": 2
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
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "SMDDL",
                    "directed": false,
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
                    "to": "OLQVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAADR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URYDL",
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
                    "to": "OLLR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFL",
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
                    "to": "AVKL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": false,
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
                    "to": "AVER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAAVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": false,
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
                    "to": "AVEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAAVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": false,
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
                    "to": "IL1VL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": false,
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
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
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
                    "to": "RMEV",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1DL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL1DR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMEL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
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
                    "to": "AVKL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URBR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "RMFR": {
            "type": "Motor Neuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.4,
                "y": -265.05002,
                "z": 34.1
            },
            "edges": [
                {
                    "to": "AVKL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVKR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 2
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
                    "to": "ADAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ADLL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AWBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL2L",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RID",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMHL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SIBVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXL",
                    "directed": false,
                    "weight": 1
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
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIMR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALNR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "ASHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ASKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVJL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AWBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "IL2R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMHR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXR",
                    "directed": false,
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
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "SIBVR",
                    "directed": false,
                    "weight": 1
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
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SAADL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -4.6879997,
                "y": -270.169,
                "z": 42.131
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SAADR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.531,
                "y": -270.169,
                "z": 42.131
            },
            "edges": [
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "OLLL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "SAAVL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.9,
                "y": -270.90002,
                "z": 45.425
            },
            "edges": [
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 17
                },
                {
                    "to": "OLLR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMFR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMBVR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 8
                }
            ]
        },
        "SAAVR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.175,
                "y": -270.90002,
                "z": 45.425
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIMR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMBVL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "SABD": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.2,
                "y": -234.8,
                "z": 14.925
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA4",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SABVL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.325,
                "y": -249.25,
                "z": 24.349998
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DA1",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA2",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SABVR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.1,
                "y": -249.25,
                "z": 24.349998
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA1",
                    "directed": false,
                    "weight": 3
                }
            ]
        },
        "SDQL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 21.4,
                "y": 222.79999,
                "z": 19.2
            },
            "edges": [
                {
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "ALML",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "FLPL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SDQR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -14.200001,
                "y": -131.75,
                "z": -10.55
            },
            "edges": [
                {
                    "to": "ADLL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIVR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMHL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMHR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SDQL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIADL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -3.958,
                "y": -267.658,
                "z": 43.967
            },
            "edges": [
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIADR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -0.38300002,
                "y": -269.19998,
                "z": 43.65
            },
            "edges": [
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIAVL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.9500003,
                "y": -259.80002,
                "z": 32.25
            },
            "edges": [
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIAVR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -10.2,
                "y": -259.80002,
                "z": 32.25
            },
            "edges": [
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIBDL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -5.2669997,
                "y": -269.133,
                "z": 45.8
            },
            "edges": [
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIBDR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 0.96699995,
                "y": -269.133,
                "z": 45.8
            },
            "edges": [
                {
                    "to": "AIML",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBVR",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIBVL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.667,
                "y": -269.867,
                "z": 35.408
            },
            "edges": [
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SDQR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBDL",
                    "directed": false,
                    "weight": 1
                }
            ]
        },
        "SIBVR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -2.767,
                "y": -269.867,
                "z": 35.408
            },
            "edges": [
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMHL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIBDR",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAADL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SAAVR",
                    "directed": true,
                    "weight": 1
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
                    "to": "ALNL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SAAVL",
                    "directed": true,
                    "weight": 3
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
                    "to": "PLNL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAAVR",
                    "directed": false,
                    "weight": 2
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
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SAAVL",
                    "directed": false,
                    "weight": 3
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
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 2
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
                    "to": "RIAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": false,
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
                    "to": "PVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RIBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIS",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SMDVR",
                    "directed": false,
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
                    "to": "RIAL",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "RIBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RIVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIVR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMDVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": false,
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
                    "to": "IL1DL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIPL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 1
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
                    "to": "IL1DR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMED",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URYDR",
                    "directed": true,
                    "weight": 1
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
                    "to": "RIPL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMEL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMEV",
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
                    "to": "IL1R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMEV",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "URBL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 5.05,
                "y": -279.95,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1L",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "URBR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -9.325,
                "y": -279.95,
                "z": 47.55
            },
            "edges": [
                {
                    "to": "ADAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "CEPDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "IL1R",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "IL2R",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "OLQDR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RICR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMFL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "SIAVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SMBDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "URXR",
                    "directed": true,
                    "weight": 6
                }
            ]
        },
        "URXL": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.05,
                "y": -269.875,
                "z": 48.275
            },
            "edges": [
                {
                    "to": "ASHL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AUAL",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVJR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "RICL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMGL",
                    "directed": true,
                    "weight": 2
                }
            ]
        },
        "URXR": {
            "type": "interneuron",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.35,
                "y": -269.875,
                "z": 48.275
            },
            "edges": [
                {
                    "to": "AUAR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "AVBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "IL2R",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "OLQVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RIGR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIPR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMGR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIAVR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "URYDL": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 4.125,
                "y": -281.425,
                "z": 51.899998
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDDR",
                    "directed": true,
                    "weight": 1
                }
            ]
        },
        "URYDR": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -8.4,
                "y": -281.425,
                "z": 51.899998
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "SMDDL",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "URYVL": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": 3.4,
                "y": -280.92502,
                "z": 45.35
            },
            "edges": [
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVER",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "IL1VL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RIH",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIS",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RMDDL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "RMDVR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SIBVR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": true,
                    "weight": 4
                }
            ]
        },
        "URYVR": {
            "type": "NeurUnkFunc",
            "features": {
                "foo": "bar",
                "true": true
            },
            "coords": {
                "x": -7.7,
                "y": -280.92502,
                "z": 45.35
            },
            "edges": [
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVEL",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "IL1VR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIAR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "RMDDR",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "RMDVL",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "SIBDR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SIBVL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVL",
                    "directed": true,
                    "weight": 3
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DA2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 2
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 10
                },
                {
                    "to": "PVNR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD12",
                    "directed": true,
                    "weight": 4
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
                    "to": "AS11",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DA8",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DA9",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DB7",
                    "directed": true,
                    "weight": 4
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "LUAL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PHCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PHCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB11",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD12",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD13",
                    "directed": true,
                    "weight": 11
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
                    "to": "AVAL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "SABD",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD2",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 8
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
                    "to": "AS1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 18
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 11
                },
                {
                    "to": "SABD",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 3
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
                    "to": "AS2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVDL",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DA5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 21
                },
                {
                    "to": "SABD",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB3",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD4",
                    "directed": true,
                    "weight": 3
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
                    "to": "AS3",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DA5",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 13
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 2
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 24
                },
                {
                    "to": "VB5",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VD5",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 2
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
                    "to": "AS5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 12
                },
                {
                    "to": "VB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD7",
                    "directed": true,
                    "weight": 9
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
                    "to": "AS6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVAL",
                    "directed": false,
                    "weight": 10
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 21
                },
                {
                    "to": "PDER",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VD7",
                    "directed": true,
                    "weight": 5
                },
                {
                    "to": "VD8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD8",
                    "directed": true,
                    "weight": 5
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "DD5",
                    "directed": true,
                    "weight": 15
                },
                {
                    "to": "DVB",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DVC",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB8",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB8",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VD7",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD9",
                    "directed": true,
                    "weight": 10
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
                    "to": "AIBR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "DB2",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "DVA",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIML",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "RMFL",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SAADL",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "SAADR",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "SABD",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "SMDVR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA1",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VA3",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VD1",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 1
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVKL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVT",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD11",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD12",
                    "directed": true,
                    "weight": 2
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD6",
                    "directed": true,
                    "weight": 7
                },
                {
                    "to": "PVCR",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA12",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA12",
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD1",
                    "directed": true,
                    "weight": 20
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "RIGL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB1",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VB3",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB7",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VC2",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD2",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "VD3",
                    "directed": true,
                    "weight": 3
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
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 37
                },
                {
                    "to": "VA4",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VA7",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB1",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD2",
                    "directed": true,
                    "weight": 6
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 16
                },
                {
                    "to": "VB5",
                    "directed": false,
                    "weight": 1
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD3",
                    "directed": true,
                    "weight": 27
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB6",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 7
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DA4",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 30
                },
                {
                    "to": "VA8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB5",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VB7",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD6",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD7",
                    "directed": true,
                    "weight": 8
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "DD4",
                    "directed": true,
                    "weight": 2
                },
                {
                    "to": "VB2",
                    "directed": false,
                    "weight": 2
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
                    "to": "AVBL",
                    "directed": false,
                    "weight": 7
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "DD5",
                    "directed": true,
                    "weight": 30
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "VA9",
                    "directed": true,
                    "weight": 9
                },
                {
                    "to": "VB9",
                    "directed": true,
                    "weight": 3
                },
                {
                    "to": "VB9",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VD10",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VD9",
                    "directed": true,
                    "weight": 10
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
                    "to": "AVAL",
                    "directed": false,
                    "weight": 5
                },
                {
                    "to": "AVAR",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "AVBL",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "AVBR",
                    "directed": false,
                    "weight": 6
                },
                {
                    "to": "DD5",
                    "directed": true,
                    "weight": 8
                },
                {
                    "to": "DVB",
                    "directed": false,
                    "weight": 1
                },
                {
                    "to": "PVCL",
                    "directed": false,
                    "weight": 2
                },
                {
                    "to": "VA8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VA9",
                    "directed": false,
                    "weight": 4
                },
                {
                    "to": "VB8",
                    "directed": true,
                    "weight": 1
                },
                {
                    "to": "VB8",
                    "directed": false,
                    "weight": 3
                },
                {
                    "to": "VD10",
                    "directed": true,
                    "weight": 5
                }
            ]
        }
    }
};
exports.CONFIG = CONFIG;
