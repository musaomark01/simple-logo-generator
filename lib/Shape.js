class Shape {
  constructor(version, width, height,xmlns) {
      this.version = version;
      this.width = width;
      this.height = height;
      this.xmlns = xmlns;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  }
}
module.exports = Shape; 