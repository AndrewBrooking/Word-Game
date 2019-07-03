const ships = [
    new Ship("adder", "./assets/images/adder.svg"),
    new Ship("anaconda", "./assets/images/anaconda.svg"),
    new Ship("asp explorer", "./assets/images/asp-explorer.svg"),
    new Ship("asp scout", "./assets/images/asp-scout.svg"),
    new Ship("beluga liner", "./assets/images/beluga.svg"),
    new Ship("cobra", "./assets/images/cobra.svg"),
    new Ship("diamondback explorer", "./assets/images/diamondback-explorer.svg"),
    new Ship("diamondback scout", "./assets/images/diamondback-scout.svg"),
    new Ship("dolphin", "./assets/images/dolphin.svg"),
    new Ship("eagle", "./assets/images/eagle.svg"),
    new Ship("federal assault ship", "./assets/images/federal-assault-ship.svg"),
    new Ship("federal corvette", "./assets/images/federal-corvette.svg"),
    new Ship("federal dropship", "./assets/images/federal-dropship.svg"),
    new Ship("federal gunship", "./assets/images/federal-gunship.svg"),
    new Ship("fer de lance", "./assets/images/fer-de-lance.svg"),
    new Ship("hauler", "./assets/images/hauler.svg"),
    new Ship("imperial clipper", "./assets/images/imperial-clipper.svg"),
    new Ship("imperial courier", "./assets/images/imperial-courier.svg"),
    new Ship("imperial cutter", "./assets/images/imperial-cutter.svg"),
    new Ship("imperial eagle", "./assets/images/imperial-eagle.svg"),
    new Ship("keelback", "./assets/images/keelback.svg"),
    new Ship("orca", "./assets/images/orca.svg"),
    new Ship("python", "./assets/images/python.svg"),
    new Ship("sidewinder", "./assets/images/sidewinder.svg"),
    new Ship("viper", "./assets/images/viper.svg"),
    new Ship("vulture", "./assets/images/vulture.svg")
];

class Game {

    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.wordSpan = document.getElementById("word");
        this.guessesSpan = document.getElementById("guesses");
        this.guessesLeftSpan = document.getElementById("guesses-left");
        this.winsSpan = document.getElementById("wins");
        this.lossesSpan = document.getElementById("losses");
        this.shipImage = document.getElementById("ship-img");
        this.start();
    }

    start() {
        this.guesses = [];
        this.currentShip = this.randomShip();
        this.word = this.currentShip.blankify();
        this.incorrect = 0;
        this.display();

        console.log(this.currentShip.name);
    }

    randomShip() {
        return ships[Math.floor(Math.random() * ships.length)];
    }

    display() {
        this.wordSpan.innerText = this.word;
        this.guessesSpan.innerText = this.guesses;
        this.guessesLeftSpan.innerText = this.incorrect + "/5";
        this.winsSpan.innerText = this.wins;
        this.lossesSpan.innerText = this.losses;
    }

    input(char) {
        if (!this.guesses.includes(char)) {
            this.guesses.push(char);
            
            if (this.currentShip.name.includes(char)) {
                this.reveal(char);
            } else {
                this.incorrect++;
            }

            this.checkStatus();
            this.display();
        }
    }

    reveal(char) {
        for (let i = 0; i < this.currentShip.name.length; i++) {
            if (char === this.currentShip.name.charAt(i)) {
                this.word = this.word.substr(0, i) + char + this.word.substr(i + 1);
            }
        }
    }

    checkStatus() {
        let gameover = false;

        if (!this.word.includes("_")) {
            this.wins++;
            gameover = true;
        } else if (this.incorrect == 5) {
            this.losses++;
            gameover = true;
        }

        if (gameover) {
            const msg = gameover ? "win!": "lose.";
            this.currentShip.display(this.shipImage);
            alert("You " + msg + "\nThe word was " + this.currentShip.name + ".");
            this.start();
        }
    }
}

// Create a new game
let game = new Game();

// Handle user input
document.onkeyup = function(event) {
    game.input(event.key);
}