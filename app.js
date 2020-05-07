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

/////////////////////////////
// jQuery
/////////////////////////////

// ===== UI Functions and Variables =====

/* I absolutely ruined the fading functions
    Commenting the entire section out

const fadeOut = () => {
    // Cover the screen with an 0% opacity div
    // Slowly bring it up to 100% opacity
    
    // $divFader.attr("id", "divFadeOut");
    // $divFader.show();
}
const fadeIn = () => {
    // Take the 100% opacity div
    // Slowly bring it down to 0% opacity

    // $divFader.attr("id", "divFadeIn");
    // setTimeout(hideFader, 2500);
}
*/

const hideFader = () => {
    $divFader.hide();
}

const clearScreen = () => {
    $gameScreen.hide();
    $titleScreen.hide();
    $modal.hide();
}

// Info Bar, goes at the bottom of the screen
const $infoBar = $("#infoBar");
const showInfoBar = () => {
    $infoBar.show();
    // Add a sliding up animation
}

const hideInfobar = () => {
    $infoBar.hide();
}

const showModal = () => {
    $modal.show();
}

const hideModal = () => {
    $modal.hide();
}

const gameStart = () => {
    $gameScreen.show();
    showInfoBar();
    hideModal();
    $btnGameClose.prependTo($gameScreen);
    $titleScreen.hide();
}

const gameReturnToTitle = () => {
    $titleScreen.show();
    hideInfobar();
    $gameScreen().hide();
}

// ===== Title Screen =====
const $body = $('body');
const $titleScreen = $('#titleScreen');
const $gameScreen = $('#gameScreen');
const $btnPlay = $("#btnPlay");
const $modal = $('#modal');
const $btnModalClose = $('#btnModalClose');
const $btnStart = $('#btnStart');
const $divFader = $('#divFader');
const $btnGameClose = $('#btnGameClose');

// ===== Intro and Instructions =====

//////////////////////////
// Game Starts Here
//////////////////////////

$(()=> {
$btnPlay.on('click', showModal);
$btnModalClose.on('click', hideModal);
$btnStart.on('click', gameStart);
$btnGameClose.on('click', gameReturnToTitle);
});

// ===== Test code =====

// const DorkOrk = new Character ("Dork Ork");
// console.log(DorkOrk.recall);

// console.log(DorkOrk);
// console.log(DorkOrk.getStatus());
// DorkOrk.study();
// console.log(DorkOrk.getStatus());
