const Shape = require('./Shape.js')

class Triangle extends Shape {
    constructor() {
      super(); 
    }
    setColor(color) {
        this.color = color;
      }
    render() {
    const fillAttribute = this.color ? `fill="${this.color}" />` : '';
    return `<polygon points="150, 18 244, 182 56, 182" ${fillAttribute}`;
    }
  }
module.exports = Triangle;