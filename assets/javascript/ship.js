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

    display(imageElement) {
        imageElement.innerHTML = "<img src='" + this.img + "' alt='" + this.name + "'>";
    }
}