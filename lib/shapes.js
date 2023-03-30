class Shapes {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }

}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor);
    this.shape = shape;
    this.shapeColor = shapeColor
    }

    render() {
        // <circle cx="25" cy="75" r="20 height="100%" width="100%" fill="${this.shapeColor}"/> 
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor);
    this.shape = shape;
    this.shapeColor = shapeColor
    }

    render() {
        // <rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor);
    this.shape = shape;
    this.shapeColor = shapeColor
    }

    render() {
        // <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
    }
}

module.exports = {Circle, Square, Triangle}