class Ship {

    constructor(name, img) {
        this.name = name;
        this.img = img;
    }

    blankify() {
        let result = "";
        for (let c of this.name) {
            if (c !== " ") {
                result += "_";
            } else {
                result += " ";
            }
        }
        return result;
    }

    reveal(char, blankWord) {
        let result = blankWord;
        for (let i = 0; i < this.name.length; i++) {
            if (char === this.name[i]) {
                result = blankWord.substr(0, i) + char + blankWord.substr(i + 1);
            }
        }
        return result;
    }
}