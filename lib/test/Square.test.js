const Square = require('../Square');

describe('Square', () => {
  it('should render an SVG with the correct color red and shape square', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="75" y="60" width="150" height="100" fill="red" />');
  });
});