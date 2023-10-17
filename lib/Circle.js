const Shape = require('./Shape')

class Circle extends Shape {
    constructor() {
      super(); 
      this.color = null;
    }
    setColor(color) {
        this.color = color;
      }
    render() {
      const fillAttribute = this.color ? `fill="${this.color}" />` : ''; 
      return `<circle cx="150" cy="100" r="80" ${fillAttribute}`;
    }
  }
module.exports = Circle;