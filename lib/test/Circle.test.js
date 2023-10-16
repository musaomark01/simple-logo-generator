const Circle = require('../Circle');

describe('Circle', () => {
    it('should render an SVG with the correct color blue and shape circle', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
  });