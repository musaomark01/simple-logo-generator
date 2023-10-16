const Shape = require('./Shape')

class Square extends Shape {
    constructor() {
      super(); 
    }
setColor(color) {
  this.color = color;
}

render() {
  return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
}
}

module.exports = Square;