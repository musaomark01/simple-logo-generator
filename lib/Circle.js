const Shape = require('./Shape')

class Circle extends Shape {
    constructor() {
      super(); 
    }
    setColor(color) {
        this.color = color;
      }
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
module.exports = Circle;