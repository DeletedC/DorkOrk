console.log("app.js is connected!");

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

class Antagonist extends Character {
    constructor (name) {
        super (name);
        this.lostToDork = false;
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

// ===== Test code =====

// const DorkOrk = new Character ("Dork Ork");
// console.log(DorkOrk.recall);

// console.log(DorkOrk);
// console.log(DorkOrk.getStatus());
// DorkOrk.study();
// console.log(DorkOrk.getStatus());
