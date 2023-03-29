class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }


}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
    }
}