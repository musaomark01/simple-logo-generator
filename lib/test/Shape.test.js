const Shape = require('../Shape')

describe('Shape', () => {
    it('should render <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ', () => {
        const shape = new Shape();
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
    });
  }); 