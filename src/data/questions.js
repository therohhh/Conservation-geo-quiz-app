
const questions = [
  {
    id: 1,
    week: 1,
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: [
      "Translocation",
      "Migration",
      "Dispersal",
      "Drifting",
    ],
    answer: 1,
  },
  {
    id: 2,
    week: 1,
    question: "The systematic approach to Geography was developed by:",
    options: [
      "Alexander von Humboldt",
      "Karl Ritter",
      "Rene Descartes",
      "Eratosthenes",
    ],
    answer: 0,
  },
  {
    id: 3,
    week: 1,
    question: "Growing vegetables under a teak plantation, where the vegetables die out, may indicate:",
    options: [
      "Autophagy",
      "Allelophagy",
      "Autopathy",
      "Allelopathy",
    ],
    answer: 3,
  },
  {
    id: 4,
    week: 1,
    question: "A lake still exists physically, but sewage and plastic waste reduce the number of fish it can support. This is best called:",
    options: [
      "Habitat degradation",
      "Habitat fragmentation",
      "Jump dispersal",
      "Secular dispersal",
    ],
    answer: 0,
  },
  {
    id: 5,
    week: 1,
    question: '"Science of relationships between organisms and their environments" is the definition of:',
    options: [
      "Conservation",
      "Preservation",
      "Environmentalism",
      "Ecology",
    ],
    answer: 3,
  },
  {
    id: 6,
    week: 1,
    question: "The rate of a biological process being limited by the factor in least supply relative to its requirement is known as:",
    options: [
      "Liebig's law of the minimum",
      "Liebig's law of the maximum",
      "Shelford's law of tolerance",
      "Shelford's law of intolerance",
    ],
    answer: 0,
  },
  {
    id: 7,
    week: 1,
    question: "In the word root for conservation, 'con' stands for:",
    options: [
      "Together",
      "To keep",
      "House",
      "Manage",
    ],
    answer: 0,
  },
  {
    id: 8,
    week: 1,
    question: "In the word root for conservation, 'servare' stands for:",
    options: [
      "Together",
      "To keep",
      "House",
      "Manage",
    ],
    answer: 1,
  },
  {
    id: 9,
    week: 1,
    question: "The geographical discipline of Climatology is most closely related to:",
    options: [
      "Geology",
      "Meteorology",
      "Hydrology",
      "Pedology",
    ],
    answer: 1,
  },
  {
    id: 10,
    week: 1,
    question: "Good climate is a:",
    options: [
      "Chemical factor",
      "Demographic factor",
      "Push factor",
      "Pull factor",
    ],
    answer: 3,
  },

  
  {
    id: 11,
    week: 2,
    question: "Mount Fuji is an example of:",
    options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
    answer: 1,
  },
  {
    id: 12,
    week: 2,
    question: "What is the main source of magma?",
    options: ["Crust", "Mantle", "Outer core", "Inner core"],
    answer: 1,
  },
  {
    id: 13,
    week: 2,
    question: "Which is NOT a method of absolute dating?",
    options: ["Radioisotope dating", "Thermoluminescence dating", "Inclusion study", "Fission track dating"],
    answer: 2,
  },
  {
    id: 14,
    week: 2,
    question: "What are planetesimals?",
    options: [
      "Fully formed gas giants",
      "Fragments of continental crust",
      "Small bodies formed from gas and dust that can accrete into planets",
      "Layers of volcanic ash within a mountain"
    ],
    answer: 2,
  },
  {
    id: 15,
    week: 2,
    question: "Hawaiian volcanoes are examples of:",
    options: ["Shield volcanoes", "Stratovolcanoes", "Calderas", "Flood basalt provinces"],
    answer: 0,
  },
  {
    id: 16,
    week: 2,
    question: "P waves are:",
    options: [
      "Longitudinal in nature",
      "Transverse in nature",
      "Unable to move through gases",
      "Unable to move through liquids"
    ],
    answer: 0,
  },
  {
    id: 17,
    week: 2,
    question: "Which principle states that fossil assemblages are unique to particular time periods and can be used to date rocks?",
    options: [
      "Principle of fossil succession",
      "Principle of original horizontality",
      "Principle of superposition",
      "Principle of cross-cutting relationships"
    ],
    answer: 0,
  },
  {
    id: 18,
    week: 2,
    question: "Which set contains the terrestrial planets?",
    options: [
      "Jupiter, Saturn, Uranus, Neptune",
      "Earth, Jupiter, Mars, Saturn",
      "Mercury, Venus, Uranus, Neptune",
      "Mercury, Venus, Earth, Mars"
    ],
    answer: 3,
  },
  {
    id: 19,
    week: 2,
    question: "Which principle states that sedimentary strata extend laterally until they thin out or encounter a barrier?",
    options: [
      "Principle of superposition",
      "Principle of original horizontality",
      "Principle of lateral continuity",
      "Principle of inclusions"
    ],
    answer: 2,
  },
  {
    id: 20,
    week: 2,
    question: "The Deccan Traps are an example of:",
    options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
    answer: 3,
  },

  
  {
    id: 21,
    week: 3,
    question: "Mudrock is an example of which type of sedimentary rock?",
    options: ["Siliciclastic rock", "Carbonate rock", "Evaporite", "Phosphatic rock"],
    answer: 0,
  },
  {
    id: 22,
    week: 3,
    question: "Carbonation is a type of:",
    options: ["Chemical weathering", "Physical weathering", "Biological weathering", "None of these"],
    answer: 0,
  },
  {
    id: 23,
    week: 3,
    question: "Green or black inosilicate minerals with prism- or needle-shaped crystals are:",
    options: ["Amphiboles", "Feldspar", "Mica", "Pyroxene"],
    answer: 0,
  },
  {
    id: 24,
    week: 3,
    question: "Hydrolysis is a type of:",
    options: ["Chemical weathering", "Physical weathering", "Biological weathering", "None of these"],
    answer: 0,
  },
  {
    id: 25,
    week: 3,
    question: "Which of the following is an exogenic process?",
    options: ["Volcanism", "Earthquake", "Plate tectonics", "Deposition"],
    answer: 3,
  },
  {
    id: 26,
    week: 3,
    question: "Why can a mineral's streak be more useful than its surface colour?",
    options: [
      "It determines the mineral's density",
      "Its colour never changes",
      "It shows the colour of powdered mineral and may reduce the effect of minor impurities",
      "It determines the mineral's age"
    ],
    answer: 2,
  },
  {
    id: 27,
    week: 3,
    question: "Which is an independent control on landform development?",
    options: ["Mineral streak", "Crystal habit", "Knife-blade hardness", "Stability of sea level"],
    answer: 3,
  },
  {
    id: 28,
    week: 3,
    question: "Sandstone is an example of which type of sedimentary rock?",
    options: ["Siliciclastic rock", "Carbonate rock", "Evaporite", "Phosphatic rock"],
    answer: 0,
  },
  {
    id: 29,
    week: 3,
    question: "What is the tendency of a mineral to break along particular directions and form plane surfaces called?",
    options: ["Cleavage", "Fracture", "Lustre", "Streak"],
    answer: 0,
  },
  {
    id: 30,
    week: 3,
    question: "Magma that cools slowly generally forms:",
    options: [
      "Coarse-grained igneous rocks",
      "Fine-grained sedimentary rocks",
      "Coarse-grained sedimentary rocks",
      "Fine-grained igneous rocks"
    ],
    answer: 0,
  },

  
  {
    id: 31,
    week: 4,
    question: "Carbon sequestration in geological sites is an example of:",
    options: ["Mitigation", "Adaptation", "Both mitigation and adaptation", "None of these"],
    answer: 0,
  },
  {
    id: 32,
    week: 4,
    question: "To reduce the effect of altitude on pressure readings, isobars are converted to pressure values at:",
    options: ["Surface temperature", "Cloud base", "Tropopause", "Sea level"],
    answer: 3,
  },
  {
    id: 33,
    week: 4,
    question: "Creating artificial water holes in Mudumalai during drought is an example of:",
    options: ["Adaptation", "Mitigation", "Deceleration", "Maladaptation"],
    answer: 0,
  },
  {
    id: 34,
    week: 4,
    question: "Surplus seed and sperm banking helps facilitate:",
    options: ["Resistance", "Resilience to climate changes", "Response", "None of these"],
    answer: 1,
  },
  {
    id: 35,
    week: 4,
    question: "Flights of jet planes typically occur in which atmospheric layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: 1,
  },
  {
    id: 36,
    week: 4,
    question: "Heat transfer through the horizontal movement of air is called:",
    options: ["Convection", "Radiation", "Advection", "Conduction"],
    answer: 2,
  },
  {
    id: 37,
    week: 4,
    question: "What is the classical period used for calculating climate averages?",
    options: ["10 years", "20 years", "30 years", "40 years"],
    answer: 2,
  },
  {
    id: 38,
    week: 4,
    question: "Noctilucent clouds occur in which atmospheric layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: 2,
  },
  {
    id: 39,
    week: 4,
    question: "Atmospheric pressure is mainly caused by:",
    options: [
      "Horizontal movement of clouds",
      "The weight of air above a point",
      "Absorption of ultraviolet radiation",
      "Seasonal pressure belts"
    ],
    answer: 1,
  },
  {
    id: 40,
    week: 4,
    question: "Which type of air mass is generally warm and moist?",
    options: ["cP", "cT", "mP", "mT"],
    answer: 3,
  },

  
  {
    id: 41,
    week: 5,
    question: "Which sediments are commonly deposited over abyssal plains?",
    options: [
      "Coral fragments and gravel",
      "Basalt blocks and volcanic ash",
      "Sand and large pebbles",
      "Clay and silt"
    ],
    answer: 3,
  },
  {
    id: 42,
    week: 5,
    question: "What is the largest habitat on Earth among the following?",
    options: ["Continental shelf", "Continental slope", "Guyot", "Abyssal plain"],
    answer: 3,
  },
  {
    id: 43,
    week: 5,
    question: "Where are the largest mountain ranges on Earth located?",
    options: ["Oceanic trenches", "Mid-oceanic ridges", "Seamounts", "Atolls"],
    answer: 1,
  },
  {
    id: 44,
    week: 5,
    question: "Why are continental shelves highly productive?",
    options: [
      "They receive both light and nutrients",
      "They are the deepest parts of the ocean",
      "They are isolated from runoff",
      "They lack sediments and organisms"
    ],
    answer: 0,
  },
  {
    id: 45,
    week: 5,
    question: "What is tidal range?",
    options: [
      "Horizontal water movement parallel to the beach",
      "The difference in sea level between high tide and low tide",
      "The speed of ocean waves",
      "Cold water rising from the deep ocean"
    ],
    answer: 1,
  },
  {
    id: 46,
    week: 5,
    question: "What is the direct conversion of ice or snow into water vapour called?",
    options: ["Condensation", "Precipitation", "Snowmelt", "Sublimation"],
    answer: 3,
  },
  {
    id: 47,
    week: 5,
    question: "Which factors influence ocean-water density with depth?",
    options: [
      "Runoff, tides and beach slope",
      "Hydrostatic pressure, salinity and temperature",
      "Wind, waves and latitude only",
      "Sediment, coral and river mouths"
    ],
    answer: 1,
  },
  {
    id: 48,
    week: 5,
    question: "What are deep valleys cutting across continental shelves and slopes called?",
    options: ["Oceanic trenches", "Mid-oceanic ridges", "Guyots", "Submarine canyons"],
    answer: 3,
  },
  {
    id: 49,
    week: 5,
    question: "What is the approximate gradient of a continental shelf?",
    options: ["0–1 degree", "1–2 degrees", "2–5 degrees", "5–10 degrees"],
    answer: 0,
  },
  {
    id: 50,
    week: 5,
    question: "What are lines connecting points of equal salinity called?",
    options: ["Isopycnal curves", "Isohaline curves", "Isotherms", "Isobuoyant curves"],
    answer: 1,
  },

  
  {
    id: 51,
    week: 6,
    question: "Why do the Western Ghats act as a water divide?",
    options: [
      "They prevent all rivers from reaching the sea",
      "Water on opposite sides flows in different directions",
      "All rivers originating there are seasonal",
      "They convert rivers into lakes"
    ],
    answer: 1,
  },
  {
    id: 52,
    week: 6,
    question: "A river network that follows geological structure and slope is described as:",
    options: ["Discordant", "Antecedent", "Accordant", "Centripetal"],
    answer: 2,
  },
  {
    id: 53,
    week: 6,
    question: "What is a tree-like river drainage pattern called?",
    options: ["Trellis drainage", "Dendritic drainage", "Centripetal drainage", "Rectangular drainage"],
    answer: 1,
  },
  {
    id: 54,
    week: 6,
    question: "A river system that does not match the present geological structure or relief is called:",
    options: ["Discordant drainage", "Dendritic drainage", "Radial drainage", "Parallel drainage"],
    answer: 0,
  },
  {
    id: 55,
    week: 6,
    question: "The Himalayas are primarily comprised of which type of rocks?",
    options: ["Sedimentary rocks", "Igneous rocks", "Metamorphic rocks", "Both igneous and metamorphic rocks"],
    answer: 0,
  },
  {
    id: 56,
    week: 6,
    question: "Which rivers flow westwards into the Arabian Sea?",
    options: [
      "Ganga and Yamuna",
      "Mahanadi and Godavari",
      "Narmada and Tapi",
      "Krishna and Kaveri"
    ],
    answer: 2,
  },
  {
    id: 57,
    week: 6,
    question: "Which factors determine India's climate?",
    options: [
      "Distance from the sea",
      "Altitude",
      "Relief",
      "All of these"
    ],
    answer: 3,
  },
  {
    id: 58,
    week: 6,
    question: "Why do Peninsular rivers generally have fixed courses?",
    options: [
      "They flow through newly formed mountains",
      "They carry extremely high sediment loads",
      "They are controlled only by monsoon winds",
      "They have cut into older, harder rocks"
    ],
    answer: 3,
  },
  {
    id: 59,
    week: 6,
    question: "In the Köppen climate classification, which symbol represents polar frost?",
    options: ["C", "D", "F", "T"],
    answer: 2,
  },
  {
    id: 60,
    week: 6,
    question: "Which factors influence India's climate?",
    options: [
      "Latitudinal extent",
      "The Himalayas acting as a climatic divide",
      "Distribution of land and water",
      "All of these"
    ],
    answer: 3,
  },

  
  {
    id: 61,
    week: 7,
    question: "Which soil type is common in Rajasthan and Gujarat, with sandy texture, salinity and low moisture?",
    options: ["Forest soils", "Arid soils", "Peaty soils", "Red and yellow soils"],
    answer: 1,
  },
  {
    id: 62,
    week: 7,
    question: "Cryofracturing is a type of:",
    options: ["Chemical weathering", "Physical weathering", "Biological weathering", "None of these"],
    answer: 1,
  },
  {
    id: 63,
    week: 7,
    question: "Bangar is a type of:",
    options: ["Alluvial soil", "Black cotton soil", "Saline soil", "Red and yellow soil"],
    answer: 0,
  },
  {
    id: 64,
    week: 7,
    question: "What is biodiversity within a single ecosystem called?",
    options: ["Alpha biodiversity", "Beta biodiversity", "Gamma biodiversity", "Delta biodiversity"],
    answer: 0,
  },
  {
    id: 65,
    week: 7,
    question: "A climax community caused by wildfires is called:",
    options: ["Climatic climax", "Edaphic climax", "Disclimax", "Catastrophic climax"],
    answer: 3,
  },
  {
    id: 66,
    week: 7,
    question: "According to the intermediate disturbance hypothesis, biodiversity is generally greatest at what level of disturbance?",
    options: ["Less disturbance", "Intermediate disturbance", "More disturbance", "No disturbance"],
    answer: 1,
  },
  {
    id: 67,
    week: 7,
    question: "What is biodiversity among different geographical areas called?",
    options: ["Alpha biodiversity", "Beta biodiversity", "Gamma biodiversity", "Delta biodiversity"],
    answer: 2,
  },
  {
    id: 68,
    week: 7,
    question: "What is the vertical arrangement of soil horizons called?",
    options: ["Soil texture", "Soil structure", "Soil profile", "Soil science"],
    answer: 2,
  },
  {
    id: 69,
    week: 7,
    question: "Carbonation is a type of:",
    options: ["Chemical weathering", "Physical weathering", "Biological weathering", "None of these"],
    answer: 0,
  },
  {
    id: 70,
    week: 7,
    question: "What describes the arrangement of solid soil particles and pore spaces?",
    options: ["Soil fertility", "Soil texture", "Soil horizon", "Soil structure"],
    answer: 3,
  },

  
  {
    id: 71,
    week: 8,
    question: "Which of the following is an example of ex-situ conservation?",
    options: ["Wildlife sanctuary", "National park", "Seed bank", "Biosphere reserve"],
    answer: 2,
  },
  {
    id: 72,
    week: 8,
    question: "What is the reduced fitness caused by mating between closely related individuals in small populations called?",
    options: ["Habitat displacement", "Eutrophication", "Inbreeding depression", "Carbon storage"],
    answer: 2,
  },
  {
    id: 73,
    week: 8,
    question: "Which species has an ecological role disproportionately greater than its abundance?",
    options: ["Umbrella species", "Flagship species", "Least-concern species", "Keystone species"],
    answer: 3,
  },
  {
    id: 74,
    week: 8,
    question: "A species found only in a single lake is especially vulnerable because it has:",
    options: [
      "A high birth rate",
      "A limited geographical range",
      "High adaptability",
      "A large home range"
    ],
    answer: 1,
  },
  {
    id: 75,
    week: 8,
    question: "What is a disadvantage of ex-situ conservation?",
    options: [
      "It always protects the natural habitat",
      "Captive-bred individuals may find reintroduction difficult",
      "It automatically prevents all inbreeding",
      "It can plan for all species at once"
    ],
    answer: 1,
  },
  {
    id: 76,
    week: 8,
    question: "In the species-area relationship, what does S represent?",
    options: ["Size of habitat", "Species richness", "Survival rate", "Stochastic pressure"],
    answer: 1,
  },
  {
    id: 77,
    week: 8,
    question: "The movement of DDT from water to plankton, fish and piscivorous birds, with increasing concentration at higher levels, is called:",
    options: [
      "Ecological redundancy",
      "Habitat selection",
      "Biomagnification",
      "Ex-situ management"
    ],
    answer: 2,
  },
  {
    id: 78,
    week: 8,
    question: "According to the question bank, what is the preferred threat level for a conservation reserve?",
    options: ["Very high", "Medium", "Very low", "Non-existent"],
    answer: 1,
  },
  {
    id: 79,
    week: 8,
    question: "Which of the following is NOT included in the HIPPO threats to biodiversity?",
    options: ["Habitat loss", "Invasive species", "Pollination", "Pollution"],
    answer: 2,
  },
  {
    id: 80,
    week: 8,
    question: "An elephant's home range, destructive feeding behaviour and public relatability illustrate which roles?",
    options: [
      "Umbrella species only",
      "Keystone species only",
      "Flagship species only",
      "All of the above"
    ],
    answer: 3,
  },

  
  {
    id: 81,
    week: 9,
    question: "How is the sex ratio calculated in the question bank?",
    options: [
      "Female population divided by male population, multiplied by 1000",
      "Male population divided by female population, multiplied by 1000",
      "Total population divided by female population, multiplied by 1000",
      "Working population divided by dependent population, multiplied by 1000"
    ],
    answer: 0,
  },
  {
    id: 82,
    week: 9,
    question: "Which concept describes the humanising of nature?",
    options: [
      "Environmental determinism",
      "Possibilism",
      "Neodeterminism",
      "Stop-and-go determinism"
    ],
    answer: 1,
  },
  {
    id: 83,
    week: 9,
    question: "The age dependency ratio compares the dependent population with the:",
    options: ["Total female population", "Working-age population", "Urban population", "Migrant population"],
    answer: 1,
  },
  {
    id: 84,
    week: 9,
    question: "A logistic population growth curve is:",
    options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
    answer: 2,
  },
  {
    id: 85,
    week: 9,
    question: "Which is a positive check according to Malthus?",
    options: ["Late marriage", "War", "Celibacy", "Moral restraint"],
    answer: 1,
  },
  {
    id: 86,
    week: 9,
    question: "Economic development is often measured using:",
    options: ["Age dependency ratio", "Total land area", "GDP per capita", "Sex ratio"],
    answer: 2,
  },
  {
    id: 87,
    week: 9,
    question: "Which is NOT one of the three commonly recognised pillars of sustainability?",
    options: [
      "Environmental sustainability",
      "Economic sustainability",
      "Trans-boundary sustainability",
      "Social sustainability"
    ],
    answer: 2,
  },
  {
    id: 88,
    week: 9,
    question: "The demographic transition describes a shift from:",
    options: [
      "High birth rate and low death rate to low birth rate and high death rate",
      "Low birth rate and high death rate to low birth rate and low death rate",
      "High birth rate and high death rate to low birth rate and low death rate",
      "High birth rate and high death rate to low birth rate and high death rate"
    ],
    answer: 2,
  },
  {
    id: 89,
    week: 9,
    question: "Which is a preventive check according to Malthus?",
    options: ["Foresight", "Vice", "Misery", "Flood"],
    answer: 0,
  },
  {
    id: 90,
    week: 9,
    question: "What age range is considered the working population in the question bank?",
    options: ["0–15 years", "15–64 years", "65 years and above", "Both 0–15 and 65+ years"],
    answer: 1,
  },

  
  {
    id: 91,
    week: 10,
    question: "When a forest is cleared, carbon is released from removed wood and from:",
    options: ["Ocean sediments", "Glaciers", "Soil organic matter", "Desert sand"],
    answer: 2,
  },
  {
    id: 92,
    week: 10,
    question: "Hydrogen intended for nuclear fusion is classified as which resource type in the question bank?",
    options: ["Potential resources", "Actual resources", "Reserve resources", "Stock resources"],
    answer: 3,
  },
  {
    id: 93,
    week: 10,
    question: "How did road construction contribute to rainforest loss in Rondônia?",
    options: [
      "By increasing rainfall",
      "By allowing easier human access into forest areas",
      "By preventing agricultural plots",
      "By converting cropland back into forest"
    ],
    answer: 1,
  },
  {
    id: 94,
    week: 10,
    question: "Oil that has not yet been drilled is classified as:",
    options: ["Potential resources", "Actual resources", "Reserve resources", "Stock resources"],
    answer: 0,
  },
  {
    id: 95,
    week: 10,
    question: "Cropland occupies a smaller share of land than livestock but contributes more to:",
    options: ["Global calorie supply", "Mineral extraction", "Groundwater recharge", "Built-up land expansion"],
    answer: 0,
  },
  {
    id: 96,
    week: 10,
    question: "Ores with low concentrations that are identified as economically recoverable are classified as:",
    options: ["Potential resources", "Actual resources", "Reserve resources", "Stock resources"],
    answer: 2,
  },
  {
    id: 97,
    week: 10,
    question: "Resources that have been surveyed but cannot currently be used because of a lack of technology are classified as:",
    options: ["Potential resources", "Actual resources", "Reserve resources", "Stock resources"],
    answer: 3,
  },
  {
    id: 98,
    week: 10,
    question: "What is the largest source of nitrogen oxides in the atmosphere according to the question bank?",
    options: [
      "Electricity generation",
      "Mobile sources",
      "Industrial processes",
      "Waste disposal"
    ],
    answer: 1,
  },
  {
    id: 99,
    week: 10,
    question: "Timber that is currently being harvested is classified as:",
    options: ["Potential resources", "Actual resources", "Reserve resources", "Stock resources"],
    answer: 1,
  },
  {
    id: 100,
    week: 10,
    question: "What is the largest source of atmospheric ammonia (NH₃) according to the question bank?",
    options: [
      "Animal manure",
      "Mineral fertiliser",
      "Crops and decomposition",
      "Human waste"
    ],
    answer: 0,
  },

  
  {
    id: 101,
    week: 11,
    question: "The ability to produce a good using fewer inputs than another producer is called:",
    options: ["Comparative advantage", "Absolute advantage", "Production advantage", "Resource advantage"],
    answer: 1,
  },
  {
    id: 102,
    week: 11,
    question: "Which of the following can help mitigate the effects of linear infrastructure on wildlife?",
    options: ["Bridge underpasses", "Box culverts", "Pipe culverts", "All of these"],
    answer: 3,
  },
  {
    id: 103,
    week: 11,
    question: "Which mode of transport generally requires more money and technology to establish than roads?",
    options: ["Shipping lines", "Railways", "Inland waterways", "Footpaths"],
    answer: 1,
  },
  {
    id: 104,
    week: 11,
    question: "Which factors govern the barrier effect of roads on wildlife?",
    options: [
      "Road-edge features",
      "Time of day and year",
      "Species diversity",
      "All of these"
    ],
    answer: 3,
  },
  {
    id: 105,
    week: 11,
    question: "Which factors influence the barrier effect of roads?",
    options: [
      "Traffic intensity",
      "Vehicle speed",
      "Driver sensitivity",
      "All of these"
    ],
    answer: 3,
  },
  {
    id: 106,
    week: 11,
    question: "The ability to produce a good at a lower opportunity cost is called:",
    options: ["Real advantage", "Monetary advantage", "Comparative advantage", "Opportunity advantage"],
    answer: 2,
  },
  {
    id: 107,
    week: 11,
    question: "Dust from ships can reveal their movement because dust particles act as:",
    options: [
      "Fuel particles",
      "Noise absorbers",
      "Nuclei for condensation",
      "Ocean-current markers"
    ],
    answer: 2,
  },
  {
    id: 108,
    week: 11,
    question: "How can roads disturb wildlife at night?",
    options: [
      "By reducing wind movement",
      "By increasing soil moisture",
      "By creating silent zones",
      "Through light pollution from vehicle headlamps"
    ],
    answer: 3,
  },
  {
    id: 109,
    week: 11,
    question: "Why do young male tigers and leopards often move away from their natal areas?",
    options: [
      "To avoid seasonal flooding",
      "To reduce conflict and avoid inbreeding",
      "To follow shipping routes",
      "To increase road density"
    ],
    answer: 1,
  },
  {
    id: 110,
    week: 11,
    question: "Oxford is an example of which type of town?",
    options: ["Mining town", "Garrison town", "Educational town", "Religious town"],
    answer: 2,
  },

  
  {
    id: 111,
    week: 12,
    question: "What term describes conditions that increase the susceptibility of a community to the impacts of hazards?",
    options: ["Hazard", "Exposure", "Vulnerability", "Disaster"],
    answer: 2,
  },
  {
    id: 112,
    week: 12,
    question: "A LiDAR pulse takes 0.00001 seconds for its round trip. What is the approximate distance to the target? (Speed of light = 3 × 10⁸ m/s)",
    options: ["500 m", "1000 m", "1500 m", "2000 m"],
    answer: 2,
  },
  {
    id: 113,
    week: 12,
    question: "In photogrammetry, understanding what is happening rather than measuring quantities is called:",
    options: ["Metric application", "Radiometric application", "Interpretive application", "Fiducial application"],
    answer: 2,
  },
  {
    id: 114,
    week: 12,
    question: "A process, phenomenon or human activity that may cause loss of life, injury or other health impacts is called a:",
    options: ["Hazard", "Exposure", "Vulnerability", "Disaster"],
    answer: 0,
  },
  {
    id: 115,
    week: 12,
    question: "What does IMU stand for?",
    options: [
      "Imperial Metering Unit",
      "Inertial Metering Unit",
      "Imperial Measurement Unit",
      "Inertial Measurement Unit"
    ],
    answer: 3,
  },
  {
    id: 116,
    week: 12,
    question: "Calculating forest-cover area or the size of plantation pits is an example of which photogrammetry application?",
    options: ["Interpretive application", "Metric application", "Oblique application", "Passive application"],
    answer: 1,
  },
  {
    id: 117,
    week: 12,
    question: "What is considered an essential component of GIS alongside hardware and software?",
    options: ["Mirror system", "Humanware", "Shutter speed", "Focal length"],
    answer: 1,
  },
  {
    id: 118,
    week: 12,
    question: "Which valuation method uses people's revealed willingness to pay through observed market prices?",
    options: [
      "Market price method",
      "Replacement cost method",
      "Damage cost avoided method",
      "Contingent valuation method"
    ],
    answer: 0,
  },
  {
    id: 119,
    week: 12,
    question: "A camera axis tilted between vertical and horizontal is described as:",
    options: ["True vertical", "Near vertical", "Oblique", "Fiducial"],
    answer: 2,
  },
  {
    id: 120,
    week: 12,
    question: "A camera mounted at ground level with a horizontal orientation uses which platform?",
    options: ["Space-borne platform", "Air-borne platform", "Ground-borne platform", "Orbital platform"],
    answer: 2,
  },

];

export default questions;
