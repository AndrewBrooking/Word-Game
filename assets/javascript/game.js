var ships = [
    "Adder", "Alliance Challenger", "Alliance Chieftain", "Alliance Crusader", "Anaconda", "Asp Explorer", "Asp Scout", "Beluga Liner", "Cobra",
    "Diamondback Explorer", "Diamondback Scout", "Dolphin", "Eagle", "Federal Assault Ship", "Federal Corvette", "Federal Dropship", "Federal Gunship",
    "Fer-de-Lance", "Hauler", "Imperial Clipper", "Imperial Courier", "Imperial Cutter", "Imperial Eagle", "Keelback", "Krait", "Krait Phantom", "Mamba",
    "Orca", "Python", "Sidewinder", "Type-10 Defender", "Type-6 Transporter", "Type-7 Transporter", "Type-9 Heavy", "Viper", "Vulture"
];

class Game {

    constructor() {
        this.wins = 0;
        this.losses = 0;
    }

    start() {
        this.guesses = [];
        this.word = this.randomWord();
        this.incorrect = 5;
    }

    randomWord() {
        return ships[Math.floor(Math.random() * ships.length)];
    }

    input(char) {
        if (!this.guesses.includes(char)) {
            this.guesses.push(char);
            this.guess(char);
        }
    }

    guess(char) {
        if (this.word.indexOf(char) >= 0) {
            // TODO
        } else {
            this.incorrect--;
        }
    }
}