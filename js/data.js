export var dict = {
  orientation: {
    title: "Orientation",
    description: `Ideally living areas should be located to the north, bedrooms to the east, utility areas to the south and carports etc to the west. This orientation can provide passive cooling in summer with shading and breezes, particularly on the western side of the house. It also allows winter sun into the house to help maintain a comfortable temperature of your home all year, with little or no need for mechanical assistance. This saves money, and reduces greenhouse gas emissions and your carbon footprint. `,
    showButton: true,
    camera: {
      default: "front",
      front: { pos: "", components: [] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {},
  },
  window_glazing: {
    title: "Window Glazing",
    description: "",
    showButton: false,
    camera: {
      default: "front",
      front: { pos: "", components: ["window_glazing_1"] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   window_glazing_1: {
    //     text: `Windows need to be as big as they can be on the north face to allow maximum free solar heating, without producing uncontrolled heat loss or gain. A rule of thumb is to occupy 70% of the North face with well insulating windows. The windows can be smaller on the other sides of the house. Windows that insulate well and do not reflect the sun's rays maximise heat gain and minimise heat loss in winter. 
    //   To help keep your home cool in summer and warm in winter attention should be given to the type of glazing used. Double and triple glazing and some laminated glass for example acts like insulation, in reducing the rate at which heat moves through the glazing system. This reduces the rate of energy gained or lost through the windows. 
    //   `,
    //     pos: {
    //       x: -7.399414539337165,
    //       y: 14.783137638924632,
    //       z: -4.792348986292696,
    //     },
    //   },
    // },
  },
  shading: {
    title: "Shading",
    description: "",
    showButton: false,
    camera: {
      default: "right",
      front: { pos: "", components: [] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: ["shading_1"] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   shading_1: {
    //     text: `Summer Sun Protection 
    //     Effective shading will help prevent living spaces from becoming uncomfortably hot. Your home will be naturally cooler with protective shading and cross-ventilated air movement from breezes at night. 
    //     North Shading 
    //     The sun moves higher across the sky in summer which creates opportunities for effective shading of northern facing windows using a mix of window treatments, and greenery. 
        
    //     East & West Shading 
    //     Windows facing east or west get a lot of horizontal sunlight in summer and require extensive shading from hot summer sun radiation. To achieve energy efficiency your house needs full external shading to all windows from October or earlier to March and possibly beyond. Vertical shading devices are needed to block western afternoon sun in summer. Lighter coloured shading devices reflect more heat than darker coloured treatments. Internal shading is relatively ineffective in preventing heat gain. Adjustable shade structures also allow you to let in sun during winter when more warmth is needed.
    //     `,
    //     pos: {
    //       x: -10.365349942127253,
    //       y: 12.306583207722259,
    //       z: -13.33726715093064,
    //     },
    //   },
    // },
  },
  ventilation_sealing_and_zoning: {
    title: "Ventilation, Sealing, Airtightness, and Zoning",
    description: "",
    showButton: false,
    camera: {
      default: "front",
      front: {
        pos: "",
        components: [
          "ventilation_sealing_and_zoning_1",
          "ventilation_sealing_and_zoning_2",
          "ventilation_sealing_and_zoning_3",
        ],
      },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   ventilation_sealing_and_zoning_1: {
    //     text: `Ventilation:
    //   For heat ventilation install closable vents in the ceiling, for venting through the roof (roof vents) or high level open-able windows. Consideration should also be given to Self-closing dampers, as well as closing off evaporative air convents in winter.`,
    //     pos: {
    //       x: -7.399414539337165,
    //       y: 14.783137638924632,
    //       z: -4.792348986292696,
    //     },
    //   },
    //   ventilation_sealing_and_zoning_2: {
    //     text: `Sealing:
    //   Seal all openings (windows & doors) to prevent air movement (draughts and air leaks) in winter. Install weather stripping / window and door seals to prevent unwanted air movement.`,
    //     pos: {
    //       x: -5.854806362996861,
    //       y: 7.281921112592661,
    //       z: 2.1643151524145416,
    //     },
    //   },
    //   ventilation_sealing_and_zoning_3: {
    //     text: `Zoning:
    //   Divide your home into zones of different temperature needs for comfort e.g. bedrooms separated from living areas. Also enable closing off living areas from other unoccupied rooms, making heating and cooling more efficient.`,
    //     pos: {
    //       x: -5.834043025970459,
    //       y: 4.243496991920568,
    //       z: -7.720916166401823,
    //     },
    //   },
    // },
  },
  insulation: {
    title: "Insulation",
    description: "",
    showButton: true,
    camera: {
      default: "front",
      front: { pos: "", components: ["insulation_f_1", "insulation_f_2"] },
      back: { pos: "", components: ["insulation_b_1"] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   insulation_f_1: {
    //     text: `Ceiling / Roof:
    //   Cool roofs refer to installing or painting the roof with a heat reflective material. They are effective in keeping your house cool during summer as they reflect solar radiation and absorb less heat than a standard roof.   Cool roofs can be created with highly reflective paint, a sheet covering, or highly reflective tiles or shingles.  Alternatively painting your roof with light colours or white paint is also effective.`,
    //     pos: {
    //       x: -8.655546713566338,
    //       y: 15.076727246684285,
    //       z: -1.4917255314960993,
    //     },
    //   },
    //   insulation_f_2: {
    //     text: `Wall:
    //     Bulk insulation works like a quilt in that it relies on pockets of trapped air within its structure. Bulk insulation should be used in roof spaces and in wall cavities to trap heat in or prevent it from getting into the home.  
    //     Reflective insulation should be located at the external surface of walls and roofs to maximise its capacity to prevent unwanted energy movement.`,
    //     pos: {
    //       x: -5.956149578094482,
    //       y: 7.872175245255027,
    //       z: 12.288488868313515,
    //     },
    //   },
    //   insulation_b_1: {
    //     text: `Wall:
    //   Bulk insulation works like a quilt in that it relies on pockets of trapped air within its structure. Bulk insulation should be used in roof spaces and in wall cavities to trap heat in or prevent it from getting into the home.  
    //   Reflective insulation should be located at the external surface of walls and roofs to maximise its capacity to prevent unwanted energy movement.`,
    //     pos: {
    //       x: -18.853651046752926,
    //       y: 7.449298927154141,
    //       z: 0.1736069765762099,
    //     },
    //   },
    // },
  },
  thermal_mass: {
    title: "Thermal Mass",
    description: "",
    showButton: true,
    camera: {
      default: "front",
      front: { pos: "", components: ["thermal_mass_f_1", "thermal_mass_f_2"] },
      back: { pos: "", components: ["thermal_mass_b_1"] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   thermal_mass_f_1: {
    //     text: `Floor:
    //     Floating timber boards have become a popular flooring option in contemporary housing.  However, this flooring type on a concrete slab significantly diminishes the effectiveness of the thermal mass qualities of the floor.`,
    //     pos: {
    //       x: -3.5061468024244213,
    //       y: 3.9294071197509766,
    //       z: 2.359447700643671,
    //     },
    //   },
    //   thermal_mass_f_2: {
    //     text: `Wall:
    //     Materials such as a concrete slab, bricks and other masonry, rammed earth wall or mud bricks have the ability to absorb and store heat and are said to have high thermal mass.  Heat is absorbed from the sun's radiation, warm air and any other sources of heat.
    //     Use thermal mass dividing walls between north facing living rooms and south facing bedrooms. Thermal lag may distribute some of the heat to bedrooms, while retention of heat will serve all rooms in summer.`,
    //     pos: {
    //       x: -5.956149578094482,
    //       y: 7.872175245255027,
    //       z: 12.288488868313515,
    //     },
    //   },
    //   thermal_mass_b_1: {
    //     text: `Floor:
    //   Floating timber boards have become a popular flooring option in contemporary housing.  However, this flooring type on a concrete slab significantly diminishes the effectiveness of the thermal mass qualities of the floor.`,
    //     pos: {
    //       x: -18.853651046752926,
    //       y: 7.449298927154141,
    //       z: 0.1736069765762099,
    //     },
    //   },
    // },
  },
  building_materials: {
    title: "Building Materials",
    description: "",
    showButton: false,
    camera: {
      default: "front",
      front: { pos: "", components: ["building_materials_f_1"] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   building_materials_f_1: {
    //     text: `Cool Roof:
    //   Select materials that will not absorb heat, such as using reflective materials to create a 'cool roof'.`,
    //     pos: {
    //       x: -8.655546713566338,
    //       y: 15.076727246684285,
    //       z: -1.4917255314960993,
    //     },
    //   },
    // },
  },
  embodied_energy: {
    title: "Embodied Energy",
    description: "",
    showButton: false,
    camera: {
      default: "front",
      front: {
        pos: "",
        components: ["embodied_energy_f_1", "embodied_energy_f_2"],
      },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   embodied_energy_f_1: {
    //     text: `Roof:
    //     Use roof metal sheets rather than clay or concrete tiles for your roof.
    //     Use timber for your roof frame rather than steel.`,
    //     pos: {
    //       x: -8.655546713566338,
    //       y: 15.076727246684285,
    //       z: -1.4917255314960993,
    //     },
    //   },
    //   embodied_energy_f_2: {
    //     text: `Windows:
    //     Windows and doors could be timber rather than aluminum. Aluminum window frames can reduce maintenance, but can transmit heat, and are high in embodied energy. `,
    //     pos: {
    //       x: -1.6057767868041992,
    //       y: 14.567526396749537,
    //       z: 6.25392935930628,
    //     },
    //   },
    // },
  },
  construction_systems: {
    title: "Construction Systems",
    description: "",
    showButton: false,
    camera: {
      default: "front",
      front: {
        pos: "",
        components: ["construction_systems_f_1", "construction_systems_f_2"],
      },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: [] },
    },
    // components: {
    //   construction_systems_f_1: {
    //     text: `Lightweight Walls:
    //     Well insulated lightweight external walls can reflect unwanted summer sun, keeping high daytime air temperature out or warm air in.`,
    //     pos: {
    //       x: -5.956149578094482,
    //       y: 7.872175245255027,
    //       z: 12.288488868313515,
    //     },
    //   },
    //   construction_systems_f_2: {
    //     text: `Slab-On-Ground:
    //     Absorb and re-radiates heat inside your home.`,
    //     pos: {
    //       x: -5.135472694273435,
    //       y: 1.7543063163757324,
    //       z: -12.065022688556384,
    //     },
    //   },
    // },
  },
  household_appliances: {
    title: "Household Appliances",
    description: "",
    showButton: false,
    camera: {
      default: "top",
      front: { pos: "", components: [] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: {
        pos: "",
        components: [
          "household_appliances_t_1",
          "household_appliances_t_2",
          "household_appliances_t_3",
          "household_appliances_t_4",
        ],
      },
    },
    // components: {
    //   household_appliances_t_1: {
    //     text: `Rooftop Solar Power Systems:
    //     Provide a source of renewable energy which will lower your greenhouse gas emissions, and over a period of time can significantly reduce your energy costs.`,
    //     pos: {
    //       x: -19.668118075123378,
    //       y: 11.888360119336802,
    //       z: 0.15966559835856675,
    //     },
    //   },
    //   household_appliances_t_2: {
    //     text: `Heating and Cooling Systems:
    //     Good passive design will greatly reduce the need for supplementary heating and cooling, and is key in keeping the entire house comfortable for the greater part of the year without mechanical assistance.`,
    //     pos: {
    //       x: -12.405331254443917,
    //       y: 18.363147735595703,
    //       z: 3.776218313868943,
    //     },
    //   },
    //   household_appliances_t_3: {
    //     text: `Hot Water Service:
    //     The right hot water service selection can lower your energy bills and reduce your environmental impact without compromising your lifestyle. Solar hot water heaters are a great choice and significantly reduce the amount of “other” power you need to heat your water.`,
    //     pos: {
    //       x: -10.754263972061478,
    //       y: 16.98103667017934,
    //       z: -4.79865624617012,
    //     },
    //   },
    //   household_appliances_t_4: {
    //     text: `Refrigerators:
    //     Energy efficient appliances such as refrigerators that have a high star rating reduce emissions and can save you hundreds of dollars in the long run.`,
    //     pos: {
    //       x: -10.006377115974528,
    //       y: 16.850226192471215,
    //       z: -3.086004868020485,
    //     },
    //   },
    // },
  },
  renewable_energy: {
    title: "Renewable Energy",
    description: "",
    showButton: false,
    camera: {
      default: "top",
      front: { pos: "", components: [] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: {
        pos: "",
        components: ["renewable_energy_t_1", "renewable_energy_t_2"],
      },
    },
    // components: {
    //   renewable_energy_t_1: {
    //     text: `Grid Connected Systems:
    //     Grid connected systems interact with the electricity supply grid in urban and rural areas - anywhere there is a reliable electricity grid.`,
    //     pos: {
    //       x: -16.81602219716961,
    //       y: 14.476260890507646,
    //       z: -7.804128116962357,
    //     },
    //   },
    //   renewable_energy_t_2: {
    //     text: `Stand-alone System:
    //     A stand-alone power system has to generate and store the energy the household needs. These systems are more complex and expensive than grid connected systems because they need to be able to meet the total energy requirements of the household.`,
    //     pos: {
    //       x: -7.294799392451047,
    //       y: 13.842028319943875,
    //       z: -11.684902512328085,
    //     },
    //   },
    // },
  },
  water_use: {
    title: "Water Use",
    description: "",
    showButton: true,
    camera: {
      default: "front",
      front: { pos: "", components: ["water_use_1", "water_use_2"] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: ["water_use_1", "water_use_2"] },
    },
    // components: {
    //   water_use_1: {
    //     text: `Rainwater Tank:
    //   Rainwater can be plumbed throughout the house, or at least to toilets, laundry and gardens.
    //     ● A 2KL rainwater tank may serve toilet and laundry. 
    //     ● A 20KL rainwater tank may serve the house. 
    //   Underground rainwater storage, such as an underground concrete tank, is a good option for sites with space constraints.`,
    //     pos: {
    //       x: -12.392628318525306,
    //       y: 3.6321625844823995,
    //       z: -19.349482672214133,
    //     },
    //   },
    //   water_use_2: {
    //     text: `Plants:
    //   Minimise outdoor water use by choosing plants that are appropriate for local growing conditions.`,
    //     pos: {
    //       x: -0.5,
    //       y: 2.5,
    //       z: -18,
    //     },
    //   },
    // },
  },
  urban_greening_and_water_sensitive_urban_design: {
    title: "Urban Greening and Water Sensitive Urban Design",
    description: "",
    showButton: false,
    camera: {
      default: "top",
      front: { pos: "", components: [] },
      back: { pos: "", components: [] },
      left: { pos: "", components: [] },
      right: { pos: "", components: [] },
      top: { pos: "", components: ["urban_1", "urban_2"] },
    },
    // components: {
    //   urban_1: {
    //     text: `Sustainable Garden:
    //   ● Try to retain as much vegetation on site as possible, particularly drought tolerant species. 
    //   ● Include a mix of native and exotic species in your garden to reduce the need for watering, to create shade, to maximise biodiversity and to attract birds and insects.`,
    //     pos: {
    //       x: 1.7733995324229213,
    //       y: 1.754306316375736,
    //       z: -15.03322197671255,
    //     },
    //   },
    //   urban_2: {
    //     text: `Shading and Cooling:
    //   ● Use plants inside and outside of your house to cool down air temperatures and to improve air quality.
    //   ● To control solar access into the house, create shade with deciduous trees (trees that lose leaves in winter) in north facing outdoor areas, and along the west side of the house to provide shade in summer and allow sun through in winter. Large shrubs and climbing plants can also create effective shading of the house.`,
    //     pos: {
    //       x: -3.1725639057842927,
    //       y: 15.809524513659102,
    //       z: -18.27071718252297,
    //     },
    //   },
    // },
  },
};

export var ballDict = {
  window_glazing_1: {
    text: `Windows need to be as big as they can be on the north face to allow maximum free solar heating, without producing uncontrolled heat loss or gain. A rule of thumb is to occupy 70% of the North face with well insulating windows. The windows can be smaller on the other sides of the house. Windows that insulate well and do not reflect the sun's rays maximise heat gain and minimise heat loss in winter. 
  To help keep your home cool in summer and warm in winter attention should be given to the type of glazing used. Double and triple glazing and some laminated glass for example acts like insulation, in reducing the rate at which heat moves through the glazing system. This reduces the rate of energy gained or lost through the windows. 
  `,
    pos: {
      x: -7.399414539337165,
      y: 14.783137638924632,
      z: -4.792348986292696,
    },
  },
  shading_1: {
    text: `<b>Summer Sun Protection</b><br>
    Effective shading will help prevent living spaces from becoming uncomfortably hot. Your home will be naturally cooler with protective shading and cross-ventilated air movement from breezes at night. <br><br>
    <b>North Shading</b><br>
    The sun moves higher across the sky in summer which creates opportunities for effective shading of northern facing windows using a mix of window treatments, and greenery. <br><br>
    <b>East & West Shading</b><br>
    Windows facing east or west get a lot of horizontal sunlight in summer and require extensive shading from hot summer sun radiation. To achieve energy efficiency your house needs full external shading to all windows from October or earlier to March and possibly beyond. Vertical shading devices are needed to block western afternoon sun in summer. Lighter coloured shading devices reflect more heat than darker coloured treatments. Internal shading is relatively ineffective in preventing heat gain. Adjustable shade structures also allow you to let in sun during winter when more warmth is needed.
    `,
    pos: {
      x: -10.365349942127253,
      y: 12.306583207722259,
      z: -13.33726715093064,
    },
  },
  ventilation_sealing_and_zoning_1: {
    text: `<b>Ventilation:</b><br>
  For heat ventilation install closable vents in the ceiling, for venting through the roof (roof vents) or high level open-able windows. Consideration should also be given to Self-closing dampers, as well as closing off evaporative air convents in winter.`,
    pos: {
      x: -7.399414539337165,
      y: 14.783137638924632,
      z: -4.792348986292696,
    },
  },
  ventilation_sealing_and_zoning_2: {
    text: `<b>Sealing:</b><br>
  Seal all openings (windows & doors) to prevent air movement (draughts and air leaks) in winter. Install weather stripping / window and door seals to prevent unwanted air movement.`,
    pos: {
      x: -5.854806362996861,
      y: 7.281921112592661,
      z: 2.1643151524145416,
    },
  },
  ventilation_sealing_and_zoning_3: {
    text: `<b>Zoning:</b><br>
  Divide your home into zones of different temperature needs for comfort e.g. bedrooms separated from living areas. Also enable closing off living areas from other unoccupied rooms, making heating and cooling more efficient.`,
    pos: {
      x: -5.834043025970459,
      y: 4.243496991920568,
      z: -7.720916166401823,
    },
  },
  insulation_f_1: {
    text: `<b>Ceiling / Roof:</b><br>
  Cool roofs refer to installing or painting the roof with a heat reflective material. They are effective in keeping your house cool during summer as they reflect solar radiation and absorb less heat than a standard roof.   Cool roofs can be created with highly reflective paint, a sheet covering, or highly reflective tiles or shingles.  Alternatively painting your roof with light colours or white paint is also effective.`,
    pos: {
      x: -8.655546713566338,
      y: 15.076727246684285,
      z: -1.4917255314960993,
    },
  },
  insulation_f_2: {
    text: `<b>Wall:</b><br>
    Bulk insulation works like a quilt in that it relies on pockets of trapped air within its structure. Bulk insulation should be used in roof spaces and in wall cavities to trap heat in or prevent it from getting into the home.  
    Reflective insulation should be located at the external surface of walls and roofs to maximise its capacity to prevent unwanted energy movement.`,
    pos: {
      x: -5.956149578094482,
      y: 7.872175245255027,
      z: 12.288488868313515,
    },
  },
  insulation_b_1: {
    text: `<b>Wall:</b><br>
  Bulk insulation works like a quilt in that it relies on pockets of trapped air within its structure. Bulk insulation should be used in roof spaces and in wall cavities to trap heat in or prevent it from getting into the home.  
  Reflective insulation should be located at the external surface of walls and roofs to maximise its capacity to prevent unwanted energy movement.`,
    pos: {
      x: -18.853651046752926,
      y: 7.449298927154141,
      z: 0.1736069765762099,
    },
  },
  thermal_mass_f_1: {
    text: `<b>Floor:</b><br>
    Floating timber boards have become a popular flooring option in contemporary housing.  However, this flooring type on a concrete slab significantly diminishes the effectiveness of the thermal mass qualities of the floor.`,
    pos: {
      x: -3.5061468024244213,
      y: 3.9294071197509766,
      z: 2.359447700643671,
    },
  },
  thermal_mass_f_2: {
    text: `<b>Wall:</b><br>
    Materials such as a concrete slab, bricks and other masonry, rammed earth wall or mud bricks have the ability to absorb and store heat and are said to have high thermal mass.  Heat is absorbed from the sun's radiation, warm air and any other sources of heat.
    Use thermal mass dividing walls between north facing living rooms and south facing bedrooms. Thermal lag may distribute some of the heat to bedrooms, while retention of heat will serve all rooms in summer.`,
    pos: {
      x: -5.956149578094482,
      y: 7.872175245255027,
      z: 12.288488868313515,
    },
  },
  thermal_mass_b_1: {
    text: `<b>Floor:</b><br>
  Floating timber boards have become a popular flooring option in contemporary housing.  However, this flooring type on a concrete slab significantly diminishes the effectiveness of the thermal mass qualities of the floor.`,
    pos: {
      x: -18.853651046752926,
      y: 7.449298927154141,
      z: 0.1736069765762099,
    },
  },
  building_materials_f_1: {
    text: `<b>Cool Roof:</b><br>
  Select materials that will not absorb heat, such as using reflective materials to create a 'cool roof'.`,
    pos: {
      x: -8.655546713566338,
      y: 15.076727246684285,
      z: -1.4917255314960993,
    },
  },
  embodied_energy_f_1: {
    text: `<b>Roof:</b><br>
    Use roof metal sheets rather than clay or concrete tiles for your roof.
    Use timber for your roof frame rather than steel.`,
    pos: {
      x: -8.655546713566338,
      y: 15.076727246684285,
      z: -1.4917255314960993,
    },
  },
  embodied_energy_f_2: {
    text: `<b>Windows:</b><br>
    Windows and doors could be timber rather than aluminum. Aluminum window frames can reduce maintenance, but can transmit heat, and are high in embodied energy. `,
    pos: {
      x: -1.6057767868041992,
      y: 14.567526396749537,
      z: 6.25392935930628,
    },
  },
  construction_systems_f_1: {
    text: `<b>Lightweight Walls:</b><br>
    Well insulated lightweight external walls can reflect unwanted summer sun, keeping high daytime air temperature out or warm air in.`,
    pos: {
      x: -5.956149578094482,
      y: 7.872175245255027,
      z: 12.288488868313515,
    },
  },
  construction_systems_f_2: {
    text: `<b>Slab-On-Ground:</b><br>
    Absorb and re-radiates heat inside your home.`,
    pos: {
      x: -5.135472694273435,
      y: 1.7543063163757324,
      z: -12.065022688556384,
    },
  },
  household_appliances_t_1: {
    text: `<b>Rooftop Solar Power Systems:</b><br>
    Provide a source of renewable energy which will lower your greenhouse gas emissions, and over a period of time can significantly reduce your energy costs.`,
    pos: {
      x: -19.668118075123378,
      y: 11.888360119336802,
      z: 0.15966559835856675,
    },
  },
  household_appliances_t_2: {
    text: `<b>Heating and Cooling Systems:</b><br>
    Good passive design will greatly reduce the need for supplementary heating and cooling, and is key in keeping the entire house comfortable for the greater part of the year without mechanical assistance.`,
    pos: {
      x: -12.405331254443917,
      y: 18.363147735595703,
      z: 3.776218313868943,
    },
  },
  household_appliances_t_3: {
    text: `<b>Hot Water Service:</b><br>
    The right hot water service selection can lower your energy bills and reduce your environmental impact without compromising your lifestyle. Solar hot water heaters are a great choice and significantly reduce the amount of “other” power you need to heat your water.`,
    pos: {
      x: -10.754263972061478,
      y: 16.98103667017934,
      z: -4.79865624617012,
    },
  },
  household_appliances_t_4: {
    text: `<b>Refrigerators:</b><br>
    Energy efficient appliances such as refrigerators that have a high star rating reduce emissions and can save you hundreds of dollars in the long run.`,
    pos: {
      x: -10.006377115974528,
      y: 16.850226192471215,
      z: -3.086004868020485,
    },
  },
  renewable_energy_t_1: {
    text: `<b>Grid Connected Systems:</b><br>
    Grid connected systems interact with the electricity supply grid in urban and rural areas - anywhere there is a reliable electricity grid.`,
    pos: {
      x: -16.81602219716961,
      y: 14.476260890507646,
      z: -7.804128116962357,
    },
  },
  renewable_energy_t_2: {
    text: `<b>Stand-alone System:</b><br>
    A stand-alone power system has to generate and store the energy the household needs. These systems are more complex and expensive than grid connected systems because they need to be able to meet the total energy requirements of the household.`,
    pos: {
      x: -7.294799392451047,
      y: 13.842028319943875,
      z: -11.684902512328085,
    },
  },
  water_use_1: {
    text: `<b>Rainwater Tank:</b><br>
  Rainwater can be plumbed throughout the house, or at least to toilets, laundry and gardens.<br>
    ● A 2KL rainwater tank may serve toilet and laundry. <br>
    ● A 20KL rainwater tank may serve the house. <br>
  Underground rainwater storage, such as an underground concrete tank, is a good option for sites with space constraints.`,
    pos: {
      x: -12.392628318525306,
      y: 3.6321625844823995,
      z: -19.349482672214133,
    },
  },
  water_use_2: {
    text: `<b>Plants:</b><br>
  Minimise outdoor water use by choosing plants that are appropriate for local growing conditions.`,
    pos: {
      x: -0.5,
      y: 2.5,
      z: -18,
    },
  },
  urban_1: {
    text: `<b>Sustainable Garden:</b><br>
  ● Try to retain as much vegetation on site as possible, particularly drought tolerant species. <br>
  ● Include a mix of native and exotic species in your garden to reduce the need for watering, to create shade, to maximise biodiversity and to attract birds and insects.`,
    pos: {
      x: 1.7733995324229213,
      y: 1.754306316375736,
      z: -15.03322197671255,
    },
  },
  urban_2: {
    text: `<b>Shading and Cooling:</b><br>
  ● Use plants inside and outside of your house to cool down air temperatures and to improve air quality.<br>
  ● To control solar access into the house, create shade with deciduous trees (trees that lose leaves in winter) in north facing outdoor areas, and along the west side of the house to provide shade in summer and allow sun through in winter. Large shrubs and climbing plants can also create effective shading of the house.`,
    pos: {
      x: -3.1725639057842927,
      y: 15.809524513659102,
      z: -18.27071718252297,
    },
  },
};
export var perspectiveDict = {
  front: {
    position: {
      x: 15.524216096092161,
      y: 12.679893177101015,
      z: 1.1052580936164191,
    },
    rotation: {
      x: -1.597967370112671,
      y: 1.3586749359436738,
      z: 1.5985900141484088,
    },
  },
  back: {
    position: {
      x: -34.47567577332103,
      y: 10.23358436828251,
      z: 0.39275117841118573,
    },
    rotation: {
      x: -1.5413886070627827,
      y: -1.3743763547073717,
      z: -1.5408123978092454,
    },
  },
  left: {
    position: {
      x: -8.075922070652833,
      y: 10.401987176358768,
      z: 28.269686098739975,
    },
    rotation: {
      x: -0.14921718852517593,
      y: -0.009747632887087517,
      z: -0.0014653824335953123,
    },
  },
  right: {
    position: {
      x: -9.186376235178448,
      y: 7.487833154895721,
      z: -26.451878266377022,
    },
    rotation: {
      x: -3.086629447884159,
      y: -0.005841967111143916,
      z: -3.141271238461895,
    },
  },
  top: {
    position: {
      x: -9.02926872587529,
      y: 31.554971707718103,
      z: 0.3957520555437766,
    },
    rotation: {
      x: -1.5707963169374568,
      y: 9.99995865724912e-7,
      z: 1.5609391656838063,
    },
  },
};
