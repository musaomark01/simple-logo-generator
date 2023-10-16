const Square = require('../Square');

describe('Square', () => {
  it('should render an SVG with the correct color red and shape square', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="red" />');
  });
});