var APP_DATA = {
  "scenes": [
    {
      "id": "0-after-gowning",
      "name": "After Gowning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.173862928751409,
          "pitch": 0.1100740586103619,
          "rotation": 0,
          "target": "5-gowning"
        },
        {
          "yaw": 0.5563815897809565,
          "pitch": 0.04393864480325149,
          "rotation": 0,
          "target": "2-first-wing-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fifth-wing",
      "name": "Fifth Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.332749482658709,
          "pitch": 0.06263561565399911,
          "rotation": 0,
          "target": "9-third-wing-entrance"
        },
        {
          "yaw": 3.085590921246405,
          "pitch": 0.024961108157807388,
          "rotation": 0,
          "target": "4-fourth-wing-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9172374108951225,
          "pitch": 0.1305731325647308,
          "title": "PLD Control Panel",
          "text": "The computer where the pulsed laser deposition system is controlled."
        },
        {
          "yaw": 0.657955876124813,
          "pitch": -0.07323763409041284,
          "title": "Glovebox",
          "text": "Isolated sample preparation box with argon atmosphere.&nbsp;"
        },
        {
          "yaw": -1.1141817215001026,
          "pitch": -0.12094006093375853,
          "title": "Glovebox",
          "text": "Isolated sample preparation box with argon atmosphere.&nbsp;"
        }
      ]
    },
    {
      "id": "2-first-wing-entrance",
      "name": "First Wing Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.061736753096266,
          "pitch": 0.07818274775956269,
          "rotation": 0,
          "target": "0-after-gowning"
        },
        {
          "yaw": 0.07222113845766209,
          "pitch": 0.11198377901347811,
          "rotation": 0,
          "target": "8-second-wing-entrance"
        },
        {
          "yaw": -1.6191550143707136,
          "pitch": 0.1699559795654828,
          "rotation": 0,
          "target": "3-first-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-wing",
      "name": "First Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.3132360901515323,
        "pitch": 0.07006621730302243,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.89962556883677,
          "pitch": 0.10295989751316625,
          "rotation": 0,
          "target": "2-first-wing-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5359191679092845,
          "pitch": 0.11231961981306071,
          "title": "Ceramic 3D Printer",
          "text": "<p class=\"MsoNormal\">The Lithoz CeraFab 2M30 uses computer generated 3D models to\nbuild ceramics parts, layer by layer. &nbsp;It can capture details smaller than\na grain of sand, and it is currently being used at DTU for advancing the\nresearch in new hydrogen technologies.<o:p></o:p></p><!--EndFragment--><!--EndFragment--><!--EndFragment-->"
        },
        {
          "yaw": 2.288826823786092,
          "pitch": -0.009644776321625415,
          "title": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">Inject printer</span><!--EndFragment-->",
          "text": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">The PiXDRO LP50 is a research inkjet printer that can print very small, precise patterns—down to 20 micrometers (much thinner than a human hair). It can be used to create working parts and electronics without needing older, more complex methods like lithography or special glue layers.</span><!--EndFragment-->"
        },
        {
          "yaw": 1.8661130195471234,
          "pitch": -0.01717077066029482,
          "title": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">Slot die coater</span><!--EndFragment-->",
          "text": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">The FOM VectorSC provides controlled coating of both rigid and flexible substrates up to A4 size, with coating widths from 1mm to 200mm.</span><!--EndFragment-->"
        },
        {
          "yaw": 0.883442922439686,
          "pitch": -0.10348514515691676,
          "title": "Glovebox",
          "text": "Isolated sample preparation box with argon atmosphere.&nbsp;"
        }
      ]
    },
    {
      "id": "4-fourth-wing-entrance",
      "name": "Fourth Wing Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.9102723026110517,
        "pitch": 0.03196598155520647,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.6059715130453629,
          "pitch": 0.10037052500338461,
          "rotation": 0,
          "target": "1-fifth-wing"
        },
        {
          "yaw": 2.8744204456307587,
          "pitch": 0.0680002668517048,
          "rotation": 0,
          "target": "2-first-wing-entrance"
        },
        {
          "yaw": -2.224392039783117,
          "pitch": 0.06952437241632481,
          "rotation": 0,
          "target": "9-third-wing-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0614007716771034,
          "pitch": -0.17520739029103538,
          "title": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">Sputter chamber/physical vapor deposition</span><!--EndFragment-->",
          "text": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">The OPTIvap physical vapor deposition (PVD) chamber from Creaphys is a machine that can coat materials with thin layers of metal or other substances. It works in different ways, including heating materials to either low or high temperatures and using electric methods called DC, pulsed DC, and RF sputtering. It can also use gases like oxygen and nitrogen to create special types of coatings.</span><!--EndFragment-->"
        }
      ]
    },
    {
      "id": "5-gowning",
      "name": "Gowning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0879741535462504,
          "pitch": 0.05240840346267284,
          "rotation": 0,
          "target": "6-hallway"
        },
        {
          "yaw": 0.03738571749003938,
          "pitch": 0.07734835032454157,
          "rotation": 0,
          "target": "0-after-gowning"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9953392363132849,
          "pitch": -0.21426655967402475,
          "title": "Gowning Area",
          "text": "To maintain a clean atmosphere within the lab and for personal safety, we require that personnel wear lab coats and protective eye-wear."
        },
        {
          "yaw": -1.5983476500116538,
          "pitch": -0.44044785051288926,
          "title": "Booking Table",
          "text": "The equipment has an online booking platform, which is displayed to let users know which systems are available at what times."
        }
      ]
    },
    {
      "id": "6-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 3.0185578701712483,
        "pitch": 0.08098157447700771,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.9823214557685755,
          "pitch": 0.043969580114662676,
          "rotation": 0,
          "target": "5-gowning"
        },
        {
          "yaw": -0.05627497897742195,
          "pitch": 0.08975224955572969,
          "rotation": 0,
          "target": "7-sample-preparation-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sample-preparation-room",
      "name": "Sample Preparation Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.934579865201809,
          "pitch": 0.08984414730290169,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.501823260337595,
          "pitch": -0.104183119375584,
          "title": "Sample Preparation Room",
          "text": "In the sample preparation room we prepare samples for the 3D printer, sputter chamber, PLD, inkjet printer, and the slot die coater.<br><br>The samples are cleaned with alcohol (ethanol and isopropanol) and acetone. It is also possible to use weak acids and other solvents and chemicals."
        }
      ]
    },
    {
      "id": "8-second-wing-entrance",
      "name": "Second Wing Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9091658650729606,
          "pitch": 0.0525671136661785,
          "rotation": 0,
          "target": "2-first-wing-entrance"
        },
        {
          "yaw": 0.7019350037756382,
          "pitch": 0.046781504599149315,
          "rotation": 0,
          "target": "9-third-wing-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9889437964307568,
          "pitch": 0.057664973579962364,
          "title": "Furnace",
          "text": "A furnace is a special oven that can heat up samples to high temperatures (up to 1200 C)."
        },
        {
          "yaw": -2.5182168503751416,
          "pitch": 0.03757371557938427,
          "title": "Desiccator",
          "text": "Low pressure sample storage with a nitrogen atmosphere."
        }
      ]
    },
    {
      "id": "9-third-wing-entrance",
      "name": "Third Wing Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8023400178147355,
          "pitch": 0.08783105440674888,
          "rotation": 0,
          "target": "8-second-wing-entrance"
        },
        {
          "yaw": -2.2915162812769694,
          "pitch": 0.060268000255515375,
          "rotation": 0,
          "target": "2-first-wing-entrance"
        },
        {
          "yaw": 0.9279312681160121,
          "pitch": 0.012240196018634464,
          "rotation": 0,
          "target": "1-fifth-wing"
        },
        {
          "yaw": 1.812319742498179,
          "pitch": 0.07476878186035307,
          "rotation": 0,
          "target": "4-fourth-wing-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.32771735819324377,
          "pitch": 0.07332238091019327,
          "title": "Pulsed Laser Deposition",
          "text": "<!--StartFragment--><span data-olk-copy-source=\"MessageBody\">The pulsed laser deposition (PLD) from TSST is designed for the deposition of thin oxide films with high chemical purity and accurate ratio. It includes a high energy KrF excimer laser (248nm) and laser heating. Reflection high energy electron diffraction (RHEED) enables precise monitoring of the growth, making it possible to follow the deposition of each atomic layer, thus directly knowing the thickness of the film.</span><!--EndFragment-->"
        },
        {
          "yaw": -0.2374098956439319,
          "pitch": 0.3758504887138603,
          "title": "Laser",
          "text": "High-energy KrF excimer laser (248 nm wavelength). For comparison visible light has wavelengths ranging between 380 - 760 nm.&nbsp;"
        },
        {
          "yaw": 0.8581382929692953,
          "pitch": 0.18199568604685545,
          "title": "Reflection High Energy Electron Diffraction",
          "text": "RHEED enables atomic layer-by-layer growth monitoring."
        }
      ]
    }
  ],
  "name": "E-MAT Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
