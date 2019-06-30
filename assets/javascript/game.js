const ships = [
    new Ship("adder", "../images/adder.svg"),
    new Ship("anaconda", "../images/anaconda.svg"),
    new Ship("asp axplorer", "../images/asp-explorer.svg"),
    new Ship("asp acout", "../images/asp-scout.svg"),
    new Ship("beluga liner", "../images/beluga.svg"),
    new Ship("cobra", "../images/cobra.svg"),
    new Ship("diamondback explorer", "../images/diamondback-explorer.svg"),
    new Ship("diamondback scout", "../images/diamondback-scout.svg"),
    new Ship("dolphin", "../images/dolphin.svg"),
    new Ship("eagle", "../images/eagle.svg"),
    new Ship("federal assault ship", "../images/federal-assault-ship.svg"),
    new Ship("federal corvette", "../images/federal-corvette.svg"),
    new Ship("federal dropship", "../images/federal-dropship.svg"),
    new Ship("federal gunship", "../images/federal-gunship.svg"),
    new Ship("fer de lance", "../images/fer-de-lance.svg"),
    new Ship("hauler", "../images/hauler.svg"),
    new Ship("imperial clipper", "../images/imperial-clipper.svg"),
    new Ship("imperial courier", "../images/imperial-courier.svg"),
    new Ship("imperial cutter", "../images/imperial-cutter.svg"),
    new Ship("imperial eagle", "../images/imperial-eagle.svg"),
    new Ship("keelback", "../images/keelback.svg"),
    new Ship("orca", "../images/orca.svg"),
    new Ship("python", "../images/python.svg"),
    new Ship("sidewinder", "../images/sidewinder.svg"),
    new Ship("viper", "../images/viper.svg"),
    new Ship("vulture", "../images/vulture.svg")
];

class Game {

    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.shipImage = document.getElementById("ship-ing");
        this.shipName = document.getElementById("ship-name");
        this.wordSpan = document.getElementById("word");
        this.guessesSpan = document.getElementById("guesses");
        this.guessesLeftSpan = document.getElementById("guesses-left");
        this.winsSpan = document.getElementById("wins");
        this.lossesSpan = document.getElementById("losses");
        this.start();
    }

    start() {
        this.guesses = [];
        this.currentShip = this.randomShip();
        this.word = this.currentShip.blankify();
        this.incorrect = 5;
        this.display();
    }

    randomShip() {
        return ships[Math.floor(Math.random() * ships.length)];
    }

    display() {
        this.wordSpan.innerText = this.word;
        this.guessesSpan.innerText = this.guesses;
        this.guessesLeftSpan.innerText = this.incorrect;
        this.winsSpan.innerText = this.wins;
        this.lossesSpan.innerText = this.losses;
    }

    input(char) {
        if (!this.guesses.includes(char)) {
            this.guesses.push(char);
            this.guess(char);
            this.display();
        }
    }

    guess(char) {
        if (this.currentShip.name.includes(char)) {
            this.word = this.currentShip.reveal(char);
        } else {
            this.incorrect--;
        }

        if (!this.word.includes("_")) {
            this.win();
        } else if (this.incorrect <= 0) {
            this.lose();
        }
    }

    win() {
        this.wins++;
        this.shipImage.innerHTML = "<img src='" + this.currentShip.img + "' alt='" + this.currentShip.name + "'>"
        this.shipName.innerText = this.currentShip.name;
        this.start();
    }

    lose() {
        this.losses++;
        this.shipImage.innerHTML = "<img src='" + this.currentShip.img + "' alt='" + this.currentShip.name + "'>"
        this.shipName.innerText = this.currentShip.name;
        this.start();
    }
}

// Create a new game
let game = new Game();

// Handle user input
document.onkeyup = function(event) {
    game.input(event.key);
}