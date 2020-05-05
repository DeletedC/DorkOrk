console.log("app.js is connected!");

///////////////////////////
// Class Declarations
///////////////////////////

class Character {
    constructor(name) {
        this.name = name;
        this.knowledge = 0;
        this.mood = 0;
        this.energy = 100;
        this.recall = this.energy / 10;
        this.items = {};
        this.location = "";
        this.isStudying = false;
        this.hasCrammed = false;
    }
    
    // Methods
    getLocation() {
        return this.location;
    }
    setLocation (strLocation) {
        this.location = strLocation;
    }
    study() {
        if (this.energy < 10) {
            console.log("I'm too tired to study");
        } else {
            console.log("Studying!");
            // Updates energy, mood, knowledge
            this.update(-5, 10, 50);
            this.isStudying = true;
        }
    }
    getStatus() {
        return {knowledge: this.knowledge,
                mood: this.mood,
                energy: this.energy,
                }
    }
    update(energy = null, mood = null, knowledge = null) {
        this.energy += energy;
        this.mood += mood;
        this.knowledge += knowledge;
    }
};

// Wolfy's Class
class Antagonist extends Character {
    constructor (name) {
        super (name);
        this.lostToDork = false;
        this.dorkKnowledge = this.knowledge + 50;
    }

    chooseAction(rival) {
        if (rival.getLocation() === this.location && rival.isStudying === true) {
            // Check if Dork is studying, if so, also study
            // Need to add a way for isStudying to last more than a turn
            this.study();
        } else if (rival.knowledge - this.knowledge > 50) {
            this.study();
        } else if (this.lostToDork === true) {
            this.cram();
        }
    }
}

///////////////////
// Global Variables
///////////////////

const DorkOrk = new Character('Dork Ork');
const Wolfy = new Antagonist('Wolfy Doublesmart');

const day = 1;
const turn = 1;


///////////////////
// Game Functions
///////////////////

const gameUpdate = () => {
    
    // Update turn and day
    // There are 4 turns per day
    if (turn === 4) { 
        turn = 1;
        day += 1;
    } else {
        turn += 1; 
    }
    
    DorkOrk.isStudying = false;
    Wolfy.isStudying = false; 

    // Update UI with Ork's stats
    // Log Wolfy's stats to console?
}

// ===== Test code =====

// const DorkOrk = new Character ("Dork Ork");
// console.log(DorkOrk.recall);

// console.log(DorkOrk);
// console.log(DorkOrk.getStatus());
// DorkOrk.study();
// console.log(DorkOrk.getStatus());
