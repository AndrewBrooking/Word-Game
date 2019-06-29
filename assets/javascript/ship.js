class Ship {

    constructor(name, img) {
        this.name = name;
        this.img = img;
    }

    blankify() {
        let result = "";

        for (let c of this.word) {
            if (c !== " ") {
                result = result + "_";
            } else {
                result = result + " ";
            }
        }

        return result;
    }

    containsLetter(char) {
        for (let c of this.word) {
            if (char === c) {
                return true;
            }
        }

        return false;
    }

    reveal(char, blankWord) {
        for (let i = 0; i < this.word.length; i++) {
            if (char === this.word[i]) {
                blankWord[i] = char;
            }
        }
    }
}