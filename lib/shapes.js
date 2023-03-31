class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }

    render() {
       return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }

}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    }

    render() {
       return `<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${this.shapeColor}"/> `
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    }

    render() {
       return `<rect width="100%" height="100%" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    }

    render() {
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Shapes, Circle, Square, Triangle}