/*
    mod by https://github.com/nachitodev
    idk why did i made this mod
    its just funny and interesting lol
    have a nice one.
    
    last update: 14/02/2026 
*/
elements.marihuana = {
    color: ["#5c8a4b", "#6b9c59", "#4b7a3e"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    burn: 5,
    burnTime: 500,
    fireColor: "#eb8931",
    hidden: false
};

elements.cocaine = {
    color: ["#ffffff", "#f0f0f0", "#e0e0e0"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1400,
    tempHigh: 190,
    stateHigh: "molten_cocaine",
    burn: 20,
    burnTime: 50,
    hidden: false
};

elements.molten_cocaine = {
    color: ["#ffffcc", "#ffffe0"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1200,
    tempLow: 180,
    stateLow: "cocaine",
    tempHigh: 400,
    stateHigh: "fire",
    burn: 70,
    burnTime: 20,
    hidden: true
};

elements.crack = {
    color: ["#e3dac9", "#dcd0c0", "#ebe5ce"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1300,
    tempHigh: 90,
    stateHigh: "liquid_crack",
    burn: 10,
    burnTime: 300,
    hidden: false
};

elements.liquid_crack = {
    color: ["#e3dac9", "#dcd0c0"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1200,
    tempLow: 85,
    stateLow: "crack",
    tempHigh: 200,
    stateHigh: "fire",
    hidden: true
};

elements.ketamine = {
    color: ["#ffffff", "#f5f5f5"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1500,
    hidden: false
};

elements.lsd = {
    color: "#a8d4ff",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1000,
    reactions: {
        "paper": { elem1: null, elem2: "lsd_blotter", chance: 1.0 }
    },
    hidden: false
};

elements.lsd_blotter = {
    color: "#ff00ff",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 1500,
    burn: 50,
    burnTime: 50,
    hidden: false
};

elements.cannabis_seed = {
    color: ["#5e4b35", "#6b563d", "#4a3b2a"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false,
    burn: 10,
    burnTime: 50,
    reactions: {
        "dirt": { elem1: null, elem2: "cannabis_branch_base", chance: 0.05 },
        "mud": { elem1: null, elem2: "cannabis_branch_base", chance: 0.05 },
        "water": { elem1: "cannabis_branch_base", chance: 0.1 }
    }
};

elements.cannabis_branch_base = {
    color: ["#3a6e2a", "#2f5c22", "#458232"],
    behavior: [
        ["XX", "CR:cannabis_branch%10", "XX"],
        ["XX", "XX", "XX"],
        ["XX", "M1", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 900,
    burn: 30,
    burnTime: 100,
    hidden: true
};

elements.cannabis_branch = {
    color: ["#3a6e2a", "#2f5c22", "#458232"],
    behavior: [
        ["XX", "CR:cannabis_branch%2 AND CR:cannabis_leaf%5", "XX"],
        ["CR:cannabis_leaf%2", "XX", "CR:cannabis_leaf%2"],
        ["XX", "XX", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 900,
    burn: 30,
    burnTime: 100,
    hidden: true
};

elements.cannabis_leaf = {
    color: ["#4da83b", "#3d8a2e", "#5cc447"],
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 500,
    burn: 50,
    burnTime: 20,
    hidden: true,
    reactions: {
        "sunlight": { elem1: "cannabis_bud", chance: 0.005 }
    }
};

elements.cannabis_bud = {
    color: ["#4b8f3a", "#3a6e2a", "#8f3a8f", "#a052a0"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 500,
    burn: 20,
    burnTime: 200,
    hidden: false,
    reactions: {
        "paper": { elem1: null, elem2: "joint", chance: 0.5 }
    }
};

elements.coca_seed = {
    color: ["#8f3a3a", "#a34545", "#7a3030"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false,
    burn: 10,
    burnTime: 50,
    reactions: {
        "dirt": { elem1: null, elem2: "coca_branch_base", chance: 0.05 },
        "mud": { elem1: null, elem2: "coca_branch_base", chance: 0.05 }
    }
};

elements.coca_branch_base = {
    color: ["#5c4033", "#6b4a3b", "#4a3329"],
    behavior: [
        ["XX", "CR:coca_branch%10", "XX"],
        ["XX", "XX", "XX"],
        ["XX", "M1", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 950,
    burn: 40,
    burnTime: 120,
    hidden: true
};

elements.coca_branch = {
    color: ["#5c4033", "#6b4a3b", "#4a3329"],
    behavior: [
        ["XX", "CR:coca_branch%2 AND CR:coca_leaf%8", "XX"],
        ["CR:coca_leaf%5", "XX", "CR:coca_leaf%5"],
        ["XX", "XX", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 950,
    burn: 40,
    burnTime: 120,
    hidden: true
};

elements.coca_leaf = {
    color: ["#6ebf5a", "#5a9e4a", "#82d66d"],
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 400,
    burn: 50,
    burnTime: 30,
    hidden: false
};

elements.poppy_seed = {
    color: ["#303030", "#3d3d3d", "#242424"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 700,
    hidden: false,
    reactions: {
        "dirt": { elem1: null, elem2: "poppy_branch_base", chance: 0.05 },
        "mud": { elem1: null, elem2: "poppy_branch_base", chance: 0.05 }
    }
};

elements.poppy_branch_base = {
    color: ["#2e8b57", "#246e45", "#3cb371"],
    behavior: [
        ["XX", "CR:poppy_branch%10", "XX"],
        ["XX", "XX", "XX"],
        ["XX", "M1", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 900,
    burn: 30,
    burnTime: 100,
    hidden: true
};

elements.poppy_branch = {
    color: ["#2e8b57", "#246e45", "#3cb371"],
    behavior: [
        ["XX", "CR:poppy_branch%2", "XX"],
        ["CR:poppy_flower%1", "XX", "CR:poppy_flower%1"],
        ["XX", "XX", "XX"]
    ],
    category: "drugs",
    state: "solid",
    density: 900,
    burn: 30,
    burnTime: 100,
    hidden: true
};

elements.poppy_flower = {
    color: ["#d14b4b", "#e05c5c", "#b03a3a"],
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 500,
    burn: 60,
    burnTime: 20,
    hidden: true,
    reactions: {
        "sunlight": { elem1: "poppy_head", chance: 0.01 }
    }
};

elements.poppy_head = {
    color: ["#8fbc8f", "#7aa37a", "#a3d1a3"],
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 600,
    burn: 40,
    burnTime: 50,
    hidden: true,
    breakInto: "opium_latex"
};

elements.opium_latex = {
    color: ["#8a5c3a", "#734d30", "#a16b44"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    viscosity: 500,
    density: 1100,
    burn: 20,
    burnTime: 200,
    hidden: false
};

elements.shroom_spore = {
    color: "#b08f6b",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 400,
    hidden: false,
    reactions: {
        "wood": { elem1: null, elem2: "shroom", chance: 0.02 },
        "plant": { elem1: null, elem2: "shroom", chance: 0.02 }
    }
};

elements.shroom = {
    color: "#d4b896",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 600,
    hidden: false
};

elements.psilocybin = {
    color: "#7a5cfa",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: true
};

elements.acetone = {
    color: "#e3e3e3",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 784,
    burn: 80,
    burnTime: 50,
    hidden: false
};

elements.ammonia = {
    color: "#e6f2ff",
    behavior: behaviors.GAS,
    category: "drugs",
    state: "gas",
    density: 0.73,
    hidden: false
};

elements.wort = {
    color: "#8c5e2a",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1050,
    hidden: false,
    reactions: {
        "yeast": { elem1: "alcohol", elem2: "scum", chance: 0.01 }
    }
};

elements.coca_paste = {
    color: "#d9cba0",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: false
};

elements.heroin = {
    color: ["#8a4b3a", "#a35c45", "#733d30"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1250,
    tempHigh: 170,
    stateHigh: "liquid_heroin",
    hidden: false
};

elements.liquid_heroin = {
    color: ["#8a4b3a", "#733d30"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1200,
    tempLow: 160,
    stateLow: "heroin",
    hidden: true
};

elements.meth = {
    color: ["#e0ffff", "#f0ffff", "#ffffff"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1300,
    tempHigh: 170,
    stateHigh: "liquid_meth",
    burn: 30,
    burnTime: 100,
    hidden: false
};

elements.liquid_meth = {
    color: ["#e0ffff", "#f0ffff"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1200,
    tempLow: 160,
    stateLow: "meth",
    tempHigh: 300,
    stateHigh: "explosion",
    hidden: true
};

elements.ecstasy = {
    color: "#ff69b4",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.alcohol = {
    color: ["#d4b896", "#e6cfb3"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 789,
    burn: 80,
    burnTime: 40,
    fireColor: "#3366cc",
    hidden: false
};

elements.tobacco = {
    color: "#5e4b35",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 600,
    burn: 10,
    burnTime: 50,
    hidden: false
};

elements.nicotine = {
    color: "#d1b37a",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1010,
    viscosity: 100,
    hidden: false
};

elements.joint = {
    color: "#e3e3e3",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 700,
    burn: 15,
    burnTime: 150,
    hidden: false,
    reactions: {
        "fire": { elem1: "ash", elem2: "smoke" }
    }
};

elements.blunt = {
    color: "#5e4b35",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 800,
    burn: 10,
    burnTime: 250,
    hidden: false,
    reactions: {
        "fire": { elem1: "ash", elem2: "smoke" }
    }
};

elements.edible = {
    color: "#8a5c3a",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 900,
    hidden: false
};

elements.cocaine.reactions = {
    "baking_soda": { elem1: "crack", elem2: "carbon_dioxide", chance: 0.1 },
    "ammonia": { elem1: "crack", elem2: null, chance: 0.1 }
};

elements.opium_latex.reactions = {
    "acid": { elem1: "heroin", elem2: null, chance: 0.05 }
};

if (!elements.sugar) {
    elements.sugar = {
        color: "#ffffff",
        behavior: behaviors.POWDER,
        category: "drugs",
        state: "solid",
        density: 1590,
        hidden: false
    };
}
elements.sugar.reactions = {
    "yeast": { elem1: "alcohol", elem2: "carbon_dioxide", chance: 0.01 },
    "water": { elem1: "sugar_water", chance: 0.1 }
};

if (!elements.yeast) {
    elements.yeast = {
        color: "#e6d2b5",
        behavior: behaviors.POWDER,
        category: "drugs",
        state: "solid",
        density: 1000,
        hidden: false
    };
}
elements.yeast.reactions = {
    "sugar": { elem1: "alcohol", elem2: "carbon_dioxide", chance: 0.05 },
    "wort": { elem1: "alcohol", elem2: "scum", chance: 0.05 }
};

elements.vape = {
    color: ["#3d3c3b", "#5c5b5a"],
    category: "drugs",
    desc: "Turns smokable substances into smoke.",
    tool: function (pixel) {
        if (pixel.element == "meth" || pixel.element == "cannabis_bud" || pixel.element == "crack" || pixel.element == "opium_latex" || pixel.element == "tobacco" || pixel.element == "dmt_crystals") {
            changePixel(pixel, "smoke");
        }
    }
};

elements.sniff = {
    color: ["#5b89a3", "#a6deff"],
    category: "drugs",
    desc: "Sniff powder drugs.",
    tool: function (pixel) {
        if (pixel.element == "cocaine" || pixel.element == "heroin" || pixel.element == "ketamine" || pixel.element == "ecstasy" || pixel.element == "fentanyl" || pixel.element == "xanax_powder") {
            deletePixel(pixel.x, pixel.y);
        }
    }
};

elements.needle = {
    color: ["#c0c0c0", "#e0e0e0"],
    category: "drugs",
    desc: "Inject liquid drugs.",
    tool: function (pixel) {
        if (pixel.element == "heroin" || pixel.element == "morphine" || pixel.element == "ketamine_liquid" || pixel.element == "krokodil") {
            deletePixel(pixel.x, pixel.y);
        }
    }
};

elements.ephedrine = {
    color: "#e6e6e6",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.red_phosphorus = {
    color: "#8b0000",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 2340,
    burn: 100,
    burnTime: 50,
    hidden: false
};

elements.iodine = {
    color: "#4b0082",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 4933,
    stateHigh: "iodine_gas",
    tempHigh: 114,
    hidden: false
};

elements.iodine_gas = {
    color: "#800080",
    behavior: behaviors.GAS,
    category: "drugs",
    state: "gas",
    density: 11,
    hidden: true
};

elements.ephedrine.reactions = {
    "red_phosphorus": { elem1: "meth_mixture", elem2: null, chance: 0.1 }
};

elements.meth_mixture = {
    color: "#d3d3d3",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: true,
    reactions: {
        "iodine": { elem1: "meth", elem2: null, chance: 0.2 },
        "iodine_gas": { elem1: "meth", elem2: null, chance: 0.3 }
    }
};

elements.phenylacetic_acid = {
    color: "#f0f8ff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.aniline = {
    color: "#faebd7",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1021,
    hidden: false
};

elements.piperidine = {
    color: "#ffefd5",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 861,
    hidden: false
};

elements.phenylacetic_acid.reactions = {
    "aniline": { elem1: "phenylacetanilide", elem2: "water", chance: 0.1 }
};

elements.phenylacetanilide = {
    color: "#fffacd",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: true,
    reactions: {
        "piperidine": { elem1: "fentanyl", elem2: null, chance: 0.1 }
    }
};

elements.fentanyl = {
    color: "#f5f5dc",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: false
};

elements.wheat_seed = {
    color: "#d2b48c",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 700,
    hidden: false,
    reactions: {
        "dirt": { elem1: null, elem2: "wheat_plant", chance: 0.05 },
        "water": { elem1: "wheat_plant", chance: 0.1 }
    }
};

elements.wheat_plant = {
    color: "#f5deb3",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false,
    reactions: {
        "fungus": { elem1: "ergot_fungus", chance: 0.05 }
    }
};

elements.ergot_fungus = {
    color: "#800080",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 600,
    hidden: false,
    reactions: {
        "alcohol": { elem1: "ergotamine", elem2: "sludge", chance: 0.1 }
    }
};

elements.ergotamine = {
    color: "#4b0082",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: true,
    reactions: {
        "acid": { elem1: "lsd_liquid", elem2: null, chance: 0.1 }
    }
};

elements.lsd_liquid = {
    color: "#00bfff",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1000,
    hidden: false,
    reactions: {
        "paper": { elem1: null, elem2: "lsd_blotter", chance: 1.0 }
    }
};

elements.mimosa_hostilis_bark = {
    color: "#5d4037",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 900,
    hidden: false,
    reactions: {
        "naphtha": { elem1: "dmt_crystals", elem2: "sludge", chance: 0.1 }
    }
};

elements.naphtha = {
    color: "#ffdead",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 750,
    burn: 90,
    burnTime: 30,
    hidden: false
};

elements.dmt_crystals = {
    color: "#fffafa",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: true
};

elements.cough_syrup = {
    color: "#800080",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1200,
    viscosity: 200,
    hidden: false
};

elements.soda = {
    color: "#e6e6fa",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1000,
    hidden: false
};

elements.hard_candy = {
    color: "#ff69b4",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1500,
    hidden: false
};

elements.lean = {
    color: ["#9400d3", "#800080", "#9932cc"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1150,
    viscosity: 300,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.01 }
    }
};

elements.cough_syrup.reactions = {
    "soda": { elem1: "lean", elem2: "lean", chance: 0.5 }
};

elements.codeine = {
    color: "#f0f8ff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.gasoline = {
    color: "#d2b48c",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 740,
    burn: 80,
    burnTime: 40,
    hidden: false
};

elements.krokodil = {
    color: "#2f4f4f",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1100,
    hidden: false,
    reactions: {
        "body": { elem2: "rotten_meat", chance: 0.1 },
        "head": { elem2: "bone", chance: 0.1 },
        "flesh": { elem2: "rotten_meat", chance: 0.1 }
    }
};

elements.codeine.reactions = {
    "gasoline": { elem1: "krokodil_sludge", elem2: null, chance: 0.1 }
};

elements.krokodil_sludge = {
    color: "#556b2f",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    hidden: true,
    reactions: {
        "iodine": { elem1: "krokodil", elem2: null, chance: 0.2 },
        "red_phosphorus": { elem1: "krokodil", elem2: null, chance: 0.2 }
    }
};

elements.potato = {
    color: "#d2b48c",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 900,
    hidden: false
};

elements.corn = {
    color: "#ffD700",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false
};

elements.grape = {
    color: "#800080",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 950,
    hidden: false
};

elements.potato.reactions = {
    "rock": { elem1: "potato_mash", chance: 0.2 },
    "stone": { elem1: "potato_mash", chance: 0.2 }
};

elements.corn.reactions = {
    "rock": { elem1: "corn_mash", chance: 0.2 },
    "stone": { elem1: "corn_mash", chance: 0.2 }
};

elements.grape.reactions = {
    "rock": { elem1: "grape_juice", chance: 0.5 },
    "stone": { elem1: "grape_juice", chance: 0.5 }
};

elements.potato_mash = {
    color: "#e6ccb3",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1100,
    hidden: true,
    reactions: {
        "yeast": { elem1: "fermented_potato_mash", elem2: "scum", chance: 0.05 }
    }
};

elements.corn_mash = {
    color: "#f0e68c",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1050,
    hidden: true,
    reactions: {
        "yeast": { elem1: "fermented_corn_mash", elem2: "scum", chance: 0.05 }
    }
};

elements.grape_juice = {
    color: "#9932cc",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1050,
    hidden: true,
    reactions: {
        "yeast": { elem1: "wine", elem2: "scum", chance: 0.05 }
    }
};

elements.fermented_potato_mash = {
    color: "#cdb79e",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    hidden: true,
    tempHigh: 78,
    stateHigh: "vodka_vapor"
};

elements.fermented_corn_mash = {
    color: "#bdb76b",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    hidden: true,
    tempHigh: 78,
    stateHigh: "moonshine_vapor"
};

elements.wine = {
    color: "#8b0000",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    hidden: false,
    tempHigh: 78,
    stateHigh: "brandy_vapor"
};

elements.vodka_vapor = {
    color: "#f0f8ff",
    behavior: behaviors.GAS,
    category: "drugs",
    state: "gas",
    hidden: true,
    tempLow: 70,
    stateLow: "vodka"
};

elements.vodka = {
    color: ["#f0f8ff", "#e6f2ff"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 950,
    burn: 85,
    burnTime: 30,
    fireColor: "#3366cc",
    hidden: false
};

elements.moonshine_vapor = {
    color: "#fff8dc",
    behavior: behaviors.GAS,
    category: "drugs",
    state: "gas",
    hidden: true,
    tempLow: 70,
    stateLow: "moonshine"
};

elements.moonshine = {
    color: ["#fff8dc", "#faebd7"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 900,
    burn: 95,
    burnTime: 20,
    fireColor: "#3366cc",
    hidden: false
};

elements.brandy_vapor = {
    color: "#eab676",
    behavior: behaviors.GAS,
    category: "drugs",
    state: "gas",
    hidden: true,
    tempLow: 70,
    stateLow: "brandy"
};

elements.brandy = {
    color: "#8b4513",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 920,
    hidden: false
};

elements.pill_press = {
    color: "#708090",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 2000,
    hidden: false,
    reactions: {
        "ecstasy": { elem2: "ecstasy_pill", chance: 1.0 },
        "fentanyl": { elem2: "fentanyl_pill", chance: 1.0 },
        "xanax_powder": { elem2: "xanax_pill", chance: 1.0 },
        "ritalin_powder": { elem2: "ritalin", chance: 1.0 },
        "clonazepam_powder": { elem2: "clonazepam", chance: 1.0 },
        "oxycodone_powder": { elem2: "oxycodone", chance: 1.0 }
    }
};

elements.ecstasy_pill = {
    color: ["#ff00ff", "#00ffff", "#ffff00"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.fentanyl_pill = {
    color: "#add8e6",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.xanax_powder = {
    color: ["#ffffff", "#f5fffa"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.xanax_pill = {
    color: "#fffafa",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.cholesterol = {
    color: "#fffacd",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1050,
    hidden: false
};

elements.testosterone = {
    color: "#ffd700",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 950,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.cholesterol.reactions = {
    "acetone": { elem1: "testosterone", elem2: "sludge", chance: 0.05 }
};

elements.bath_salts = {
    color: ["#f0ffff", "#e6e6fa", "#fff0f5"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1300,
    hidden: false,
    reactions: {
        "body": { elem1: "fire", chance: 0.1 },
        "water": { elem1: "explosion", chance: 0.1 }
    }
};

elements.spice = {
    color: ["#556b2f", "#6b8e23", "#808000"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 850,
    burn: 50,
    burnTime: 20,
    hidden: false,
    reactions: {
        "fire": { elem1: "smoke", elem2: "vomit", chance: 0.5 }
    }
};

elements.nbome = {
    color: ["#ff00ff", "#00ffff", "#ffff00"],
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1000,
    hidden: false,
    reactions: {
        "paper": { elem1: null, elem2: "lsd_blotter", chance: 1.0 },
        "body": { elem2: "dead_body", chance: 0.05 }
    }
};

elements.banisteriopsis_vine = {
    color: "#8b4513",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false
};

elements.psychotria_leaf = {
    color: "#006400",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 600,
    hidden: false
};

elements.cauldron = {
    color: "#2f4f4f",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 2000,
    hidden: false,
    reactions: {
        "water": { elem2: "ayahuasca_tea", chance: 0.01, tempMin: 90 }
    }
};

elements.water.reactions = {
    "banisteriopsis_vine": { elem2: "ayahuasca_brew_step1", chance: 0.1, tempMin: 80 }
};
elements.ayahuasca_brew_step1 = {
    color: "#556b2f",
    behavior: behaviors.LIQUID,
    hidden: true,
    reactions: {
        "psychotria_leaf": { elem1: "ayahuasca_tea", elem2: null, chance: 0.1, tempMin: 80 }
    }
};

elements.ayahuasca_tea = {
    color: "#8b4500",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 1050,
    hidden: false
};

elements.peyote_cactus = {
    color: "#2e8b57",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 900,
    hidden: false,
    reactions: {
        "sand": { elem1: "peyote_cactus", chance: 0.01 }
    },
    breakInto: "mescaline_button"
};

elements.mescaline_button = {
    color: "#3cb371",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 800,
    hidden: false
};

elements.salvia_plant = {
    color: "#98fb98",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 600,
    hidden: false
};

elements.salvia_extract = {
    color: "#000000",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 500,
    hidden: false,
    reactions: {
        "fire": { elem1: "smoke", elem2: "flash", chance: 1.0 }
    }
};

elements.adderall = {
    color: "#ff8c00",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.ambien = {
    color: ["#e6e6fa", "#dcd0ff"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.valium = {
    color: "#4682b4",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.prozac = {
    color: "#98fb98",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.viagra = {
    color: "#1e90ff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.popper = {
    color: "#ffff00",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    density: 800,
    burn: 90,
    burnTime: 20,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.2 }
    }
};

elements.ritalin_powder = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.ritalin = {
    color: "#add8e6",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1200,
    hidden: false
};

elements.dxm_syrup = {
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "drugs",
    state: "liquid",
    viscosity: 250,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.clonazepam_powder = {
    color: "#f0ffff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.clonazepam = {
    color: ["#e0ffff", "#f5f5dc"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.pcp = {
    color: ["#f5f5f5", "#dcdcdc"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false,
    reactions: {
        "body": { elem1: "fire", chance: 0.2 },
        "water": { elem1: "explosion", chance: 0.1 }
    }
};

elements.mescaline = {
    color: "#90ee90",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.oxycodone_powder = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.oxycodone = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    hidden: false
};

elements.nexus_2cb = {
    color: ["#ff1493", "#ff69b4", "#c71585"],
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: false,
    reactions: {
        "body": { elem1: null, chance: 0.1 }
    }
};

elements.money = {
    color: "#85bb65",
    behavior: behaviors.POWDER,
    category: "drugs",
    state: "solid",
    density: 500,
    hidden: false
};

elements.cop = {
    color: "#0000ff",
    behavior: behaviors.WALL,
    category: "drugs",
    state: "solid",
    density: 2000,
    hidden: false,
    reactions: {
        "drugs": { elem2: "sludge", chance: 1.0 },
        "meth": { elem2: "sludge", chance: 1.0 },
        "cocaine": { elem2: "sludge", chance: 1.0 },
        "heroin": { elem2: "sludge", chance: 1.0 },
        "popper": { elem2: "sludge", chance: 1.0 },
        "pcp": { elem2: "sludge", chance: 1.0 }
    }
};

elements.meth.reactions.fire = { elem1: "explosion", chance: 0.5 };
elements.meth_mixture.reactions.fire = { elem1: "explosion", chance: 0.8 };
elements.acetone.reactions.fire = { elem1: "fire", chance: 0.8 };

if (!elements.human) {
    elements.human = {
        color: "#ffdab9",
        behavior: behaviors.WALL,
        category: "drugs",
        state: "solid",
        density: 1000,
        hidden: false
    };
}
elements.human.reactions = {
    "meth": { elem2: "money", chance: 0.1 },
    "cocaine": { elem2: "money", chance: 0.1 },
    "heroin": { elem2: "money", chance: 0.1 },
    "crack": { elem2: "money", chance: 0.1 },
    "lsd_blotter": { elem2: "money", chance: 0.1 },
    "nexus_2cb": { elem2: "money", chance: 0.1 },
    "ritalin": { elem2: "money", chance: 0.1 },
    "clonazepam": { elem2: "money", chance: 0.1 },
    "oxycodone": { elem2: "money", chance: 0.1 },
    "pcp": { elem2: "money", chance: 0.1 },
    "popper": { elem2: "money", chance: 0.1 }
};
