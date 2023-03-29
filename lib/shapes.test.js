const shapes = require('./shapes.js');

describe('Test', () => {

  describe('Triangle', () => {
    it('should return true if a triangle was rendered', () => {
        const shape = new Triangle();
        shape.setColor("blue");

        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });


  describe('Square', () => {
    it('should return true if a square was rendered', () => {
        const shape = new Square();
        shape.setColor("blue");

        expect(shape.render()).toEqual(' <rect x="10" y="10" width="30" height="30" fill="blue" />');
    });
  });


  describe('Circle', () => {
    it('should return true if a circle was rendered', () => {
        const shape = new Circle();
        shape.setColor("blue");

        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue" />');
    });
  });
});
