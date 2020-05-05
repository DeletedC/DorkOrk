console.log("app.js is connected!");

class Character {
    constructor(name) {
        this.name = name;
        this.knowledge = 0;
        this.mood = 0;
        this.energy = 100;
        this.items = {};
        this.location = "";
        this.hasCrammed = false;
    }
    
    // Methods
    getLocation () {
        return this.location;
    }

    setLocation (strLocation) {
        this.location = strLocation;
    }

    study () {
        if (this.energy < 10) {
            console.log("I'm too tired to study");
        } else {
            console.log("Studying!");
            this.energy -= 5;
            this.mood += 10;
            this.knowledge += 50;
        }
    }

    getStatus () {
        return {knowledge: this.knowledge,
                mood: this.mood,
                energy: this.energy,
                }
    }
};

class Antagonist extends Character {
    constructor (name) {
        super (name);
        this.lostToDork = false;
    }

    chooseAction(rival) {
        if (rival.knowledge - this.knowledge > 50) {
            this.study();
        } else if (this.lostToDork === true) {
            this.cram();
        }
    }
}

// ===== Test code =====

// const DorkOrk = new Character ("Dork Ork");

// console.log(DorkOrk);
// console.log(DorkOrk.getStatus());
// DorkOrk.study();
// console.log(DorkOrk.getStatus());
