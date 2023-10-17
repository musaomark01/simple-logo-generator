const Shape = require('./Shape')

class Square extends Shape {
    constructor() {
      super(); 
    }
setColor(color) {
  this.color = color;
}

render() {
  const fillAttribute = this.color ? `fill="${this.color}" />` : '';
    return `<rect x="75" y="60" width="150" height="100" ${fillAttribute}`;
}
}

module.exports = Square;